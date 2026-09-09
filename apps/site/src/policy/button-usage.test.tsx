import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { render, screen } from '@testing-library/react';
import Button from '@bdc/ui-react/button/Button';
import { describe, expect, it } from 'vitest';
import {
  SITE_SRC_DIR,
  WORKSPACE_ROOT_DIR,
  collectFiles,
  lineFromIndex,
  type Violation,
} from './policyTestUtils';

const BUTTON_BLOCK = /<Button\b([^>]*)>([\s\S]*?)<\/Button>/g;

const stripMarkup = (input: string) =>
  input
    .replace(/<[^>]*>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

describe('Policy: Button usage', () => {
  it('preserves link-vs-button semantics in shared implementations', async () => {
    const astroButtonPath = resolve(
      WORKSPACE_ROOT_DIR,
      'packages/ui-astro/src/button/Button.astro',
    );
    const astroButtonSource = await readFile(astroButtonPath, 'utf-8');

    expect(astroButtonSource).toContain("const Tag = targetUrl ? 'a' : 'button';");
    expect(astroButtonSource).toContain('...(targetUrl ? { href: targetUrl } : { type })');

    render(<Button href="/docs">Go to docs</Button>);
    expect(screen.getByRole('link', { name: 'Go to docs' })).toBeInTheDocument();

    render(<Button type="button">Do action</Button>);
    expect(screen.getByRole('button', { name: 'Do action' })).toBeInTheDocument();
  });

  it('requires an accessible name for icon-only Button usage', async () => {
    const files = await collectFiles(SITE_SRC_DIR);
    const violations: Violation[] = [];

    for (const file of files) {
      if (
        !file.relativePath.endsWith('.astro') &&
        !file.relativePath.endsWith('.mdx') &&
        !file.relativePath.endsWith('.tsx')
      ) {
        continue;
      }

      const matches = file.source.matchAll(BUTTON_BLOCK);
      for (const match of matches) {
        const attributes = match[1] ?? '';
        const body = match[2] ?? '';
        const labelText = stripMarkup(body);
        const hasDynamicLabel = /\{[\s\S]*\}/.test(body);
        const line = lineFromIndex(file.source, match.index ?? 0);

        const hasAccessibleLabel =
          attributes.includes('aria-label=') || attributes.includes('aria-labelledby=');

        if (!labelText && !hasDynamicLabel && !hasAccessibleLabel) {
          violations.push({
            file: file.relativePath,
            line,
            message:
              '<Button> has no visible text and no `aria-label`/`aria-labelledby`.',
          });
        }
      }
    }

    expect(violations).toEqual([]);
  });
});

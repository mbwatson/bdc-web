import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  SITE_SRC_DIR,
  collectFiles,
  lineFromIndex,
  type Violation,
} from './policyTestUtils';

describe('Policy: Card usage', () => {
  it('avoids raw USWDS card container markup in app code', async () => {
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

      const index = file.source.indexOf('usa-card__container');
      if (index === -1) {
        continue;
      }

      violations.push({
        file: file.relativePath,
        line: lineFromIndex(file.source, index),
        message:
          'Use approved card components (`Card`, `CardCta`, etc.) instead of raw `usa-card__container` markup.',
      });
    }

    expect(violations).toEqual([]);
  });

  it('requires page-level cards to include a primary identifying element', async () => {
    const pagesDir = resolve(SITE_SRC_DIR, 'pages');
    const files = await collectFiles(pagesDir);
    const violations: Violation[] = [];

    for (const file of files) {
      if (!file.relativePath.endsWith('.astro') && !file.relativePath.endsWith('.mdx')) {
        continue;
      }

      const cardMatches = file.source.matchAll(/<Card\b([^>]*)>([\s\S]*?)<\/Card>/g);

      for (const match of cardMatches) {
        const attributes = match[1] ?? '';
        const body = match[2] ?? '';
        const line = lineFromIndex(file.source, match.index ?? 0);

        const isApprovedAltFamily =
          attributes.includes('variant="testimonial"') ||
          attributes.includes('variant="stat"') ||
          attributes.includes('variant="metric"');

        const hasHeading = /<h[1-6]\b/i.test(body);
        const hasMarkdownHeading = /(^|\n)\s{0,3}#{1,6}\s+.+/m.test(body);
        const hasStyledTitleLikeElement =
          /font-heading-|text-bold|usa-card__heading|text-italic/i.test(body);
        const hasPrimaryElement =
          hasHeading ||
          hasMarkdownHeading ||
          isApprovedAltFamily ||
          hasStyledTitleLikeElement;

        if (!hasPrimaryElement) {
          violations.push({
            file: file.relativePath,
            line,
            message:
              '<Card> is missing a primary identifying element (heading/title or approved alternative family).',
          });
        }
      }
    }

    expect(violations).toEqual([]);
  });
});

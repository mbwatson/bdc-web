import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  SITE_SRC_DIR,
  collectFiles,
  lineFromIndex,
  type Violation,
} from './policyTestUtils';

const HERO_OPENING_TAG = /<Hero\b[\s\S]*?>/g;

describe('Policy: Hero usage', () => {
  it('requires eyebrow and description on every Hero usage in pages', async () => {
    const pagesDir = resolve(SITE_SRC_DIR, 'pages');
    const files = await collectFiles(pagesDir);
    const violations: Violation[] = [];

    for (const file of files) {
      if (!file.relativePath.endsWith('.astro') && !file.relativePath.endsWith('.mdx')) {
        continue;
      }

      const matches = file.source.matchAll(HERO_OPENING_TAG);
      for (const match of matches) {
        const tag = match[0];
        const line = lineFromIndex(file.source, match.index ?? 0);

        if (!tag.includes('eyebrow=')) {
          violations.push({
            file: file.relativePath,
            line,
            message: '<Hero> is missing required `eyebrow`.',
          });
        }

        if (!tag.includes('description=')) {
          violations.push({
            file: file.relativePath,
            line,
            message: '<Hero> is missing required `description`.',
          });
        }
      }
    }

    expect(violations).toEqual([]);
  });
});

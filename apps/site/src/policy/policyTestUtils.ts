import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const CWD = process.cwd();
const IS_SITE_CWD = CWD.endsWith('/apps/site');

export const SITE_ROOT_DIR = IS_SITE_CWD ? CWD : resolve(CWD, 'apps/site');
export const SITE_SRC_DIR = resolve(SITE_ROOT_DIR, 'src');
export const WORKSPACE_ROOT_DIR = IS_SITE_CWD ? resolve(CWD, '..', '..') : CWD;

export type FileMatch = {
  filePath: string;
  relativePath: string;
  source: string;
};

export type Violation = {
  file: string;
  line: number;
  message: string;
};

const EXTENSIONS = new Set(['.astro', '.mdx', '.tsx', '.ts']);

async function walkFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve(dir, entry.name);
      if (entry.isDirectory()) {
        return walkFiles(entryPath);
      }
      const extension = entry.name.slice(entry.name.lastIndexOf('.'));
      return EXTENSIONS.has(extension) ? [entryPath] : [];
    }),
  );
  return files.flat();
}

export async function collectFiles(rootDir: string): Promise<FileMatch[]> {
  const filePaths = await walkFiles(rootDir);
  const sources = await Promise.all(filePaths.map((filePath) => readFile(filePath, 'utf-8')));

  return filePaths.map((filePath, index) => ({
    filePath,
    relativePath: filePath.replace(`${WORKSPACE_ROOT_DIR}/`, ''),
    source: sources[index],
  }));
}

export function lineFromIndex(source: string, index: number): number {
  return source.slice(0, index).split('\n').length;
}

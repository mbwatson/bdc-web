export function slugify(name: string): string {
  const acronymMatch = name.match(/\(([^)]+)\)/);
  const base = acronymMatch ? acronymMatch[1] : name;
  return base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

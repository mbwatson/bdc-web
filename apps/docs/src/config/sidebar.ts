import type { StarlightUserConfig } from '@astrojs/starlight/types';

type Sidebar = NonNullable<StarlightUserConfig['sidebar']>;

export const sidebar: Sidebar = [
  {
    label: 'Documentation',
    autogenerate: { directory: '.' },
  },
];

import type { DocsLayoutProps } from 'fumadocs-ui/layout';
import { docs } from '@/.source';

export const layoutConfig: DocsLayoutProps = {
  nav: {
    title: 'Maxkore的博客',
    url: '/',
  },
  links: [
    {
      text: '博客',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};

export const source = docs;
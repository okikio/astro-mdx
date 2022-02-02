// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

import mdx from '@mdx-js/rollup';
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Comment out "renderers: []" to enable Astro's default component support.
  renderers: ['@astrojs/renderer-react'],
  vite: {
    plugins: [
      mdx({
        // See https://mdxjs.com/advanced/plugins
        remarkPlugins: [
          // E.g. `remark-frontmatter`
        ],
        rehypePlugins: [],
      }),
    ],
    resolve: {
      alias: {
        'react/jsx-runtime': 'react/jsx-runtime.js',
      },
    },
  },
});

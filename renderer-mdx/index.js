import mdx from "@mdx-js/rollup";
import {babelPluginSyntaxMdx} from './mdx-plugin.js'
export default {
    name: "@astrojs/renderer-react",
    client: "./client.js",
    server: "./server.js",
    jsxImportSource: "react",
    jsxTransformOptions: async () => {
        const {
            default: { default: jsx },
        } = await import("@babel/plugin-transform-react-jsx");
		
        return {
            plugins: [
                jsx(
                    {},
                    {
                        runtime: "automatic",
                        importSource: "@astrojs/renderer-react",
                    }
                ),
                // babelPluginSyntaxMdx({}, {
                //     jsx: true,
                //     jsxRuntime: "automatic",     
                //     jsxImportSource: "@astrojs/renderer-react",
                //     // See https://mdxjs.com/advanced/plugins
                //     remarkPlugins: [
                //         // E.g. `remark-frontmatter`
                //     ],
                //     rehypePlugins: [],
                // })
            ],
        };
    },
    viteConfig() {
        return {
            plugins: [
                mdx({
                    // jsx: true,
                    // jsxRuntime: "automatic",     
                    // jsxImportSource: "@astrojs/renderer-react",
                    // See https://mdxjs.com/advanced/plugins
                    remarkPlugins: [
                        // E.g. `remark-frontmatter`
                    ],
                    rehypePlugins: [],
                }),
            ],
            optimizeDeps: {
                include: [
                    "@astrojs/renderer-react/client.js",
                    "react",
                    "react/jsx-runtime",
                    "react/jsx-dev-runtime",
                    "react-dom",
                ],
                exclude: ["@astrojs/renderer-react/server.js"],
            },
            resolve: {
                dedupe: ["react", "react-dom"],
            },
            ssr: {
                external: ["react-dom/server.js"],
            },
        };
    },
};

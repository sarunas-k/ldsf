import { defineConfig } from 'vite';
import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const css = {
    'stiliai':          './assets/css/bundle.js',
    'htmega-widgets':   '../../plugins/ht-mega-for-elementor/assets/css/htmega-widgets.css'
};
export default defineConfig(() => {
    return {
        resolve: {
            alias: {
              '@': resolve(__dirname, 'build'), // resolve path
            },
          },
        plugins: [
        new ViteImageOptimizer()
        ],
        build: {
            lib: {
                entry: css
            },
            cssCodeSplit: true,
            minify: true,
            rollupOptions: {           
                output: {
                  assetFileNames: (assetInfo) => {
                    if (assetInfo.name == "stiliai.css")
                        return "stiliai.min.css";
                    else if (assetInfo.name == "htmega-widgets.css")
                        return "htmega-widgets.min.css";
                    return assetInfo.name;
                  },
                },
              },
            outDir: "build",
            emptyOutDir: true,
        },
        sourcemap: true
    }
});
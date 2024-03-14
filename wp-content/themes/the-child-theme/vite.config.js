import { defineConfig } from 'vite';
import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const css = {
    'stiliai': './assets/css/bundle.js'
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
              name: 'config',
              entry: css
            },
            cssCodeSplit: true,
            minify: true,
            rollupOptions: {           
                output: {
                  assetFileNames: (assetInfo) => {
                    if (assetInfo.name == "stiliai.css")
                        return "stiliai.min.css";
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
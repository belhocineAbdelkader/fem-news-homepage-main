/* eslint-disable prettier/prettier */
// Import necessary modules from Vite and Node.js
import { defineConfig } from "vite";
import path from "node:path";

// import image optimization  modules
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

// Specify the input and output directories for image optimization
const inputDir = "./src/assets/img";
const outputDir = "./dist/assets/img";

// Vite configuration object
export default defineConfig({
    // Build configuration
    build: {
        plugins: [
            imagemin([`${inputDir}/*.{jpg,png}`], {
                destination: outputDir,
                plugins: [
                    imageminWebp({
                        quality: 80,
                    }),
                ],
            }),
        ],

        // Asset output directory and minification options
        assetsDir: "assets",
        minify: "terser", // or 'esbuild' for esbuild-based minification
        sourcemap: true,
        cssCodeSplit: true,

        // Rollup options for asset output file names and sourcemap file names
        rollupOptions: {
            output: {
                assetFileNames: ({ name }) => {
                    const ext = path.extname(name);
                    // Organize assets based on file type
                    if (ext === ".css") {
                        return `assets/css/${name}`;
                    } else if (ext === ".woff" || ext === ".woff2") {
                        return `assets/fonts/${name}`;
                    } else if (ext === ".jpg" || ext === ".png") {
                        return `assets/img/${name}`;
                    } else if (ext === ".svg") {
                        return `assets/img/icons/${name}`;
                    } else if (ext === ".js") {
                        return `assets/js/${name}`;
                    }
                    // For other file types, use the default output format with hash
                    return `assets/${name}`;
                },
                sourcemapFileNames: "assets/js/[name].[hash].js.map",
            },
        },
    },
});

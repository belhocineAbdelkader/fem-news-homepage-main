/* eslint-disable prettier/prettier */
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
// Specify the input and output directories
const inputDir = './src/assets/images';
const outputDir = './src/assets/images';
// Run the image conversion

imagemin([`${inputDir}/*.{jpg,png}`], {
    destination: outputDir,
    plugins: [
        imageminWebp({
            quality: 80, // Adjust the quality (0 to 100)
        }),
    ],
});
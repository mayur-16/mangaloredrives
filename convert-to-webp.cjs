// convert-to-webp.cjs  (updated – creates folder automatically)
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function convertToWebP(inputDir = 'src/assets', outputDir = 'src/assets/webp') {
  // ← This line creates the webp folder if it doesn't exist
  await fs.mkdir(outputDir, { recursive: true });

  const files = await fs.readdir(inputDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, path.basename(file, ext) + '.webp');

      await sharp(inputPath)
        .webp({ quality: 82 })   // 82 is a sweet spot for photos
        .toFile(outputPath);

      console.log(`Converted → ${path.basename(outputPath)}`);
    }
  }
  console.log('All images converted to WebP! Check src/assets/webp/');
}

convertToWebP();
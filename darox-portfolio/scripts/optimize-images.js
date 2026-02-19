const fs = require('fs');
const path = require('path');

console.log("Script starting...");

try {
    const sharp = require('sharp');
    console.log("Sharp loaded successfully.");

    const imagesDir = path.join(__dirname, '../public/images');
    const MAX_WIDTH = 800;
    const QUALITY = 80;

    async function optimizeImages() {
        console.log("Checking directory:", imagesDir);
        if (!fs.existsSync(imagesDir)) {
            console.error('Directory not found:', imagesDir);
            return;
        }

        const files = fs.readdirSync(imagesDir);
        console.log(`Found ${files.length} files.`);

        for (const file of files) {
            if (file.match(/\.(png|jpg|jpeg)$/i)) {
                const filePath = path.join(imagesDir, file);
                const stats = fs.statSync(filePath);

                if (stats.size > 500 * 1024) {
                    console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);

                    try {
                        const buffer = await sharp(filePath)
                            .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                            .png({ quality: QUALITY, compressionLevel: 9 })
                            .toBuffer();

                        fs.writeFileSync(filePath, buffer);

                        const newStats = fs.statSync(filePath);
                        console.log(` -> Done! New size: ${(newStats.size / 1024).toFixed(2)} KB`);
                    } catch (err) {
                        console.error(`Error processing ${file}:`, err);
                    }
                }
            }
        }
    }

    optimizeImages().catch(err => console.error("Async error:", err));

} catch (err) {
    console.error("Critical error loading modules or starting script:", err);
}

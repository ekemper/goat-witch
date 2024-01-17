const sharp = require('sharp');

(async () => {

    const inputImg = 'public/assets/BrandHeaderXl.PNG'

    const metadata = await sharp(inputImg).metadata();
    console.log({ metadata })

    sharp(inputImg)
        .resize({ width: 1600 })
        .toFile('./public/assets/test-output.png')
        .then(data => {
            // 1600 pixels wide, auto-scaled height
            console.log({ data })
        });
})();

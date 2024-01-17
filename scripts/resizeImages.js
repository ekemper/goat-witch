const sharp = require('sharp');

const backgroundImageInfo = [
    { rawImagePath: 'public/assets/bgBugPaper.jpg', imageName: 'bgBugPaper.jpg' },
    { rawImagePath: 'public/assets/bgDeadBird.jpg', imageName: 'bgDeadBird.jpg' },
    { rawImagePath: 'public/assets/bgMountainsLanding.png', imageName: 'bgMountainsLanding.png' },
    { rawImagePath: 'public/assets/bgRockPlant.jpg', imageName: 'bgRockPlant.jpg' },
    { rawImagePath: 'public/assets/bgSkullMoss.jpg', imageName: 'bgSkullMoss.jpg' },
    { rawImagePath: 'public/assets/sectionDivider.png', imageName: 'sectionDivider.png' },
    { rawImagePath: 'public/assets/headerTopEdge.png', imageName: 'headerTopEdge.png' }
]


const resizeBackgroundImages = async (rawImagePath, imageName) => {

    // const metadata = await sharp(rawImagePath).metadata();
    // console.log({ metadata })

    sharp(rawImagePath)
        .resize({ width: 1600 })
        .toFile(`./public/assets/resized/${imageName}`)
        .then(data => {
            // 1600 pixels wide, auto-scaled height
            console.log({ data })
        });
}


(async () => {

    // const command = `ls ./public/${imgDir}`
    // const { error, stdout, stderr } = await exec(command)

    // if (stderr) console.error(`stderr: ${stderr}`);
    // // console.log(`stdout: ${stdout}`);
    // if (error) throw error

    backgroundImageInfo.map(async dat => {
        return await resizeBackgroundImages(dat.rawImagePath, dat.imageName)    
    })


})();

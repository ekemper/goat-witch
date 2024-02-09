const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fsp = require('fs').promises;

handleFiles = async (stdout, imgDir) => {
    const files = stdout.split('\n').filter(fileName => fileName.length > 0);
    const filePaths = files.map(fileName => `\n'/${imgDir}/${fileName}'`)

    jsBooger = `const filePaths = [${filePaths}\n]; \nexport default filePaths;`

    try {
        await fsp.writeFile(`./src/${imgDir}.js`, jsBooger)

    } catch (err) {
        console.log({ jsBooger })
        throw err
    }
}

const collectImagePathsByDirectory = async imgDir => {
    const command = `ls ./public/${imgDir}`
    const { error, stdout, stderr } = await exec(command)

    if(stderr) console.error(`stderr: ${stderr}`);
    // console.log(`stdout: ${stdout}`);
    if (error) throw error

    await handleFiles(stdout, imgDir)
}

const collectImagePathsFromS3 = async s3Dir => {
    
}

const imgDirs = [`PortfolioImages`, 'FlashImages']
imgDirs.map(async dir => await collectImagePathsByDirectory(dir))
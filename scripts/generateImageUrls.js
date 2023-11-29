const { exec } = require('child_process');
const fs = require('fs');


handleFiles = (stdout) => {

    const files = stdout.split('\n').filter(fileName => fileName.length > 0);


    const filePaths = files.map(fileName => `\n'${relativePathForDisplay}/${fileName}'`)
    console.log(filePaths)

    jsBooger = `const filePaths = [${filePaths}\n]; \nexport default filePaths;`

    fs.writeFile('./ImageFilePaths.js', jsBooger, err => {
        if (err) {
            console.error(err);
        }
        console.log({jsBooger})
    });


}


const relativePathForDisplay = `/portfolioImages`

exec(`ls ./public${relativePathForDisplay}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);

    handleFiles(stdout)

    console.error(`stderr: ${stderr}`);
});

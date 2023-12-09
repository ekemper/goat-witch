


var fs = require('fs')

const filePath = './src/App.js'

const action = process.argv[2]

fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {

    const formatted = action=='uncomment' 
        ? data.replace('{/* <TailwingWidthGuide/> */}', '<TailwingWidthGuide\/>')
        : data.replace('<TailwingWidthGuide/>', '{/* <TailwingWidthGuide\/> */}')

    fs.writeFile(filePath, formatted, 'utf8', err => {

        if (err) return console.log(err);
    });
});
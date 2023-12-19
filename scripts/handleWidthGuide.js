


var fs = require('fs')

const filePath = './src/App.js'

const action = process.argv[2]

fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {

    const formatted = action=='uncomment' 
        ? data.replace(
            '{/* <TailwingWidthGuide/> */}', 
            '<TailwingWidthGuide\/>'
            )
              .replace(
                '// import TailwingWidthGuide from "./TailwindWidthGuide"', 
                'import TailwingWidthGuide from "./TailwindWidthGuide"'
                )

        : data.replace(
            '<TailwingWidthGuide/>', 
            '{/* <TailwingWidthGuide\/> */}'
            )
              .replace(
                'import TailwingWidthGuide from "./TailwindWidthGuide"', 
                '// import TailwingWidthGuide from "./TailwindWidthGuide"'
                )

    fs.writeFile(filePath, formatted, 'utf8', err => {

        if (err) return console.log(err);
    });
});
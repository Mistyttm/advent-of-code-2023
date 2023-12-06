const fs = require('fs');
const readline = require('readline');

function calibrationTranslate(line) {
    let result = "";
    let resultArray = [];
    const regex = /\d/g;

    for (const character of line) {
        if (character.match(regex)) {
            resultArray.push(character);
        }
    }
    result += resultArray[0];
    result += resultArray[resultArray.length-1];

    return parseInt(result);
}

function translateDocument(file) {
    const filestream = fs.createReadStream(file);

    let tempArray = [];

    const rl = readline.createInterface({
        input: filestream,
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        tempArray.push(calibrationTranslate(line));
    });
    let result = 0;
    rl.on('close', () => {
        
        for (const element of tempArray) {
            result += element;
        }
        
        console.log(result);
    });
}

module.exports = { calibrationTranslate, translateDocument };

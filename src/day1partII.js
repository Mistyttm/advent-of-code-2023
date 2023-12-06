const fs = require('fs');
const readline = require('readline');

function calibrationTranslate(line) {
    let result = "";
    let resultArray = [];
    const numberMap = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
    };
    const regex = /(one|two|three|four|five|six|seven|eight|nine|zero|\d)/ig;
    let matches = line.match(regex);

    resultArray.push(matches[0] in numberMap ? numberMap[matches[0]] : matches[0]);
    resultArray.push(matches[matches.length - 1] in numberMap ? numberMap[matches[matches.length - 1]] : matches[matches.length - 1]);

    result = resultArray.join('');

    return parseInt(result);
}

function translateDocument(file) {
    const filestream = fs.createReadStream(file);
    let temparray = [];

    const rl = readline.createInterface({
        input: filestream,
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        temparray.push(calibrationTranslate(line));
    });
    
    rl.on('close', () => {
        let result = 0;
        for (const element of temparray) {
            result += element;
        }
        
        console.log(result);
        return result;
    });
}

module.exports = { calibrationTranslate, translateDocument };

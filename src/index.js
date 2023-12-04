let translateDocument = require("./day1").translateDocument;
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What day would you like to run> ", function (answer) {
    switch(parseInt(answer)){
        case 1:
            translateDocument("./data/day1.txt");
            break;
        default:
            console.log(`Please respond with an integer between [1-25].\nERROR: ${answer}`);
            break;
    }
    rl.close();
});

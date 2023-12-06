let day1 = require("./day1");
let day2 = require("./day1partII");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What day would you like to run> ", function(answer) {
    switch (parseInt(answer)) {
        case 1:
            day1.translateDocument("./data/day1.txt");
            day2.translateDocument("./data/day1partII.txt");
            break;
        case 2:
            
            break;
        default:
            console.log(
                `Please respond with an integer between [1-25].\nINPUT ERROR: ${answer}`
            );
            break;
    }
    rl.close();
});

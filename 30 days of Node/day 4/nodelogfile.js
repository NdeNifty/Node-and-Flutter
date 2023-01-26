//stroring console output to a logfile
var ws = require('fs');
const { Console } = require('console');
const output = ws.createWriteStream('./filename.log');
const errOutput = ws.createWriteStream('./anotherfilename.log');
// custom simple print
const print = new Console(output, errOutput);
//Now we can print to the log files
const roll = 'We are on the 4th day of a 30 day journey!!!';
print.log(roll);
print.log('This will be stored in a file');	

//and we can still print to the console
console.log(roll);
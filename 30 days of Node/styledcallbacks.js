//using styled callbacks. This is another way of using async error method
const fs = require('fs');

function nSCallback(error, data) {
  if (error) {
    console.error('Error : ', error);
    return;
  }
  console.log(data);
}
fs.readFile('somefile.txt', nSCallback);
fs.readFile('file_does_not_exists', nSCallback);						
								
//file append operation in nodejs
var fs = require('fs');
var http = require('http');
var content = "We are Appending this file synchronously using node.js";
fs.appendFileSync('message.txt', content);
console.log("File Appended Successfully");

//output the file contents to browser
http.createServer(function(req, res){
console.log('Listening on port 3000');
res.writeHead(200, {'Content-Type': 'text/plain'});
fs.readFile('message.txt', (err, data) => {
    //checking for errors
    if (err) 
        throw err;
    console.log("file read on browser succesfully");
    //sending the response
    res.end(data);
});


}).listen(3000);


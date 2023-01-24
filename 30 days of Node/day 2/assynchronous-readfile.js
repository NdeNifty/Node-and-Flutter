//Reading a File Asynchronously using nodejs
var fs=require('fs');

var http = require('http');


//reading the file to the console
fs.readFile('message.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content :  " + data);
	
});
// loading the contents on the file as an http response
http.createServer(function (req, res) {
	console.log("Port Number : 3000");
	// change the MIME type from 'text/plain' to 'text/html'
    res.writeHead(200, {'Content-Type': 'text/html'});
	//reading the content file
	fs.readFile('message.txt', (err, data) => {
		//checking for errors
		if (err) 
			throw err;
		console.log("Operation Success");
		//sending the response
		res.end(data);
	});
}).listen(3000);
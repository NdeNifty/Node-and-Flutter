//serve-string.js						
var http = require('http');

//host and port
var host = '127.0.0.1'
var port = 3000

var server = http.createServer((request, response) => {   //create the server
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World! You just served a string");
  response.end();
});

server.listen(port,host, (error) => {  
  if (error) {
    return console.log('Error occured : ', error );
  }

  console.log('server is listening on ' + host + ':'+ port);
});	
							
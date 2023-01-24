//Writing a File Asynchronously using nodejs
var fs =  require('fs');
var content= "This line was added from the node command line";
fs.writeFile('message.txt', content , (err) => {
	if (err) 
		throw err;
	console.log('It\'s saved!');
});
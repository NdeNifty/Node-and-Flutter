var fs = require('fs');
var filename = 'data.html';
var str = fs.readFileSync(filename).toString();
//regex are fount between  two foward slashes //
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim; //the modifiers are g-global scope,  i- case insensitive, m- multiline match

var myarray = str.match( pattern );
var len = myarray.length;
console.log("The number of tags in the document is  : " + len);
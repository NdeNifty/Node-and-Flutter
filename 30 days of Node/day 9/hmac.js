//Loading the crypto module in node.js
var crypto = require('crypto');

//creating hmac object 
//Hmac uses secret keys. The secret key is used 
//The Key will be used for decrypting
var hmac = crypto.createHmac('sha256', 'yoursecretkeyhere');

//passing the data to be hashed
data = hmac.update('nodejsera');

//Creating the hmac in the required format
gen_hmac= data.digest('hex');

//Printing the output on the console
console.log("hmac : " + gen_hmac);
											
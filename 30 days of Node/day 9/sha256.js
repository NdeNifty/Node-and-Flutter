 //Loading the crypto module in node.js
 var crypto = require('crypto');

 //creating hash object. The argument is usually the algorithm name
 var hash = crypto.createHash('sha256');
 
 //passing the data to be hashed
 data = hash.update('Testinga a Hash', 'utf-8');
 
 //Creating the hash in the required format
 gen_hash= data.digest('hex');
 
 //Printing the output on the console
 console.log("Hash output : " + gen_hash);
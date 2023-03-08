//Including the required packages
var mongo = require('mongodb').MongoClient;
//Establishing the connection
var new_db = "mongodb://127.0.0.1:27017/demo_db1"

//establishing the connection
mongo.connect(new_db ,(error , db) => {
	if (error){
		throw error;
	}
	console.log("Database demo_db created successfully");
	//To close the connection
	db.close();
});


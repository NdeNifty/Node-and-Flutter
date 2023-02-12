// decalare and import express
var express = require('express')
var app = express()

//get method has funciton with request and response parameters
app.get('/', function(req, res){
    res.send('Day 11 of Node and flutter');
    //note that this takes just a single res.send
    
})

//setting the port
app.listen(3000, function(){
    console.log('The server is live and it listening at port: 3000');
})
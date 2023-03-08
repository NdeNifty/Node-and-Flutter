const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema //declare the schema

//create the shema
const employeeSchema = new Schema({
    name: {
        type: String
    },
    designation: {
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    age: {
        type: Number
    },
    avatar:{
        type:String
    }
}, {Timestamp: true})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee
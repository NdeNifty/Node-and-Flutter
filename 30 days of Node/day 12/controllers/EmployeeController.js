const Employee = require('../models/Employee')

//Show all Employee list (Read All )
const index = (req, res, next) => {
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

//Show single Employee(Read)
const show = (req, res,next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured'
        })
       
    })
}

//Add Employee record to database (Insert)

const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    if(req.file){
        employee.avatar = re.file.path
    }
    employee.save()
    .then(response => {
        res.json({
            message: 'Employee record added sucessfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured. Record could not be inserted'
        })
    })
}

// Update employee using employee id
const update = (req, res, next) =>{
    let employeeID = req.body.employeeID

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(()=>{
        res.json ({
            message : 'Employee Record updated successfully'
        })
    })
    .catch(error=>{
        res.json({
            message: 'An error occured. Employee data could not be updated'
        })
    })
}

//Delete Emplpyee record
const destroy = (req, res, next) =>{
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        req.json({
            message: 'Employee deleted successfully'
        })
    })
    .catch(error => {
        req.json({
            message : 'An error occured. Employee record was not deleted'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}
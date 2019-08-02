const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

exports.list = function (req, res) {
    Employee.find({}, function (err, employees) {
        if (err)
            res.send(err);
        res.json(employees);
    });
};




exports.create = function (req, res) {
    const table = new Employee(req.body);
    table.save(function (err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};


exports.read = function (req, res) {
    Employee.findById(req.params.id, function (err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};


exports.update = function (req, res) {
    Employee.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};


exports.delete = function (req, res) {


    Employee.remove({
        _id: req.params.id
    }, function (err, employee) {
        if (err)
            res.send(err);
        res.json({ message: 'Employee successfully deleted' });
    });
};
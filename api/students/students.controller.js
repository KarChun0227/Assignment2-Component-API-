var _ = require('lodash')
var Student = require('./student.model');

function handleError(res, err) {
    return res.status(500).json(err);
}

exports.index = function(req, res) {
      Student.find(function (err, students) {
        if(err) { return handleError(res, err); }
        console.log('index ok' + students[0]);
        return res.status(200).json(students);
      });
};

exports.create = function(req, res) {
      Student.create(req.body, function(err, student) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(student);
      });
};

exports.update = function(req, res) {
   Student.findById(req.params.id, function (err, student) {
        if(err) { return handleError(res, err); }
        student.name = req.body.name
        student.studentid = req.body.studentid
        student.save(function (err) {
            if(err) { return handleError(res, err); }
            return res.sendStatus(200, 'Update successful');
        });
    });
 }

exports.show = function(req, res) {
    Student.findById(req.params.id, function (err, student){
        if(err) {return handleError (res, err);}
        return res.status(200).json(student);
    });
}

exports.destroy = function(req, res) {
    Student.findById(req.params.id, function (err, student) {
        if(err) { return handleError(res, err); }        
        student.remove(function (err) {
            if(err) { return handleError(res, err); }
            return res.sendStatus(200,'Deleted');
        });
    })
}
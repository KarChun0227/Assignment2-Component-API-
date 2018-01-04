var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
name: { type: String, required: true } ,
studentid: { type: Number, required: true} ,
component: { type: Number, required: true, min:0, max:100},
math: { type: Number, required: true, min:0, max:100 },
programming: { type: Number, required: true, min:0, max:100 },
networking: { type: Number, required: true, min:0, max:100 }
}, { collection: "studentdb"});

module.exports = mongoose.model('students', StudentSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
	task: String,
	active: Boolean
});

module.exports = mongoose.model('Todo',todoSchema);

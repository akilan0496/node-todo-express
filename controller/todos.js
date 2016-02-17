var ToDo = require('../models/todos.js');

exports.getTodos = function(req,res){
	console.log(req.query.active);
	if(req.query.active){
		console.log('active flag is present...');
		ToDo.find({active:req.query.active},function(err,todos){
			if(err) throw err;
			res.json(todos);
		});
	}else{
		console.log('active flag is not present...');
		ToDo.find(function(err,todos){
			if(err) throw err;
			res.json(todos);
		});	
	}
}

exports.getTodoById = function(req,res){
	console.log(req.params.id);
	ToDo.findOne({_id:req.params.id},function(err,todos){
		if(err) throw err;
		res.json(todos);
	})
}

exports.addTodos = function(req,res){
	console.log('addTodos121: '+req.body);
	var todo = new ToDo(req.body);
	todo.save(todo,function(err,todo){
		if(err) throw err;
		res.json(todo);
	})
}

exports.updateTodos = function(req,res){
	console.log("updateTodos... "+req.params.id);
	ToDo.findOne({_id:req.params.id},function(err,todo){
		if(err) throw err;
		todo.active = req.body.active;
		todo.update(todo,function(err,todo){
			if(err) throw err;
			res.json(todo);
		});
		
	});
}

exports.deleteTodos = function(req,res){
	console.log("updateTodos... "+req.params.id);
	ToDo.findOne({_id:req.params.id},function(err,todo){
		if(err) throw err;
		todo.remove(todo,function(err,todo){
			if(err) throw err;
			res.json(todo);
		});
		
	});
}
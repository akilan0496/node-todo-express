var express = require('express');
var router = express.Router();

var todoController = require('../controller/todos.js');

router.get('/todos',todoController.getTodos);

router.get('/todos/:id',todoController.getTodoById);

router.post('/todos',todoController.addTodos);

router.post('/todos/:id',todoController.updateTodos);

router.delete('/todos/:id',todoController.deleteTodos);

module.exports = router;

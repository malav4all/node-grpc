const express = require('express');
const grpcController = require('../controllers/grpc');


const router = express.Router();


router.get('/todos', grpcController.listTodos);
router.post('/todos', grpcController.createTodo);


module.exports = router;

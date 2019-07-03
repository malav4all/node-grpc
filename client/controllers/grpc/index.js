const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');


const packageDefinition = protoLoader.loadSync(`${__dirname}../../../../todo.proto`, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const todoPackageDefinition = grpc.loadPackageDefinition(packageDefinition).todo;

const client = new todoPackageDefinition.TodoService(
    'localhost:50051',
    grpc.credentials.createInsecure(),
);


const listTodos = (req, res) => {
    client.getTodos({}, (error, result) => {
        if (!error) {
            res.status(200).json(result);
        } else {
            res.status(400).json(error);
        }
    });
};


const getSingleTodo = (req, res) => {
    const { id } = req.params;
    client.getSingleTodo({ id }, (error, result) => {
        if (!error) {
            res.status(200).json(result);
        } else {
            res.status(400).json(error);
        }
    });
};


const deleteTodo = (req, res) => {
    const { id } = req.params;
    client.deleteTodo({ id }, (error, result) => {
        if (!error) {
            res.status(200).json(result);
        } else {
            res.status(400).json(error);
        }
    });
};


const createTodo = (req, res) => {
    const { body } = req;
    let id = Math.floor(Math.random() * 1000000) + 1;
    id = id.toString();
    const newTodo = {
        id,
        title: body.title,
        completed: false
    };
    client.createTodo(newTodo, (error, todo) => {
        if (!error) {
            res.status(201).json(todo);
        } else {
            res.status(400).json(error);
        }
    });
};


module.exports = {
    listTodos,
    createTodo,
    getSingleTodo,
    deleteTodo
};


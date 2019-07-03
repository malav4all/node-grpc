const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./todo.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const todoPackageDefinition = grpc.loadPackageDefinition(packageDefinition).todo;

const Services = require('./services');


const server = new grpc.Server();
server.addService(todoPackageDefinition.TodoService.service, {
    getTodos: Services.Todo.getTodos,
    createTodo: Services.Todo.createTodo
});

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:50051');
server.start();


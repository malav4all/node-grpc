const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./todo.proto');
const todoProto = grpc.loadPackageDefinition(packageDefinition);

const Services = require('./services');


const server = new grpc.Server();
server.addService(todoProto.TodoService.service, {
  list: Services.getTodos,
  insert: Services.createTodo,
});

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:50051');
server.start();


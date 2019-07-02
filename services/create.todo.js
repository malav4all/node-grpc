const todos = [
  { id: '1', title: 'New Todo 1. ', completed: true },
  { id: '2', title: 'New Todo 2', completed: false },
  { id: '3', title: 'New Todo 3', completed: false },
];


function createTodo(call, callback) {
  const todo = call.request;
  let id = Math.floor(Math.random() * 10000) + 1;
  id = id.toString();
  todo.id = id;
  todos.push(todo);
  callback(null, todo);
}


module.exports = createTodo;

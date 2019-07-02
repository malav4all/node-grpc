const todos = [
  { id: '1', title: 'New Todo 1. ', completed: true },
  { id: '2', title: 'New Todo 2', completed: false },
  { id: '3', title: 'New Todo 3', completed: false },
];


function getTodos(call, callback) {
  callback(null, todos);
}


module.exports = getTodos;

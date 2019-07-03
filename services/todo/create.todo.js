const db = require('../../db');


function createTodo(call, callback) {
    console.log('Creating todo');
    const todo = call.request;
    let id = Math.floor(Math.random() * 1000000) + 1;
    id = id.toString();
    todo.id = id;
    db.saveTodo(id, todo)
        .then(() => {
            callback(null, todo);
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = createTodo;

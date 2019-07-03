const db = require('../../db');


function createTodo(call, callback) {
    const todo = call.request;
    const { id } = todo;
    db.saveTodo(id, todo)
        .then(() => {
            callback(null, todo);
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = createTodo;

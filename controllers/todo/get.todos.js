const db = require('../../db');


function getTodos(call, callback) {
    db.getAllTodos()
        .then((result) => {
            if (!result) {
                callback(null, { todos: [] });
            }
            callback(null, { todos: result });
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = getTodos;

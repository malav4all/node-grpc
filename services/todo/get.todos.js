const db = require('../../db');


function getTodos(call, callback) {
    db.getAllTodos()
        .then((result) => {
            let todos = [];
            if (result) {
                todos = result;
            }
            callback(null, todos);
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = getTodos;

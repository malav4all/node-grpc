const db = require('../../db');


function getTodos(call, callback) {
    db.getAllTodos()
        .then((result) => {
            if (!result) {
                callback(null, { todos: [] });
            }
            const items = [];
            for (i in result) {
                items.push(JSON.parse(result[i]));
            }
            callback(null, { todos: items });
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = getTodos;

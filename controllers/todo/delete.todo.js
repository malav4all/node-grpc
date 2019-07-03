const db = require('../../db');


function deleteTodo(call, callback) {
    const { id } = call.request;
    db.deleteTodo(id)
        .then((result) => {
            callback(null, 'true');
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = deleteTodo;

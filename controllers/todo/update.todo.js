const db = require('../../db');


function updateTodo(call, callback) {
    const { arg } = call.request;
    const { id } = arg;
    db.updateTodo(id, arg)
        .then(() => {
            callback(null, {
                status: true
            });
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = updateTodo;

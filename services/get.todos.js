const todos = [
    { id: '1', title: 'New Todo 1. ', completed: true }
];


function getTodos(call, callback) {
    callback(null, todos);
}


module.exports = getTodos;

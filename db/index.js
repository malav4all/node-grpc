const Todo = require('../models/todo');


const saveTodo = (data) => new Promise((async(resolve, reject) => {
    try {
        const todo = new Todo(data);
        const newTodo = await todo.save();
        resolve(newTodo);
    } catch (e) {
        reject(e);
    }
}));


const getAllTodos = () => new Promise((async(resolve, reject) => {
    try {
        const data = Todo.find().sort({ id: 'asc' }).exec();
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));


const getTodo = (key = '') => new Promise((async(resolve, reject) => {
    try {
        const data = await Todo.findOne({ id: key }).exec();
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));


const deleteTodo = (key = '') => new Promise((async(resolve, reject) => {
    try {
        const data = await Todo.findOneAndDelete({ id: key }).exec();
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));


const updateTodo = (key = '', arg) => new Promise((async(resolve, reject) => {
    try {
        const data = await Todo.findOneAndUpdate({ id: key }, arg, { new: true }).exec();
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));


module.exports = {
    saveTodo,
    getAllTodos,
    getTodo,
    deleteTodo,
    updateTodo
};

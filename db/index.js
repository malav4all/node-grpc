const redisClient = require('../lib/redis');
const config = require('../config');

const arg = config.todo_cache_name;

const saveTodo = (key, data) => new Promise((async(resolve, reject) => {
    try {
        await redisClient.hsetAsync(arg, key, JSON.stringify(data));
        resolve(true);
    } catch (e) {
        reject(e);
    }
}));


const getAllTodos = () => new Promise((async(resolve, reject) => {
    try {
        const result = await redisClient.hgetallAsync(arg);
        const data = result;
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));


const getTodo = (key = '') => new Promise((async(resolve, reject) => {
    try {
        const result = await redisClient.hgetAsync(arg, key);
        const data = result;
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));


const removeTodo = (key = '') => new Promise((async(resolve, reject) => {
    try {
        await redisClient.hdelAsync(arg, key);
        resolve(true);
    } catch (e) {
        reject(e);
    }
}));


module.exports = {
    saveTodo,
    getAllTodos,
    getTodo,
    removeTodo
};

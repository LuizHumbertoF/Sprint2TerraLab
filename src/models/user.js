"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.getUserByEmail = exports.updateUser = exports.createUser = void 0;
var uuid_1 = require("uuid");
var users = [];
function createUser(user) {
    user.id = (0, uuid_1.v4)();
    users.push(user);
    return user;
}
exports.createUser = createUser;
function updateUser(user) {
    var index = users.findIndex(function (item) { return item.id === user.id; });
    users[index] = user;
}
exports.updateUser = updateUser;
function getUserByEmail(email) {
    return users.find(function (item) { return item.email === email; });
}
exports.getUserByEmail = getUserByEmail;
function removeUser(id) {
    var index = users.findIndex(function (item) { return item.id == id; });
    users.splice(index, 1);
}
exports.removeUser = removeUser;

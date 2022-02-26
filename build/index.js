"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var welcome = function (name) {
    var message = "Hello world mr ".concat(name);
    return message;
};
console.log(welcome('Olu'));
exports.default = {
    welcome: welcome
};

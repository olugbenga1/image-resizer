"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
describe('function testing index', function () {
    it('should expect an object instance', function () {
        expect(index_1.default).toBeInstanceOf(Object);
    });
});
console.log(index_1.default);

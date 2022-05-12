"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./route/index"));
var app = (0, express_1.default)();
var PORT = 3000;
app.use('/api/v1', index_1.default);
app.listen(PORT, function () {
    console.log("app is listening on port ".concat(PORT));
});
exports.default = app;

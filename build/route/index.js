"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_resize_1 = __importDefault(require("./api/image_resize"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('Welcome to the resize endpoint');
    // console.log(req.params)
});
routes.use(image_resize_1.default);
exports.default = routes;

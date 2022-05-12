"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp_1 = require("../../utilities/sharp");
console.log(sharp_1.imageResizeSharp);
var imageResize = express_1.default.Router();
imageResize.get("/imageresize", function (req, res) {
    var name = String(req.query.name);
    var height = Number(req.query.height);
    var width = Number(req.query.width);
    (0, sharp_1.imageResizeSharp)(name, height, width);
});
exports.default = imageResize;

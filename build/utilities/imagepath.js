"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizedImagePath = exports.imagePath = void 0;
var path_1 = __importDefault(require("path"));
var dir = process.cwd();
// getting the path of the images folder and the resized images folder
var imagePath = path_1.default.resolve(path_1.default.join(dir, "./images"));
exports.imagePath = imagePath;
var resizedImagePath = path_1.default.resolve(path_1.default.join(dir, "/images/resizedimages"));
exports.resizedImagePath = resizedImagePath;
console.log(imagePath);

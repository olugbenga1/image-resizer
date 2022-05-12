import express from "express";
import { imageResizeSharp } from "../../utilities/sharp";

console.log(imageResizeSharp);
const imageResize = express.Router();

imageResize.get("/imageresize", (req, res) => {
  const name = String(req.query.name);
  const height = Number(req.query.height);
  const width = Number(req.query.width);
  imageResizeSharp(name, height, width);
});

export default imageResize;

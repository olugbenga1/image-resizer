import path from "path";
const dir = process.cwd();

// getting the path of the images folder and the resized images folder
const imagePath = path.resolve(path.join(dir, "./images"));
const resizedImagePath = path.resolve(path.join(dir, "/images/resizedimages"));

console.log(imagePath);

export { imagePath, resizedImagePath };

import { imagePath, resizedImagePath } from "./imagepath";
import sharp from "sharp";

// resize image function using the sharp constructor
export const imageResizeSharp = async (
  name: string,
  width: number,
  height: number
): Promise<void> => {
  try {
    const imgPath = `${imagePath}/${name}.jpeg`;
    const resizedImgPath = `${resizedImagePath}/${name}_${width}_${height}.jpeg`;
    const response = await sharp(imgPath)
      .resize(width, height)
      .toFile(resizedImgPath);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

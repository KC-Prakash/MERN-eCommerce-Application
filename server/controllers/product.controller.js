import ProductModel from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

var imagesArr = [];
export async function uploadImages(request, response) {
  try {
    imagesArr = [];

    const image = request.files;

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    for (let i = 0; i < image?.length; i++) {
      const img = await cloudinary.uploader.upload(
        image[i].path,
        options,
        function (error, result) {
          imagesArr.push(result.secure_url);
          fs.unlinkSync(`uploads/${request.files[i].filename}`);
        }
      );
    }

    return response.status(200).json({
      images: imagesArr,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function createProduct(request, response) {
  try {
    const {
      name,
      description,
      brand,
      price,
      oldPrice,
      catName,
      catId,
      subCatName,
      subCatId,
      thirdSubCatName,
      thirdSubCatId,
      stock,
      rating,
      isFeatured,
      discount,
      size,
      weight,
    } = request.body;
    const images = imagesArr;

    let product = new ProductModel({
      name: name,
      description: description,
      images: images,
      brand: brand,
      price: price,
      oldPrice: oldPrice,
      catName: catName,
      catId: catId,
      subCatName: subCatName,
      subCatId: subCatId,
      thirdSubCatName: thirdSubCatName,
      thirdSubCatId: thirdSubCatId,
      stock: stock,
      rating: rating,
      isFeatured: isFeatured,
      discount: discount,
      size: size,
      weight: weight,
    });

    product = await product.save();

    if (!product) {
      response.status(500).json({
        error: true,
        success: false,
        message: "Product Not Created",
      });
    }

    imagesArr = [];

    response.status(200).json({
      error: false,
      success: true,
      message: "Product Created Successfully.",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product
    });
  }
}

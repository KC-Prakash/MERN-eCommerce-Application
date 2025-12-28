import CategoryModel from "../models/category.model.js";

export async function createCategory(request, response) {
  try {
    const { name, parentId, parentCatName } = request.body;

    let category = new CategoryModel({
      name: name,
      parentCatName: parentCatName,
      parentId: parentId,
    });

    if (!category) {
      return response.status(500).json({
        error: true,
        success: false,
        message: "Category Not Created",
      });
    }

    category = await category.save();

    return response.status(200).json({
      category: category,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getCategories(request, response) {
  try {
    const categories = await CategoryModel.find();
    const categoryMap = {};

    categories.forEach((cat) => {
      categoryMap[cat._id] = { ...cat._doc, children: [] };
    });

    const rootCategories = [];

    categories.forEach((cat) => {
      if (cat.parentId) {
        categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
      } else {
        rootCategories.push(categoryMap[cat._id]);
      }
    });

    return response.status(200).json({
      error: false,
      success: true,
      data: rootCategories,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

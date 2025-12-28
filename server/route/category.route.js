import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

// import all controllers
import {
  createCategory,
  getCategories,
} from "../controllers/category.controller.js";

const categoryRouter = Router();
categoryRouter.post("/create", auth, createCategory);
categoryRouter.get("/", auth, getCategories);

export default categoryRouter;

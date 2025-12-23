import express, { request, response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/connectDB.js";

// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import multer from "multer";
// import { v2 as cloudinary } from "cloudinary";

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy: false
}))

const PORT = process.env.PORT

app.get("/",(request,response)=>{
    // server to client
    response.json({
        message : "Server Is Running at PORT : " + PORT
    })
})

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server Is Running:", PORT);
    })
})
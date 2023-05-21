import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import {
  uploadForMainPage,
  getStudentData,
  deleteStudentData,
} from "./controllers/MainPageHandler.js";

import {
  uploadForResultPage,
  getStudentDataR,
  deleteStudentDataR,
} from "./controllers/ResutlPageHandler.js";

import {
  uploadShots,
  getShots,
  deleteShots,
} from "./controllers/ShotsHandler.js";
import multer from "multer";

const app = express();
dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5001;
const DB = process.env.DB;

// Upload System
const upload = multer({ dest: "uploads/" });

app.post(
  "/9970116791/mainpage",
  upload.single("imagebuffer"),
  uploadForMainPage
);
app.post("/9970116791/mainpage/delete", deleteStudentData);
app.get("/9970116791/mainpage", getStudentData);

// Result
app.post(
  "/9970116791/resultpage",
  upload.single("imagebuffer"),
  uploadForResultPage
);
app.post("/9970116791/resultpage/delete", deleteStudentDataR);
app.get("/9970116791/resultpage", getStudentDataR);

// Shots
app.post("/9970116791/shots", uploadShots);
app.post("/9970116791/shots/delete", deleteShots);
app.get("/9970116791/shots", getShots);

// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"), (err) => {
//     res.status(500).send(err);
//   });
// });

mongoose
  .connect(DB)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });

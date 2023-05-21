import fs from "fs";
import mainPageImgSchema from "../models/mainPageImgSchema.js";

export const uploadForMainPage = async (req, res) => {
  try {
    const { fname, course, marks } = req.body;
    if (!fname || !course || !marks) {
      return res.status(406).json("Enter all the requried field");
    }
    const imageBuffer = fs.readFileSync(req.file.path);

    const contact = await mainPageImgSchema.create({
      fname,
      imageBuffer,
      course,
      marks,
    });

    if (!contact) {
      return res.status(406).json("Issue with uploading files on database");
    }
    return res.status(200).json("Successfully added the data");
  } catch (error) {
    console.log(error);
    res.status(500).send("Uploading Error");
  }
};
export const getStudentData = async (req, res) => {
  const allData = await mainPageImgSchema.find();
  if (!allData) {
    return res.status(400).send("Data Cannot be retrieved");
  }
  return res.status(200).send(allData);
};

export const deleteStudentData = async (req, res) => {
  const { id } = req.body;
  const studentDeleted = await mainPageImgSchema.deleteOne({ _id: id });

  if (!studentDeleted) {
    return res.status(400).send("Cannot Delete the item");
  }
  return res.status(200).send("Student Data delete successfully");
};

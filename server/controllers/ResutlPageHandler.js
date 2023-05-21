import fs from "fs";
import resultPageImgSchema from "../models/resultPageImgSchema.js";

export const uploadForResultPage = async (req, res) => {
  try {
    const { fname, course, year, marks } = req.body;
    if (!fname || !course || !marks || !year) {
      return res.status(406).json("Enter all the requried field");
    }
    const imageBuffer = fs.readFileSync(req.file.path);

    const contact = await resultPageImgSchema.create({
      fname,
      imageBuffer,
      course,
      marks,
      year,
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
export const getStudentDataR = async (req, res) => {
  const allData = await resultPageImgSchema.find();
  if (!allData) {
    return res.status(400).send("Data Cannot be retrieved");
  }
  return res.status(200).send(allData);
};

export const deleteStudentDataR = async (req, res) => {
  const { id } = req.body;
  const studentDeleted = await resultPageImgSchema.deleteOne({ _id: id });

  if (!studentDeleted) {
    return res.status(400).send("Cannot Delete the item");
  }
  return res.status(200).send("Student Data delete successfully");
};

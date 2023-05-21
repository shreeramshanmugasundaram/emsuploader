import shotsLinkSchema from "../models/shotsLinkSchema.js";

export const uploadShots = async (req, res) => {
  try {
    const { link } = req.body;
    console.log(req.body);
    if (!link) {
      return res.status(406).json("Enter all the requried field");
    }

    const addedLink = await shotsLinkSchema.create({
      link,
    });

    if (!addedLink) {
      return res.status(406).json("Issue with uploading files on database");
    }
    return res.status(200).json("Successfully added the data");
  } catch (error) {
    console.log(error);
    res.status(500).send("Uploading Error");
  }
};
export const getShots = async (req, res) => {
  const allData = await shotsLinkSchema.find();
  if (!allData) {
    return res.status(400).send("Data Cannot be retrieved");
  }
  return res.status(200).send(allData);
};

export const deleteShots = async (req, res) => {
  const { id } = req.body;
  const studentDeleted = await shotsLinkSchema.deleteOne({ _id: id });

  if (!studentDeleted) {
    return res.status(400).send("Cannot Delete the item");
  }
  return res.status(200).send("Student Data delete successfully");
};

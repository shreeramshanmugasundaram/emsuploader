import mongoose from "mongoose";

const mainPageImgSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  marks: {
    type: String,
    required: true,
  },
  imageBuffer: {
    type: Buffer,
    required: true,
  },
  createdon: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("emsacademy_mainPageImg", mainPageImgSchema);

import mongoose from "mongoose";

const shotsLinkSchema = mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  createdon: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("emsacademy_ytshotslink", shotsLinkSchema);

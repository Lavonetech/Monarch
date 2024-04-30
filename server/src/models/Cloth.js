import mongoose from "mongoose";

const ClothSchema = new mongoose.Schema({
  name: { type: String, required: true },
  thumbnail: { type: String, required: true },
  subParts: [
    {
      name: { type: String, required: true },
      thumbnail: { type: String, required: true },
      bigImg: { type: String, required: true },
    },
  ],
});

export const Cloth = mongoose.model("Cloth", ClothSchema);

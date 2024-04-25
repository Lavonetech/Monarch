import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
});

export const Item = mongoose.model("Item", itemSchema);
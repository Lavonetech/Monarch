import mongoose from "mongoose";

const sleeveSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
});

export const Sleeve = mongoose.model("Sleeve", sleeveSchema);

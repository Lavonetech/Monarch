import mongoose from "mongoose";

const partSchema = new mongoose.Schema({
    label: { type: String, required: true },
    thumbnail: { type: String, required: true },
    items: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: false}
    ]
});

export const Part = mongoose.model("Part", partSchema);
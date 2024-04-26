import { Router } from "express";
import { ImgUpload } from "../utility/DiskStore.js";
import { Cloth } from "../models/Cloth.js";
import { ImgUploadBigImage } from "../utility/DiskStore.js";

const routes = Router();

// Route to save main part
routes.post("/main-part", ImgUpload, async (req, res) => {
  const { name } = req.body;

  const thumbnail = req.files[0].filename;

  if (!name || !thumbnail) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newPart = new Cloth({
      name,
      thumbnail,
    });

    await newPart.save();

    res.status(200).json({ message: "Part has been saved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get all parts
routes.get("/parts", async (req, res) => {
  try {
    const parts = await Cloth.find();

    res.status(200).json(parts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a part
routes.get("/part/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const part = await Cloth.findById(id);

    if (!part) {
      return res.status(404).json({ message: "Part not found" });
    }

    res.status(200).json(part);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to save sub part
routes.post("/sub-part", ImgUpload, async (req, res) => {
  const { name, id } = req.body;

  const thumbnail = req.files[0]?.filename;
  const bigImg = req.files[1]?.filename;

  console.log(thumbnail, bigImg, id);

  if (!name || !thumbnail || !bigImg || !id) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const part = await Cloth.findById(id);

    if (!part) {
      return res.status(404).json({ message: "Part not found" });
    }

    const newSubPart = {
      name,
      thumbnail,
      bigImg,
    };

    part.subParts.push(newSubPart);

    await part.save();

    res.status(200).json({ message: "Sub part has been saved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get sub part by id
routes.get("/sub-part/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const part = await Cloth.findOne({ "subParts._id": id });

    if (!part) {
      return res.status(404).json({ message: "Sub part not found" });
    }

    const subPart = part.subParts.id(id);

    res.status(200).json(subPart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// send image
routes.get("/image/:img", (req, res) => {
  const { img } = req.params;
  res.sendFile(`uploads/${img}`, { root: "." });
});

export default routes;

import multer from "multer";

// Disk storage for main part images
const ImageUpload = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "_" + file.originalname
    );
  },
});

export const ImgUpload = multer({ storage: ImageUpload }).array("image", 10);
export const ImgUploadBigImage = multer({ storage: ImageUpload }).array(
  "bigImg",
  10
);

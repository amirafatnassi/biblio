const path = require("path");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "pdfFolder");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

function fileFilter(req, file, cb) {
  const allowedExtensions = [".pdf"];
  const extension = path.extname(file.originalname);
  cb(null, allowedExtensions.includes(extension));
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 20000,
  },
});
module.exports = upload;

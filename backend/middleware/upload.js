
const multer = require("multer");
const appError = require("../utils/appError");

const storage = multer.memoryStorage();

const upload = multer({
    storage,

    fileFilter: (req, file, cb) => {
        const imageType = file.mimetype.split("/")[0];

        if (imageType === "image") {
            return cb(null, true);
        }

        return cb(appError.create("only image is allowed", 400), false);
    },

    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

module.exports = upload;

const multer = require("multer")


const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1]
        const fileName = `recipe-${Date.now()}.${ext}`
        cb(null, fileName)
    }
})

const upload = multer({
    storage: diskStorage, fileFilter: (req, file, cb) => {
        const imageType = file.mimetype.split("/")[0]
        if (imageType === "image") {
            return cb(null, true)
        } else {
            return cb(appError.create("only image is allowed", 400), false)
        }
    }
})

module.exports = upload
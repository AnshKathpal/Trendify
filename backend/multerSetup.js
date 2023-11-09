const multer = require("multer")

const storage = multer.diskStorage({
    destination : (req,res,cb) => {
        cb(null,'uploads/');
    },
    filename : (req,res,cb) => {
        cb(null,file.originalname)
    }
})

const upload = multer({storage})
module.exports = upload;
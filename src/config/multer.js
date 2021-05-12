const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'));
        },
        filename: (req, file, cb) => {
            const fileName = 'script-qgis.py';
            cb(null, fileName)
        }
    }),
    fileFilter: (req, file, cb) =>{
        if(path.extname(file.originalname) == '.py'){
            cb(null, true);
        }
        else{
            cb(new Error('Invalid file type'));
        }
    }
};
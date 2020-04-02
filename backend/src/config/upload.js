const multer = require('multer');
const path = require('path');

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'public', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'public', 'uploads'))
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname)
      const filename = path.basename(file.originalname, ext)

      cb(null, `${filename}-${Date.now()}${ext}`)
    }
  })
}
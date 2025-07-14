const cloudinary = require('./cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'userCreateUploads',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif'],
  },
});

module.exports = { storage };

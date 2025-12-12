const {Router}= require('express');
const router = Router();
const usersController = require('../Controls/users.controller');
const { verifyToken } = require('../middleware/verifyToken.middleware');
const multer  = require('multer')
const httpStatus = require('../utils/httpStatus')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    console.log('files', file);
    cb(null, 'uploads')
  },
  filename: function (req, file, cd){
    const ext = file.mimetype.split('/')[1];
    const fileName =  `user-${Date.now()}.${ext}`;
    cd(null, fileName);
}
})
//this to 
const fileFilter = function (req, file, cb){
    const fileType = file.mimetype.split('/')[0];
    if(fileType === 'image'){
        return cb(null, true)
    }else{
        return cb(new Error("Only image files are allowed"),false)
    }
}
const upload = multer({ storage: storage,
    fileFilter
 })


// get all user
// register
// login

router.route('/')
    .get(verifyToken, usersController.getAllUsers)
router.route('/register')
    .post(upload.single('avatar'), usersController.register)
router.route('/login')
    .post(usersController.login)


//update 
module.exports = router;
const {Router}= require('express');
const router = Router();
const usersController = require('../Controls/users.controller');
const { verifyToken } = require('../middleware/verifyToken.middleware');



// get all user
// register
// login

router.route('/')
    .get(verifyToken, usersController.getAllUsers)
router.route('/register')
    .post(usersController.register)
router.route('/login')
    .post(usersController.login)


//update 
module.exports = router;
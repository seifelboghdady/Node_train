const {Router}= require('express');
const router = Router();
const usersController = require('../Controls/users.controller')



// get all user
// register
// login

router.route('/')
    .get(usersController.getAllUsers)
router.route('/register')
    .post(usersController.register)
router.route('/login')
    .post(usersController.login)


//update 
module.exports = router;
const {body} = require('express-validator');
const courseControler = require('../Controls/index.controler')
const {Router}= require('express');
const {verifyToken} = require('../middleware/verifyToken.middleware');
const router = Router();


router.route('/')
    .get(courseControler.getCourses )
    .post(verifyToken,[
            body('title')
                .notEmpty()
                .withMessage('Title is Required')
                .isLength({min:2})
                .withMessage('Title at least 2')
            ],
            courseControler.addCourse
        );

//Get Single Course
router.route('/:courseid')
    .get(courseControler.getCourse)
    .patch(courseControler.updateCourse)
    .delete(courseControler.deleteCourse);
// this is validaton with express validator 


//update 
module.exports = router;
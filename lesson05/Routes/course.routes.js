const {body} = require('express-validator');
const courseControler = require('../Controls/index.controler')
const {Router}= require('express');
const router = Router();

router.get('/',courseControler.getCourses );

//Get Single Course
router.get('/:courseid',courseControler.getCourse);
// this is validaton with express validator 
router.post('/',[
    body('title')
        .notEmpty()
        .withMessage('Title is Required')
        .isLength({min:2})
        .withMessage('Title at least 2')], courseControler.addCourse);

//update 
router.patch('/:id',courseControler.updateCourse);
router.delete('/:id', courseControler.deleteCourse);
module.exports = router;
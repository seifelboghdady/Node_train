const {validationResult} = require('express-validator')
const {courses}= require('../Data/data');

const getCourses = (req, res)=>{
    res.json(courses);
}

const getCourse = (req,res)=>{
        const courseid = req.params.courseid
        course = courses.find((course)=> course.id == courseid)
        if(!course){
            return res.status(404).json({mag:'course Not Found'})
        }
        res.json(course)
    }

const addCourse = (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json(errors.array())
    }
    courses.push({id : courses.length+1, title : req.body.title, coach : req.body.coach})
    res.status(200).json(courses)
}

const updateCourse = (req,res)=>{
    const courseId = +req.params.id;
    let course = courses.find((course)=> course.id == courseId);
    if(!course){
       return res.status(404).json('Your course not found');
    }
    course = {...course, ...req.params};
    return res.status(200).json('Course Updated Success', course)
}

module.exports = {
    getCourses,
    getCourse,
    addCourse,
    updateCourse
}
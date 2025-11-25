const {validationResult} = require('express-validator')
const Course = require('../Models/course.model');
/*
// const getCourses = (req, res)=>{
//     res.json(courses);
// }
*/

//GET all courses form database <mongoose> model api
const getCourses = async (req, res)=>{
    const courses = await Course.find();
    res.json(courses);
}

const getCourse = async(req,res)=>{
        const id = req.params.courseid
        const course = await Course.findOne({ _id: id })
        if(!course){
            return res.status(404).json({mag:'course Not Found'})
        }
        res.json(course)
}
/*
// const addCourse = (req, res)=>{
//     const errors = validationResult(req);
//     if(!errors.isEmpty){
//         return res.status(400).json(errors.array())
//     }
//     courses.push({id : courses.length+1, title : req.body.title, coach : req.body.coach})
//     res.status(200).json(courses)
// }
*/
const addCourse = async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json(errors.array())
    }
    const course = await Course.insertOne(req.body)
    res.status(201).json(course);

}
const updateCourse = async(req,res)=>{
    const id = req.params.id;
    const course = await Course.findByIdAndUpdate(id, { $set: req.body})
    return res.status(200).json('Course Updated Success', course)

    // let course = courses.find((course)=> course.id == courseId);
    // if(!course){
    //    return res.status(404).json('Your course not found');
    // }
    // course = {...course, ...req.params};
}
const deleteCourse =  async(req, res)=>{
    const id = req.params.id;
    const deletedCourse = await Course.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Course Deleted Successfully' });
}

module.exports = {
    getCourses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
}
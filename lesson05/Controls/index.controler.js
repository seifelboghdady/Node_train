const {validationResult} = require('express-validator')
const Course = require('../Models/course.model');
const httpStatus = require('../utils/httpStatus');
/*
// const getCourses = (req, res)=>{
//     res.json(courses);
// }
*/

//GET all courses form database <mongoose> model api
const getCourses = async (req, res)=>{
    const query = req.query;
    const limit = query.limit || 10;
    const page = query.page || 1;
    const skip = (page-1)*limit;

    try{
        const courses = await Course.find({},{"__v" : 0}).limit(limit).skip(skip);
        res.json({status: httpStatus.SUCCESS,
            data:{courses}
        });
    }catch(err){
        res.json({status : httpStatus.ERROR, message : err.message});
    }
}

const getCourse = async(req,res)=>{
    try{    
        const id = req.params.courseid
        const course = await Course.findOne({ _id: id })
        if(!course){
            return res.status(404).json({status:httpStatus.FAIL, data :null})
        }
        res.json({status:httpStatus.SUCCESS, data :{course}})
    }catch(err){
        res.json({status : httpStatus.ERROR, message : err.message});
    }
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
    if(!errors.isEmpty()){
        return res.status(400).json({status : httpStatus.ERROR, message : errors.array()})
    }
    const course = await Course.insertOne(req.body)
    res.status(201).json({status:httpStatus.SUCCESS, data :{course}});

}

const updateCourse = async(req,res)=>{
    const id = req.params.courseid;
    const course = await Course.findByIdAndUpdate(id, { $set: req.body})
    if(!course){
        return res.status(400).json({status : httpStatus.ERROR, message : "Course Not Found"})
    }
    return res.status(200).json({status:httpStatus.SUCCESS, data :{course}})

    // let course = courses.find((course)=> course.id == courseId);
    // if(!course){
    //    return res.status(404).json('Your course not found');
    // }
    // course = {...course, ...req.params};
}

const deleteCourse =  async(req, res)=>{
    const id = req.params.courseid;
    const deletedCourse = await Course.findByIdAndDelete(id);
    if(!deletedCourse){
        return res.status(404).json({status : httpStatus.ERROR, message : 'Course Not Found'});
    }

    return res.status(200).json({status : "success",data : null});
}

module.exports = {
    getCourses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
}
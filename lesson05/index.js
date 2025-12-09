//const courseControler = require('./Controls/index.controler')
//const {body, validationResult} = require('express-validator')
//const {courses} = require('./Data/data')
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config()
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
const router = require('./Routes/course.routes')
app.use('/api/courses',router);
const userRouter = require('./Routes/user.routes')
app.use('/api/users',userRouter);


const url = process.env.MONGO_URL ;
mongoose.connect(url).then(console.log('Mongoose is Started'));

// app.all('*', (req, res)=>{
//     return res.status(404).json({status : 'success', message : 'Resource Not Found'});
// });

//Now we ues arr but use database in next session
//this will move into folder <data> to apply concept Design pattern
/*
const courses = [
  { id: 1, title: 'HTML', coach: 'Seif' },
  { id: 2, title: 'CSS', coach: 'Omar' },
  { id: 3, title: 'JavaScript', coach: 'Laila' },
  { id: 4, title: 'React', coach: 'Ahmed' },
  { id: 5, title: 'Node.js', coach: 'Sara' },
  { id: 6, title: 'Express.js', coach: 'Youssef' },
  { id: 7, title: 'MongoDB', coach: 'Hana' },
  { id: 8, title: 'Python', coach: 'Ali' },
  { id: 9, title: 'C++', coach: 'Mariam' },
  { id: 10, title: 'C#', coach: 'Seif' },
  { id: 11, title: 'Java', coach: 'Omar' },
  { id: 12, title: 'Kotlin', coach: 'Laila' },
  { id: 13, title: 'Swift', coach: 'Ahmed' },
  { id: 14, title: 'Dart', coach: 'Sara' },
  { id: 15, title: 'Flutter', coach: 'Youssef' },
  { id: 16, title: 'Angular', coach: 'Hana' },
  { id: 17, title: 'Vue.js', coach: 'Ali' },
  { id: 18, title: 'TypeScript', coach: 'Mariam' },
  { id: 19, title: 'SQL', coach: 'Seif' },
  { id: 20, title: 'Data Science', coach: 'Omar' }
];
*/
/*
// Get all Courses
app.get('/api/courses',courseControler.getCourses );

//Get Single Course
app.get('/api/courses/:courseid',courseControler.getCourse);
// this is validaton with express validator 
app.post('/api/courses',[
    body('title')
        .notEmpty()
        .withMessage('Title is Required')
        .isLength({min:2})
        .withMessage('Title at least 2')], courseControler.addCourse)

//update 
app.patch('/api/courses/:id',courseControler.updateCourse)
*/
// app.post('/api/courses',notEmpty(),(req, res)=>{
//     // console.log(req.body)
//     courses.push({id : courses.length+1, title : req.body.title, coach : req.body.coach})
//     res.status(200).json(courses)
// })

/*
app.post('/api/courses',(req, res)=>{
    // console.log(req.body)
    if(!req.body.title){
        return res.status(400).json({massge : "The title not provided"});
    }
    courses.push({id : courses.length+1, title : req.body.title, coach : req.body.coach})
    res.status(200).json(courses)
})
*/




app.listen(4000, ()=>{
    console.log('The server is Turn on port 4000');
})
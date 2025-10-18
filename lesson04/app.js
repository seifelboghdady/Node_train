const express = require('express')
const fs = require('fs')

const app = express();
// const homePage = fs.readFileSync('./views/index.html', 'utf-8');
// const styleHome =  fs.readFileSync('./views/style.css','utf-8');
// app.get('/', (req, res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send(homePage);
// });
// app.get('/style.css', (req, res)=>{
//     res.setHeader('Content-Type', 'text/css');
//     res.send(styleHome);
// });

app.use(express.static('./views'))
app.get('/', (req, res)=>{
    res.send('hello');
})

app.get('/about', (req, res)=>{
    res.send([
        {id : 1, title : "product1"},
        {id : 2, title : "product2"}
    ]);
});

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

app.use(myLogger())


app.listen(3002, ()=>{
    console.log(`This Run in port 3002`);
});
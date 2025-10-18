const http = require('http');
const fs = require('fs')

const homepage = fs.readFileSync('./views/index.html','utf-8')
const style_home = fs.readFileSync('./views/style.css','utf-8')

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.write(homepage);
    }else if(req.url == '/style.css'){
        res.write(style_home);
    }
    res.end();
});

server.listen(3001,()=>{
    console.log('the app run in port 3001');
});
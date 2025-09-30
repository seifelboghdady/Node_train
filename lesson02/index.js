//import file system module to read and write external file

const fs = require('node:fs');

//nonblocking
console.log(1);
console.log(`This Fs File Content: `+fs.readFileSync('./test.txt'));
console.log(3);
//=======================================================
//blocking
console.log(1);
fs.readFile('./test.txt','utf8', ( _ ,data)=>{
    console.log('This is content of non Blocking data'+ data)
})
console.log(3)
//

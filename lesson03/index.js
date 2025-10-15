const crypto = require('node:crypto');
const start = performance.now()
// crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
//     console.log('the end .pdkdf2 ms', performance.now() - start );  // '3745e48...08d59ae'
// });
// crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
//     console.log('the end .pdkdf2 ms',performance.now() - start );  // '3745e48...08d59ae'
// });
// crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
//     console.log('the end .pdkdf2 ms',performance.now() - start );  // '3745e48...08d59ae'
// });
// crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
//     console.log('the end .pdkdf2 ms',performance.now() - start );  // '3745e48...08d59ae'
// });


//this work in threadpool 
// can change size in 'process.env.UV_THREADPOOL_SIZE = 10;'


/**
the end .pdkdf2 ms 120.83019999999999
the end .pdkdf2 ms 132.5199
the end .pdkdf2 ms 133.4591
the end .pdkdf2 ms 147.2483
 */

// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512')
// console.log('the end .pdkdf2 ms',performance.now() - start );

// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512')
// console.log('the end .pdkdf2 ms',performance.now() - start );

// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512')
// console.log('the end .pdkdf2 ms',performance.now() - start );

// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512')
// console.log('the end .pdkdf2 ms',performance.now() - start );
/**
 * the end .pdkdf2 ms 80.2612
 * the end .pdkdf2 ms 167.1605
 * the end .pdkdf2 ms 249.39890000000003
 * the end .pdkdf2 ms 333.3131
 */

//to test Network I/O using fetch
// fetch('https://dummyjson.com/comments').then(()=>{
//     console.log('the end Request ms',performance.now() - start);
// })

// fetch('https://dummyjson.com/comments').then(()=>{
//     console.log('the end Request ms',performance.now() - start);
// })

// fetch('https://dummyjson.com/comments').then(()=>{
//     console.log('the end Request ms',performance.now() - start);
// })

// fetch('https://dummyjson.com/comments').then(()=>{
//     console.log('the end Request ms',performance.now() - start);
// })

// fetch('https://dummyjson.com/comments').then(()=>{
//     console.log('the end Request ms',performance.now() - start);
// })

/**
the end Request ms 489.6320999999999
the end Request ms 496.79549999999995
the end Request ms 499.4325
the end Request ms 502.19169999999997
the end Request ms 504.06589999999994
 */

const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end('This is Home Page');
    }else if(req.url == '/contact'){
        res.end('This is Contact Page');
    }else{
        res.end('This is undefind Page');
    }
})

server.listen(3000,()=>{
    console.log('Running on port 3000');
})

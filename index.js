const http = require('http');
// const fs = require('fs');
// const app = require('./app');
// console.log(app);
// console.log(app.z());


// console.log('subscribe');
// var a = 10 , b = 20 , c = 30;
// console.warn(a+b+c);


// const arr = [1,7,63,48,98,3];
// arr.filter((item)=>{
//     console.log(item===3);
// })
// let result = arr.filter((item)=>{
//     return item===3;    //we can give any condition like item >= 3 and many that you desired
// })
// console.log(result);

//MODULES
// core modules : fs(i.e filesystem) , buffer , HTTP and many more core emodules
// global modules are modules that are not needed to be imported such as console.log()
// fs.writeFileSync('createdbyfs.txt',"hello this is created by filesystem after importing it")
http.createServer((req,resp)=>{
    resp.write("<h1>hello these is vishmay dhruv</h1>");
    resp.end();
}).listen(4500)
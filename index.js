//creating api //always first line import
const http = require('http');
const data = require('./apiData');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(7777) 

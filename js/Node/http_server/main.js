// require 引入一个模块 
const http = require('http');
let i = 0;
http
  .createServer((req, res) =>{
  res.end(`Hello world!${++i}`);
  })
  .listen(8080);

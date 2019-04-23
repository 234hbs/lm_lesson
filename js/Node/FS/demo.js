const fs = require('fs');
//读文件是异步的
// fs.readFile('./a.txt','utf8',function(err,data){
//       console.log(data);
//       fs.readFile('./b.txt','utf8',function(err,data){
//         console.log(data);
//       })
// });

   let p=new Promise((resolve,reject) => {
     fs.readFile('./a.txt','utf8',(err,data) => {
       setTimeout(()=>{
        console.log(data)
        resolve(data)
       },1000)
     })
   })
   
   function readB(){
     fs.readFile('./b.txt','utf8',(err,data) => {
       setTimeout(() => {
        console.log(data)
       }, 500);
     }) 
   }
   p.then(readB)

//   fs.readFile('./a.txt','utf8',function(err,data){
//     setTimeout(()=>{
//       console.log(data); 
//     },1000)
// });

// fs.readFile('./b.txt','utf8',function(err,data){
//   setTimeout(() => {
//     console.log(data)
//   }, 500);
// })



const fs = require('fs');
const files = [];

const walk = function(path) {
  fs
    .readdirSync(path)
    .forEach(file => {
      const newPath = path+'/'+file;
      const stat = fs.statSync(newPath);
      console.log(stat); 
      if(stat.isFile()){
        if(/\.js$/.test(file)){
          files.push(file);
        }
      }else if(stat.isDirectory()){
        walk(newPath);
      }
  
    })
    console.log('aaaa');
}

walk('./src');
console.log(files);
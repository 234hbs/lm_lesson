node js的后端

服务器，
文件系统操作
文件操作系统  fs模块 文件操作
  文件读取 要花时间 定位文件 参数1，打开文件，将文件内容读取到内存中 输出到命令行
读取文件花时间，是异步的 所以解决异步的方法
1. 回调函数 callback
fs.readFile(path,'utf8',function(err,data){})
连接数据库 db
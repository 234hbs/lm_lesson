- reddir 
  读目录里的内容 IO操作
  reddirSync sync同步 Async异步

  JS 是单线程的 ， 用回调 或 promise 释放线程的控制权， js在早期是dom的编程， 用户交互比较多
  等到执行完成后 再通过 event-loop机制， 拿回控制权(callback , promise的resolve里拿回)
  readdirSync() 同步读取文件目录

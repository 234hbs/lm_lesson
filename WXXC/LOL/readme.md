- 小程序开发工具， 初始化了一个项目框架
  小程序是架构在微信app 上使用前端技术和思想，来快速开发， 一份代码， 到处运行。
  优点：
  不用下载，
  不用写 android 和 ios 两份
  快速高效

- html => wxml (新标签)
  1. weixin xml xml为了它的性能优化以及新功能
  新标签 view = div 
  
  2. css  => wxss

  3. js   => js    bindtap => onclick
  ```
     page({
       data:{
         legends: []
       },
       //事件处理函数
       function (){

       },
     })
  ```
  
  4. page = wxml + wxcss + js
  小程序就是一个个page组合成的， 每个page又由着三部分(wxml wxcss js)组成。

  5. app.json 是项目描述文件 添加的page都要在app.json里声明
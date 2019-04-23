- MVVM 小程序开发模式
  1. Model 数据
  ```
  Page({
    data:{
      legends: []
    }
  })
  ```
  2. View 视图
  3. VM 
    ```
     wx:for = "{{legends}}"
    ```
- MVC 经典的Web开发模式
  1. Model => SQL
  2. View => 静态页面
  3. Controller => 路由

- WebServer 软件程序
  1. ip http协议
  2. http://127.0.0.1:8080
  3. 端口 不只一个服务
  4. 3306 MYSQL 
  5. 80 Web服务
  ```
  http.createServer(
    function(req, res) {

    }
  ).listen(8080)
  ```
  6. request N个用户 Web Server一直在 8080端口上服务<br/>
     request就能找到服务，每位用户到达，会触发事件，调用<br>
     createServer上的回调函数， 回调函数可以得到用户信息<br>
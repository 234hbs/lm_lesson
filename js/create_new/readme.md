构造函数的运行方式 是以new的方式被运行,内部的this 运态指向实例化后的this


一开始为空对象，之后拿到了构造函数定义的属性，最后拿到了prototype里的属性和方法

1. 实例化一个新的对象，并且是这个类的实例
2. 构造函数被执行,this 指向实例
constructor 运行慢半拍 

对象  由属性和方法构成
 在面向对象里 构造函数式为this服务的
 this式由函数的运行方式决定
 this ->实例
 this ->任何对象 call

 3. Otaku.prototype 值是对象
 原型对象
 任何函数都拥有一个prototype属性 才能构造类 constructor 车头
 车头上勾着车身 

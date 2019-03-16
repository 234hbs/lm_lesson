class 类 js现在具有
es5 ，没有class关键字，怎么做面向对象?
js 是面向对象的, Function 是一等对象
普通函数 Player()
new Player(); 作为类的构造函数被运行
function Play(){this} 
this一直都在 ，函数里的一个常在，指针
this 指针指向一个Object { }  this.name=name

函数运行方式的不同，里面的this指向不同
普通函数被运行的时候， this指针没有使命 指向全局 ,前端指向window ,后端指向 global undefined
函数作为构造函数被运行时 new Player();
this 指向实例化的对象，构造函数需要的过程

- 函数可以构造类 jsa 借, 通过this
- this 是一直都在的，指针
   函数运行方式不一样 this=>全局window || global
   如果代码启用严格模式 undefined
- new 过程之中发生了什么
  this => { } constructor
  this.name=name
- 构造函数
-  
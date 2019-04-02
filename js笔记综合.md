#  1.正则表达式、数组、队列、算法、指针
  老王 1年半 问一个女孩的QQ号码
  631758924 合格的QQ号码

 - 正则表达式
   确定 待检测的字符 是否正是 符合规则的对象
   js 里头 除了简单类型，一切都是对象
   / / 正则对象 RegExp
   运算符号，用于表达规则 [0-9] 
   [0-9] 范围 数字
   [a-z] 小写字母
   [A-Z] 大写字母
   {5，13} 限定长度
   ^  $    字符串开始，字符串结束

   631758924 加密
   解码规则 第一个数删除，第二个数移到末尾，
   第三个数删除，第四个数移到末尾，直到最后一个数，也删除。
   
    
    631758924   6
    17589243    1
    5892437     5
    924378      9
    43782       4
    7823        7
    238         2
    83          8
    3           3

    数组 是最廉价的数据结构
    本身就是一个线性的连续的存储空间，      下标
    head 指向头部  tail 指向尾部
    尾部插入和删除 栈  LF
    在头部删除，在尾部添加元素 队列 queue (先进先出)

# 2.解析构造函数和原型链
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

# 3.dom event(事件)
- dom
  onclick 事件注册只有一个 dom-0
  addEventListener('click')   无数个 dom-2
  addEventListener('keyup')   无数个 dom-3
- event
  event.stopProgration() 阻止冒泡
  event.stopImmediatePropagation() 阻止后面注册事件
- dom  事件流
捕获（capture）
window -> document(documentElent) ->body -> 父级 -> 目标元素 
冒泡 （bubble）
window <- document(documentElent) <- body <- 父级 <- 目标元素 
 事件按照 dom流 的顺序执行我们的事件回调
 处于目标阶段的时候 事件调用顺序取决于事件注册顺序

- 事件代理（事件委托）  委托给父级元素
  event-question.html
  原理：冒泡

# 4.箭头函数
 - es6 新的函数定义方法
 - ()=>{}

- 弱类型
  - 相比于静态类型语言（c,c++），定义变量时没有严格变量要求
  - 灵活(同时也是它的劣势)
  - undefined(js的数据类型之一)，变量的类型由值决定

- 动态类型语言 鸭子类型 如果走起路来像鸭子 叫起来也是鸭子 那么它就是一只鸭子
  使用类型检测 typeof 保证灵活性的同时代码更加严谨

- 箭头函数没有作用域的概念

# 5.如何实现红包算法
固定金额的红包，由若干人来抢，规则如何设置？

1. 抢到的金额之和等于红包金额，不能超过，也不能少于。
2. 手气王 0.01 至少，
3. 金额随机，随机数 ，公平：每个人抢到金额的概率要相同

计算过程，变量计算的本质
发钱 开始的时候 总金额=剩余金额  total = restAmount
restNum-- == num
随机一次 restAmount=restAmount-随机数
restNum--
最后一个人拿最后的钱 

Math 是数学对象
Math.random() 产生随机数
parseInt()  解析为整数
parseFloat() 浮点数 
0-9 的整数 Math.round(Math.random()*10);
let max=100;
let min=0;
产生一个0到100之间的数
min+Math.floor(Math.random()*(max-min));

# 6.作用域 Scope
    document对象 DOM
    getElementByTagName
    getElementByClassName
    querySelector
    querySelectorAll

- window BOM
  全局定义了 var name="yh";
  全局变量 前端 js window
  局部变量 function(){}
  window js 内嵌在浏览器中的脚本语言，它与其他语言不一样的地方在于 window
  全局变量挂载在window上
  console.log(name); console.log(window.name)
  window 类型 是 object 
  基本数据类型 数值 字符串 布尔值 null undefined Symbol object
  ecma6 的 const let 定义的变量只在{} 内起作用,即 遵守块级作用域
  全局->函数局部->块级作用域
  scope 范围
  setTimeout 异步的内置函数
  for 循环 立即同步执行
  1000 之后 i var 变成了 10

# 7.构造函数、this
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

# 8.表格
form + table DOM 数据的表格化 动态创建
专业版本

 let 与 var 
 let 支持块级作用域 {}
 let 变量不会污染 window
 var 时代（es5）没有 const 可以在 window 下找到 window.

# 9.js基本数据类型
1. 数值 字符串 布尔值 null undefined (js基本数据类型)
2. 其他的都是 对象 Object  Array 是可遍历的对象 for()
3. JSON Object 对象字面量 可枚举的对象
4. function 也是对象
5. document.querySele ctorAll('a'); 类数组
6. 字符串是字符的数组
   .length  str[0]
   运算符匹配的问题时 选择数组作为数据结构
   只在顶部做操作 （push pop） 栈 Stack
   算法+数据结构

# 10.SVG 矢量图绘制API
数学图形， 线 ，点 ，圆 ，折线 ，椭圆 ....
相对于像素 ，img \png 可以无限放大

- 数据可视化方向
- 代替图片

#11.
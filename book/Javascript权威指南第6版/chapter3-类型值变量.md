# 类型、值和变量
1. javascript 数据类型：原始类型+对象类型；
   原始类型：数字、字符串、bool值、null、undefined
   对象类型：普通的JavaScript对象是“命名值”的无序集合 
   而数组（arry） 带编号的有序集合
2. JavaScript解释器拥有自己的 内存管理机制 可以 自动 对内存进行垃圾回收
   程序员不必担心对象的销毁和内vu你的回收
3. 从技术上讲只有JavaScript对象才能拥有方法 
   但是 数字、字符串、布尔值也有自    己的方法 
   在JavaScript中 只有null和undefined无法拥有方法
4. JavaScript可以自由地进行 数据类型转换
   这也意味着 JavaScript变量是无类型的

- 数字
     1. JavaScript所有数字均用 浮点 数字表示。浮点范围  +/- 1.7*10^38(max)
      +/-5*10^-324(min)
     2. 整数：-2^53----2^53
     3. 算术运算符 + - * / %
        除了算数运算符 还有通过Math对象的属性定义的函数和常量来实现
        Math.pow(2,3)      2  的3次幂
        Math.round(.6)     1  四舍五入
        Math.ceil(.6)      1  向上求整数
        Math.floor(.6)     0  向下求整
        Math.abs(-5)       5  求绝对值
        Math.max(x,y,z)       返回最大值
        Math.min(x,y,z)       返回最小值
        Math.random()         生成大于等于0小于1.0的伪随机数
        Math.PI               3.14156...pai
        Math.sqrt(4)       2  平方根
        Math.pow(9,1/3)    3  立方根
        .。。。。
- 日期
  Date()构造函数
- 文本
  

   
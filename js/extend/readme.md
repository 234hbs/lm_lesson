1. Person 由prototype属性来解决它自身构造之外的原型上的属性和方法
2. 原型对象会有它的构造函数 Person.prototype.constructor属性

3. Person 函数运行 new的方式,this=>new Object()
实例 xl 通过 __proto__ 属性拿到Person.prototype原型对象上定义的方法
4. 方法有prototype属性,值为对象 开支
5. 任何对象都有 __proto__ 属性 指向它的原型对象
6. 原型对象上有一个额外的 constructor属性指向谁是它的构造函数


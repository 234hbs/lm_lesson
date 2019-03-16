# 作用域 Scope
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
  
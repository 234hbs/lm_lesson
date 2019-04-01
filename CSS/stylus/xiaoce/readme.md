sty不再写css,写的是css的预编译语言stylus
特点：快
一套语法 支持现代css开发
stylus style.styl -o style.css  styl文件转换为css文件
-o output
stylus -w style.styl -o style.css stylus时实监听
-w watch

1. 跟css的规则说bye
{} : ; tab
2. stylus 提供嵌套功能 可以补上前面的选择器
3. &运算符
   依然使用tab缩进 但是它与上一级同级
   适合于同一个元素多个类名 .active 或者伪类 伪状态
4. 变量定义
   将常用的、会重复使用的
   在最上面统一定义,以后可以修改一处，从而让全部使用了的地方都跟着修改
   成为网站的风格

css 语法
1. overflow:hidden
2. felx align-items 搞定vertical-align
   vertical-align 兄弟之间 img +兄弟
3. text-rendering:optimizeLegibility; 抗锯齿 高清手机文字不模糊
4. flex-shrink:0
   flex-grow 
5. 伪类选择器
  :first-child  :last-child
  :nth-child(2n)
6. -apple-system 
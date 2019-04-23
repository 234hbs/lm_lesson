# 1.语义化标签和居正中间
- h5 新标签 语义化
 - section 部分
 - header 头
- 居中
 - 定位 left：50%;top: 50%;（百分之多少是相对于父级来说的）
 - transform 适用于不知道元素宽带高
 - margin 负值 适用于知道元素宽高
- position:absolute

# 2.过度（待补充）
transition：属性名 时间; 
-webkit-tap-highlight-color 去除 safari浏览器 点击自带的阴影

# 3.相对单位，为了自适应
  - 不同的移动设备
   iPhone XR 小手机
   iphone Max 打手机
   小米，华为

   
   vw vh 按比例分配宽/高 20% 20vh 100wh主体容器

   移动端少用px  em rem 
   em 是相对于自身的字体大小来比例计算的
   rem html 根元素的 font-size来说的

   * 四个相对单位： vh wh em rem （重点）

   :before :after 伪元素 
   没有标签，但是却可以像真正的元素一样 来在页面上占位
   dom 文档流里不需要写这个元素，不会产生副作用，不会影响到内容的展示。
   使用css来声明， content属性是必需的。

   html默认字体是16px
   如果没有设置，会使用父级，或 body font-size 向外寻找 具有继承

# 4.页面布局盒子划分
- 前端该做的，盒子模型
  html结构写好
- 要有一定的css命名词汇量
  feed-itiems itiem
- 标签的语义化
  a 代替 div

- 界面，切分 切图 
1. 按模块来切 .feed-item 词汇量
2. 块级元素 做盒子 不要在意那些细节
3. 从外到内 从上到下 从左到右
4. 写良好结构以及语义化的html,
   .feed-content>.photos+h3+p+.author

# 5.清除浮动有 5 中方法
1. 在父元素的里面的底部加一个空div 空盒子设置为 clear:both <div style="clear:both"></div> 
2. 利用BFC简称"块级格式化上下文"来给父元素添加 以下其中任意一个 （不推荐最后一个）
 <!-- overflow: auto; -->
 <!-- overflow: hidden;  -->
 <!-- overflow:scroll -->
3. 使用css中的伪元素after，给父元素添加一个clearfix的类名
   <!-- .clearfix::after{
            content: '';
            display: block;
            clear: both;
        } -->
4. 给父元素增加一行css，但是不建议使用，因为会影响父元素下面的元素
   <!-- .content{
       float:left;
   } -->
5. 更优雅的改进 --尼古拉斯大师方法
   给父元素添加一个clearfix的类名
   把display设置为table ，可以创建表格单元，这个匿名的表格单元可以直接出发BFC
   .clearfix::after{
       content:'';
       display:table;
       clear: both;
   }

# 6.BFC 的概念
Block Formatting Context(块级格式化上下文)

# BFC 的原理(渲染规则)
1. 正常的文档流会存在边距折叠的问题(父子元素,兄弟元素) 水平方向的外边距不存在折叠的情况 因为水平方向不存在块级元素
2. BFC 容器不会与浮动的box元素重叠
3. BFC 在页面上是个独立的容器，最显著的效果就是建立一个隔离的空间，外面的元素不会影响容器里面的元素，反之 里面的元素也不会影响外面的元素 
4. 计算BFC容器高度时，浮动元素也会参与高度计算(也是通常清除浮动的原理)

# 创建BFC的条件
1. float值不为none时
2. position 为 absolute 或fixed

# WEUI
- 来自于微信的前端开发框架-----WEUI
  1. 微信生态： 公众号 小程序
    weui.css 在基础上做开发
  2. APP 生态
     大厂的APP内嵌的 html
     PC 传统网站 BootStrap
   
# 7.界面的编写过程
1. html 结构，独立于样式
       DOM文档流 从左到右 从上到下
2. 取类名很重要遵守 BEM 规范
       Block 区块 weui-cell
       weui-boutton 30-50个复用的组件 
       Element 元素
       weui-cell__hd
       weui-cell_bd
       weui-cell__ft
       通用的词汇 hd+bd+ft
3. 再写样式
4. 离开文档流
   里面的元素不再受其影响，brfore absolute（float） 脱离了正常的文档流,
- 1PX边框
  css 像素 1px 在手机里
  硬件物理像素  retina 2px 3px
  transform scaleY(0.5)
  浏览器不会处理小数点像素
  transform-orgin:基点（不动的那个点)  (上边线 从上往下压 scaleY) 
- flex 弹性布局
   不受块级的约束（将自上而下变成自左而右排列）
   弹性布局是父与子们的一起的布局好用的对齐方式
   align-items 在交叉轴上如何对齐 align-content 多根轴线的对齐方式
   justify-content 在主轴上对齐方式
   在一堆子元素中，只给一个元素设置 flex:1 这个元素成为主元素
   其他元素占完自己该占的盒子模型后，余下的空间都交给主体元素。

# 8.h5
1. flex 布局（移动时代布局的首要）大小弹性支持不同的设备
   display:flex|block(默认)
   块级元素 div.keys
   - .keys 有什么异常
   - 9 .key 被flex 管理起来 
   - 水平居中 justify-content 水平 主轴
   - align-items 纵轴 
2. 相对单位
    px 绝对大小 不适用于移动端
  - vh 相对于屏幕
  - rem 相对于html根元素

# 9.豆瓣PC 2018.3.26
1. PC相对于mobile更复杂 布局layout
文档流 ：从上到下 从左到右
flex 要使用前思考下,flex是css3最新技术 要考虑兼容性
section 标签有兼容性
float浮动 很容易影响其他元素 给main元素设置bfc清除 建立隔离区可以解决两列式布局

PC端 先布局 layout float
inline-block 两个元素换行的时候，换行符占据了一定的很小的空间，(inline-block 布局相对年轻些)
所以给两个兄弟元素设置inline-block时候要给父容器设置font-size:0

#属性操作
语法：$(selector).attr(attribute)
比如：$("img").attr("width","180");
# 实现高斯模糊效果
filter blur(.1rem)
# prepend append
prepend() 在元素的开头插入内容分 后插入的内容会排在先插入的内容的前面
append()  在元素的结尾插入内容

#媒体查询
@media only screen and (max-width:767px){

}
当屏幕尺寸小于最大宽度767时候才执行大括号内的内容
当屏幕尺寸大于最大宽度767时候则不执行括号的内容

CSS媒体查询之横竖屏
@media screen and (orientation:portrait){

}
@media screen and (orientation:landscape){

}

# em rem 
都是相对字体的单位 
em 是相对父容器字体大小
rem 是相对根元素字体大小

#css的渐变函数
linear-gradient() 函数用于创建一个线性渐变的 "图像"。
语法：
background: linear-gradient(direction, color-stop1, color-stop2, ...);
direction: to bottom / to left / to right / to top
# WEUI
- 来自于微信的前端开发框架-----WEUI
  1. 微信生态： 公众号 小程序
    weui.css 在基础上做开发
  2. APP 生态
     大厂的APP内嵌的 html
     PC 传统网站 BootStrap
   
# 界面的编写过程
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
# 相对单位，为了自适应
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

   
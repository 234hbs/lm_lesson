# 清除浮动有 5 中方法
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

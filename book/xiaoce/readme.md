## 界面搭框架以及经验
- 水平方向一般禁止滚动条 垂直方向出现滚动条
  若水平和垂直两个方向都滚动，页面会摇晃，容易产生误操作
- 垂直方向一直滚动是开发的主要方向

- flex布局
  flex-grow放大比例（默认为0） flex-shrink缩小比例（默认为1）
  flex-wrap 网页由Pc到mobiel时

  经验 简单适配pc到mobile 照顾所有的用户
  max-width margin:auto 
  padding margin
  mobile flex-shrink 让关键部分坚挺一点
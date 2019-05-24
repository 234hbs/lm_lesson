- 一万条数据需要插入到网页中，如何高效实现？
- DOM 
- 动态DOM 内存开销很大 createElement
优化 cloneNode 节点克隆
- innerHTML 
  10000条DOM 显示负担很大
  延迟加载图片
  分屏加载 html
  绘制html 重绘和重排 导致网页卡顿

- 不能一下搞定 分屏加载
  10000
  - 数据分页 page 上一页的数据 当前页的数据 下一页的数据
  - 前端自主分页
  - 防抖 + onscroll
    跟onReachBottom 一样
    当前的数据超出了视窗 viewport
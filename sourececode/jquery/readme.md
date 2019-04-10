DOM 树 有html结构 再加上CSS DOM树将被生成 静态页面就有了。
此时触发 DOMContentLoaded 有了元素节点 就可以做js交互

页面上还依赖于其他一些资源 js会阻塞下载 img是网页性能的杀手
window.onload 此时写js


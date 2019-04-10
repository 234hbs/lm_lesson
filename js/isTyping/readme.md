类型检测 js的考点
<!-- new Array()   [] -->
Object 
Array 可遍历的对象  for(i)
JSON Object 对象字面量 可枚举的对象 for( let key in JSON)
function 是一等对象 
因为以上三者都是对象范畴 所以用 typeof判断不靠谱

1. Object.prototype.toString()
   弥补typeof判断模糊的缺点
   返回值是字符串 "[object Object]"

2. 借给Array用
Object.prototype.toString.call([])
函数上就有call这个api call方法里的参数指向this

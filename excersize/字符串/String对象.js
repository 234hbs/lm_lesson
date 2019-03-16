//String对象
// string --- 字符串类型 ----基本类型
// String --- 字符串类型 ---引用类型
// 字符串对象 --- String对象
var str="hello";//基本类型
var str=new String("hello");//引用类型
str[0]="w";
console.log(str);//字符串可以通过索引访问某个字符的值，但是不可改变；
str="hi";//并不是改变字符串的内容，而是新建了一个字符串 hi,然后 str 的指向由 指向 hello字符串的地址改变为指向 hi 的地址
//charAt() 索引
// String的一些常见方法
// indexOf(); 查找字符串的下标 未找到则返回 -1
// lastIndexOf();  从后往前找，找不到返回 -1  但索引任然是从左往右。
// replace("","");  后者替换前者
//slice(a,b);截取一段字符从索引a到b 不包含b所在的字符
//substr(index,n) 从某个位置开始截取 截取 n个
// toLowerCase() 将大写转换为小写
// toUpperCase() 转大写
//trim() 干掉字符串的两端的东西
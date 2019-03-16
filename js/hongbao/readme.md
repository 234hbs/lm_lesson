如何实现红包算法
固定金额的红包，由若干人来抢，规则如何设置？

1. 抢到的金额之和等于红包金额，不能超过，也不能少于。
2. 手气王 0.01 至少，
3. 金额随机，随机数 ，公平：每个人抢到金额的概率要相同

计算过程，变量计算的本质
发钱 开始的时候 总金额=剩余金额  total = restAmount
restNum-- == num
随机一次 restAmount=restAmount-随机数
restNum--
最后一个人拿最后的钱 

Math 是数学对象
Math.random() 产生随机数
parseInt()  解析为整数
parseFloat() 浮点数 
0-9 的整数 Math.round(Math.random()*10);
let max=100;
let min=0;
产生一个0到100之间的数
min+Math.floor(Math.random()*(max-min));
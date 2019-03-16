let qq_number="631sos758924";
// 验证QQ号码的合法性（valid）

// 函数表达式（将一个函数赋值给一个常量）
/**
 * 
 * @param qq type String
 * @return type bool
 * @功能 判断QQ号是否合格
 * @desc QQ号只能是数字(type) 长度：[5,13]
 * 
 */ 
// const is_valid_qq=(qq)=>{
//     if(!qq) {
//         return false;
//     }
//     else {
//         if(/^[0-9]{5,13}$/.test(qq)){
//             return true;
//         }else{
//             return false; 
//         }
//     }
    
// };
// console.log(is_valid_qq(qq_number));

let enc_qq=[6,3,1,7,5,8,9,2,4],
qq=[],
head=0,/**指针 star 开始 */
tail=9;//尾部指针


while(head<tail){
    qq.push(enc_qq[head]);
    head++;
    //第二个数如何移到队尾？
    enc_qq[tail] = enc_qq[head];//当第二个“移”到队尾时候，它的下标就没用了，头指针需要改变
    tail++;
    head++; 
}
console.log(qq);

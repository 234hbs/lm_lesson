//验证字符串的正确性
/**
 * 功能是决定字符串中的符号是正确的
 * @param {*} 
 * str 字符串，包含() [] {}
 */
// const isValid=(str)=>{
//      let sta=[];
//      for(let i=0;i<str.length;i++){
//          sta.push(str[i]);
//      }
//      console.log(sta);

// }
// console.log(isValid("star"));

const isValid=(str)=>{
    let sta=[],obj={};
    obj["{"]="}";
    obj["("]=")";
    obj["["]="]";
    for(let i=0;i<str.length;i++){
        if(!sta.length)
        {
        sta.push(str[i]);
        }
        else{
            //sta[sta.length-1],str[i]
            if(str[i]===obj[sta[sta.length-1]]){
                sta.pop();
            }
            else{
                sta.push(str[i]);
            }
        }
    }
    return !sta.length;

}

console.log(isValid('(])'));//false  
console.log(isValid('()'));//true 
console.log(isValid('(){}[]'));//true
console.log(isValid('({[]})'));//true


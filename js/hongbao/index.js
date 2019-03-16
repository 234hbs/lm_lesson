//total 总金额 ； num 红包数
function hongbao(total,num){
    const arr=[];
    let restAmount=total;//余额初始化为总金额
    let restNum=num;
    
    for(let i=0;i<num-1;i++){
        //
        let amount=parseFloat(Math.random()*(restAmount/restNum*2)).toFixed(2);
        restAmount-=amount;
        restNum--;
        arr.push(amount);

    }
    //最后剩下的那个人拿
    arr.push(restAmount.toFixed(2));
    return arr;
}

console.log(hongbao(20,40));
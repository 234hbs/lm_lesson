function fn(n){
    if(n<0) return 0;
    if(n==1) return 1;
    if(n===2) return 2;
    var a=1;
    var b=2;
    var temp=0;
    for(let i=3;i<=n;i++){
        temp=a+b;
        a=b;
        b=temp;
    }
    return temp;
}
console.log(fn(12));
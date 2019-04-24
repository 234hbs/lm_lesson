const indexSearch=(myarr,item)=>{
    var low =0,
        hight=myarr.length-1;
    while(low<=hight){
        var mid=Math.floor((low+hight)/2);
        guess=myarr[mid];
        if(guess==item){
            return mid;
        }
        if (guess>item){
            hight=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return false;
}
//二分查找  输入一个数组和一个数字 查询数字是否在数组中 若在 返回其下标 否则 返回 false;
var arr=[3,2,5,25,19];
console.log(indexSearch(arr,19));

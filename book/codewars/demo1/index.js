// function generateHashtag(str){
//     return str.length>140 || str==='' ?false:'#'+str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// }
// console.log(generateHashtag('hello miss dong'));

function fn(n){
    if(n<0) return 0;
    if(n===1) return 1;
    if(n===2) return 2;
    return fn(n-1)+fn(n-2);
}
console.log(fn(12));
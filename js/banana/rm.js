// 1011 2进制 11
// 0101 5
// 右移一位 快速实现/2
// // 左移一位 *2
// console.log(11<<1);
/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid
 */
function canEatAllBananas(piles, H, mid){
  let h = 0;
  for(let pile of piles){
    h += Math.ceil(pile/mid);
  }
  return h <=H;
}
/**
 * 
 * @param {number[]} pileS 
 * @param {number} H 
 * @return {number}
 */
function minEatingSpeed(piles, H){
  let lo = 1;
  let hi =Math.max(...piles);
  console.log(hi);
  while(lo <= hi){
    let mid = ++lo;
    console.log('-----',mid);
    if(canEatAllBananas(piles, H, mid)){
      hi = mid-1;
    }else{
      lo++;
    }
  }
  return lo;
}

console.log(canEatAllBananas([3, 6, 7, 11], 1));
console.log(minEatingSpeed([3,6,7,11],8));
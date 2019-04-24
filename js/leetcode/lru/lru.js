var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.obj = {};
  this.arr = [];
}

LRUCache.prototype.get = function(key) {
  if(this.obj[key] > 0){
    var index = this.arr.indexOf(key);
    this.arr.splice(index,1);
    this.arr.unshift(key);
    console.log(this.obj[key])
    return this.obj[key]
  }else{
    return -1;
  }
}
LRUCache.prototype.set = function(key, value) {
  if(this.obj[key]) 
  {
    //如果要设置的已经存在
    this.obj[key] = value;//更新
    var index = this.arr.indexOf(key);
    this.arr.splice(index,1);
    this.arr.unshift(key);
  }
  if(this.capacity === this.arr.length){
    //存放满了
    var k = this.arr.pop();
    this.obj[k] = undefined;
  }
  this.obj[key] = value;
  this.arr.unshift(key);
}

var cache = new LRUCache(2);

cache.set(1, 1);
cache.set(2, 2);
cache.get(1);       // 返回  1
cache.set(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.set(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
 


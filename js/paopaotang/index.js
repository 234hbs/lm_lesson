//Player类 ，构造函数
"use strict";
function Player(name){
    //constructor
    // 全局 || 指向的对象
     console.log(this);  
     this.name=name;
     this.enemy=null;
}
//js 类的方法要定义在prototype
Player.prototype.win=function(){
    console.log(this.name+"win");
}
Player.prototype.lose=function(){
    console.log(this.name+"lose");
}
//Player("皮蛋");//函数调用
 var player1=new Player("皮蛋");//实例化 
 var player2=new Player("小乖");
//  console.log(player1.name);
//  console.log(player2.name);
//win函数，作为对象的方法被调用
//this会指向对象本身
// player1.win();
// player2.lose();
player1.enemy=player2.name;
player2.enemy=player1.name;
console.log(player1.enemy);
console.log(player2.enemy);

var Bounce = function(salary){
  this.salary = salary;
}
Bounce.prototype.setStratege = function(strategy){
  this.strategy = strategy;
}
Bounce.prototype.getBounce = function(){
  return this.strategy.calculate(this.salary);
}
var performanceS = function(){
}
performanceS.prototype.calculate = function(salary){
  return salary*5
}


var bounce = new Bounce(20000);
bounce.setStratege(new performanceS());
console.log(bounce.getBounce());
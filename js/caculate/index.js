//策略函数
var perfomanceX = function(salary){
  return salary*60
}
var perfomanceS = function(salary){
  return salary*5
}
var perfomanceA = function(salary){
  return salary*3
}
var perfomanceB = function(salary){
  return salary*2
}
var perfomanceC = function(salary){
  return salary
}
var calculateBounce = function(perfomanceLevel, salary){
  if(perfomanceLevel === "S"){
    return perfomanceS(salary)
  }else if(perfomanceLevel === "A"){
    return perfomanceA(salary)
  }else if(perfomanceLevel === "B"){
    return perfomanceB(salary)
  }else if(perfomanceLevel === "C"){
    return perfomanceC(salary)
  }else if(perfomanceLevel === "X"){
    return perfomanceX(salary)
  }
}
console.log(calculateBounce('X',10000));

//分支太多 优化 计算策略太简略


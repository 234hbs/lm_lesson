dom event(事件)
- dom
  onclick 事件注册只有一个 dom-0
  addEventListener('click')   无数个 dom-2
  addEventListener('keyup')   无数个 dom-3
- event
  event.stopProgration() 阻止冒泡
  event.stopImmediatePropagation() 阻止后面注册事件
- dom  事件流
捕获（capture）
window -> document(documentElent) ->body -> 父级 -> 目标元素 
冒泡 （bubble）
window <- document(documentElent) <- body <- 父级 <- 目标元素 
 事件按照 dom流 的顺序执行我们的事件回调
 处于目标阶段的时候 事件调用顺序取决于事件注册顺序

- 事件代理（事件委托）  委托给父级元素
  event-question.html
  原理：冒泡
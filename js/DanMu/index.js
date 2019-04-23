let data =[
  {value:'华炳森你真帅哦', time:5, color:'red', speed:1, fontSize:22},
  {value:'刘杭你真帅哦', time:10, color:'blue', speed:1, fontSize:22},
  {value:'周董你真帅哦', time:15, color:'#00a1f5', speed:1, fontSize:22},
  {value:'蜗牛你真帅哦', time:20}
]

// 获取所有需要的DOM结构
let doc = document;
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

//创建一个CanvasBarrage的类
class CanvasBarrage {
  constructor(canvas, video, opts={}){
    //如果canvas和video都没有传入的话
    if(!canvas || !video){
      return;
    }
    this.canvas = canvas;
    this.video = video;

    this.canvas.width = video.width;
    this.canvas.height = video.height;
    //获取画布
    this.ctx = canvas.getContext('2d');
    //设置默认参数
    let defOpts = {
      color: '#e91e63',
      speed:1.5,
      opacity:0.5,
      fontSize:20,
      data:[]
    }

    //合并对象，全部挂载到this实例上
    Object.assign(this, defOpts, opts);
    //添加属性，用来判断播放状态
    this.isPaused = true;
    //获取所有弹幕消息
    this.barrages = this.data.map(item => new Barrage(item, this));
    //渲染弹幕
    this.render();
  }
  render() {
    //渲染的第一步：清除原来的画布
    this.clear();
    //渲染弹幕
    this.renderBarrage();
    //如果没有暂停的话就继续渲染
    if(this.isPaused === false){
      requestAnimationFrame(this.render.bind(this));
    }
  }
  clear() {
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  }
  renderBarrage() {
    //要根据当前视频播放的时间和弹幕展示的时间做比较，来判断是否展示弹幕
    let time = this.video.currentTime;
    this.barrages.forEach(barrage => {
      //只有在视频播放时间大于等于弹幕展示时间才处理
      if(!barrage.flag && time >= barrage.time) {
        //判断当前弹幕是否初始化
        if(!barrage.isInit) {
          barrage.init();
          barrage.isInit = true;
        }
        //弹幕从右往左渲染，将弹幕的x坐标减去弹幕的速度
        barrage.x -= barrage.speed;
        barrage.render(); //渲染当前弹幕
        //如果当前弹幕的x坐标比自身的宽度还小,就表示渲染结束
        if(barrage.x<-barrage.width) {
          barrage.flag =true;
        }
      }
    })
  }
  add(obj) {
    this.barrages.push(new Barrage(obj, this));
  }
}
//实例化每条弹幕
class Barrage {
  constructor(obj, ctx) {
    this.value = obj.value;
    this.time = obj.time;
    this.obj = obj;
    this.context = ctx;
  }
  //初始化弹幕
  init() {
    //如果数据里没有涉及到下面四种参数。就取默认值
    this.color = this.obj.color || this.context.color;
    this.speed = this.obj.speed || this.context.speed;
    this.opacity = this.obj.opacity || this.context.opacity;
    this.fontSize = this.obj.fontSize || this.context.fontSize;
    //为了计算每条弹幕的宽度，必须创建一个元素P,然后计算文字的宽度
    let p = document.createElement('p');
    p.style.fontSize = this.fontSize + 'px';
    p.innerHTML = this.value;
    this.width = p.clientWidth;
    document.body.appendChild(p);
    this.width = p.clientWidth;
    document.body.removeChild(p);
    //设置弹幕出现的位置
    this.x = this.context.canvas.width;
    this.y = this.context.canvas.height*Math.random();
    //做一下弹幕超出范围的处理
    if(this.y<this.fontSize){
      this.y = this.fontSize;
    }else if(this.y > this.context.canvas.height -this.fontSize){
      this.y = this.context.canvas.height -this.fontSize;
    }
  }
  //渲染每一条弹幕
  render() {
    
    //设置画布文字和字体颜色
    this.context.ctx.font = `${this.fontSize}px Arial`;
    this.context.ctx.fillStyle =this.color;
    this.context.ctx.fillText(this.value, this.x, this.y);
  };
}

let canvasBarrage = new CanvasBarrage(canvas, video, {data});


//设置video的play事件来调用CanvasBarrage实例的render方法
video.addEventListener('play',()=>{
  canvasBarrage.isPaused = false;
  canvasBarrage.render();//触发弹幕
})




// 发送弹幕的方法
function send() {
  let value = $txt.value;  // 输入的内容
  let time = video.currentTime; // 当前视频时间
  let color = $color.value;   // 选取的颜色值
  let fontSize = $range.value; // 选取的字号大小
  let obj = { value, time, color, fontSize };
  // 添加弹幕数据
  canvasBarrage.add(obj);
  $txt.value = ''; // 清空输入框
}
// 点击按钮发送弹幕
$btn.addEventListener('click', send);
// 回车发送弹幕
$txt.addEventListener('keyup', e => {
  let key = e.keyCode;
  key === 13 && send();
});

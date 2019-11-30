function random(x,y){
    //获取一个x到y的随机整数
    return Math.floor(Math.random()*(y-x+1)+x)
    // return parseInt(Math.random()*(y-x+1)+x)
}
//获取元素节点
var box=document.getElementById("box00");
/*//方法一：地球动起来
//获取元素节点
var box=document.getElementById("box00");
//获取元素右移，和上移量
var right_0=parseInt(window.getComputedStyle(box, null).right);
var bottom_0=parseInt(window.getComputedStyle(box, null).bottom);
//获取元素宽高
var boxWidth=parseInt(window.getComputedStyle(box, null).width);
var boxHeight=box.offsetHeight;

var R=B=0;
var step=2;
var flagX=true;
var flagY=true;
var x=right_0;
var y=bottom_0;
function fly() {
    //获取浏览器可见宽高
    var right_1=document.documentElement.clientWidth;
    var bottom_1=document.documentElement.clientHeight;
    right_1=right_1-boxWidth;
    bottom_1=bottom_1-boxHeight;
    step=random(3,5);
    x=x+step*(flagX?1:-1);
    if (x<R){flagX=true;x=R;}
    if (x>right_1){flagX=false;x=right_1;}
    step=random(2,4);
    y=y+step*(flagY?1:-1);
    if (y<B){flagY=true;y=B;}
    if (y>bottom_1){flagY=false;y=bottom_1;}
    box.style.right=x +"px";
    box.style.bottom=y+ "px";
}
*/
//方法二：地球动起来
//获取元素节点
var box=document.getElementById("box00");
var speedX=6;
var speedY=3;
box.style.left=random(0,document.documentElement.clientWidth-box.offsetWidth)+"px";
box.style.top=random(0,document.documentElement.clientHeight-box.offsetHeight)+"px";
function fly() {
    box.style.left=box.offsetLeft+speedX+"px";
    box.style.top=box.offsetTop+speedY+"px";
    var topMax=document.documentElement.clientHeight-box.offsetHeight;
    var leftMax=document.documentElement.clientWidth-box.offsetWidth;
    if(box.offsetTop>=topMax || box.offsetTop<=0){
        speedY*=-1;
    }
    if(box.offsetLeft>leftMax || box.offsetLeft<=0){
        speedX*=-1;
    }
}
var time=setInterval("fly()",100);
box.onmouseover=function () {
    clearInterval(time)
};
box.onmouseout=function () {
    time=setInterval("fly()",100)
};

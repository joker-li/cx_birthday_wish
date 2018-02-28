var str = '陈霞，生日快乐。<br>你在我心中永远都是最美的 ヾ(ﾟ∀ﾟゞ)<br>（请调大音量，然后连续点击屏幕（有惊喜哦~））';
var i = 0;
var j=0;
var word = document.getElementById('word');
var wordBackground=document.getElementById('wordBackground');
var wish=document.getElementById('wish');
var initOpacity=0.0;

word.style.marginTop=document.documentElement.clientHeight/3+'px';
word.style.marginLeft=document.documentElement.clientWidth*0.15+'px';
wordBackground.style.marginTop=document.documentElement.clientHeight/3-5+'px';
wordBackground.style.marginLeft=document.documentElement.clientWidth*0.15+'px';
wish.style.marginLeft=document.documentElement.clientWidth*0.15+'px';
wish.style.marginTop=document.documentElement.clientHeight/3+150+'px';
wish.style.opacity=initOpacity;

function typing(){
    if (i <= str.length) {
        word.innerHTML = str.slice(0, i++) + '_';
        var time=Math.random()>0.7 ? 50 : 300;
        setTimeout(typing, time);//递归调用
    }
    else{
        wordEnd();
    }
}

function wordEnd() {
    if(j%2==0){
        word.innerHTML=str+'_';
    }
    else{
        word.innerHTML=str+' ';
    }
    j++;
    setTimeout(wordEnd,1000);
}

setTimeout(typing,1500);
//实现淡入效果
setTimeout(function () {
    var i=setInterval(function () {
        wish.style.opacity=initOpacity;
        if(initOpacity<1.0){
            initOpacity+=0.01;
        }
        if(initOpacity>=1.0){
            clearInterval(i);
        }
    },25);
    
},10000);

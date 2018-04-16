var str = '萌萌，生日快乐~<br>佳雪销微照，初萌动早芒，<br>很高兴遇见你。';
var i = 0;
var j=0;
var word = document.getElementById('word');
var wordBackground=document.getElementById('wordBackground');
var wish=document.getElementById('wish');
var attention=document.getElementById('attention');
var initOpacity=0.0;

word.style.marginTop=document.documentElement.clientHeight/3+'px';
word.style.marginLeft=document.documentElement.clientWidth*0.15+'px';
wordBackground.style.marginTop=document.documentElement.clientHeight/3-5+'px';
wordBackground.style.marginLeft=document.documentElement.clientWidth*0.15+'px';
wish.style.marginLeft=document.documentElement.clientWidth*0.15+'px';
wish.style.marginTop=document.documentElement.clientHeight/3+150+'px';
attention.style.marginTop=document.documentElement.clientHeight/3+250+'px';
attention.style.marginLeft=document.documentElement.clientWidth*0.15+'px';
wish.style.opacity=initOpacity;
attention.style.opacity=initOpacity;

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
        attention.style.opacity=initOpacity-0.7;
        if(initOpacity<1.7){
            initOpacity+=0.01;
        }
        if(initOpacity>=1.7){
            clearInterval(i);
        }
    },25);
    
},10000);

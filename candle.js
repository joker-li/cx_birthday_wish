var sHeight=window.innerHeight/3;
var space=40;
var lightCPos= [[400+space,sHeight+0.5*space],
				[400,sHeight],[400-space,sHeight],
				[400-2.5*space,sHeight+space],
				[400-3*space,sHeight+2*space],[400-3*space,sHeight+space*3],[400-3*space,sHeight+space*4],
				[400-2.5*space,sHeight+space*5],
				[400-space,sHeight+space*6],[400,sHeight+space*6],
				[400+space,sHeight+space*5.5],
				//C和X字母的分界
				[400+3*space,sHeight],[400+3.9*space,sHeight+space],[400+4.8*space,sHeight+space*2],[400+5.7*space,sHeight+space*3],[400+6.6*space,sHeight+space*4],[400+7.5*space,sHeight+space*5],[400+8.4*space,sHeight+space*6],
				[400+3*space,sHeight+6*space],[400+3.9*space,sHeight+5*space],[400+4.8*space,sHeight+space*4],[400+5.7*space,sHeight+space*3],[400+6.6*space,sHeight+space*2],[400+7.5*space,sHeight+space],[400+8.4*space,sHeight]];
var index=0;

function drawCandles() {
	setTimeout(function () {
		setInterval(function () {
			var light=document.createElement('div');
			light.className='light';
			setLight(light);
			index++;
			// if(index>=11) index=0;
			var lights=document.getElementById('lights');
			lights.appendChild(light);
		},1000);
	},5000);
}

function clearInit() {
	var wordOpacity=1.0;
	var wordBackgroundOpacity=0.2;
	var j=setInterval(function () {
		wordOpacity-=0.01;
		wordBackgroundOpacity-=0.002;
		word.style.opacity=wordOpacity;
		wordBackground.style.opacity=wordBackgroundOpacity;
		wish.style.opacity=wordOpacity;
		attention.style.opacity=wordOpacity;
		if(wordOpacity<=0){
			clearInterval(j);
		}
	},25);

	clearParticular=true;
	setTimeout(function () {
		wordBackground.parentNode.removeChild(wordBackground);
		word.parentNode.removeChild(word);
		wish.parentNode.removeChild(wish);
		attention.parentNode.removeChild(attention);
	},4000);
}

function setLight(elem) {
	// elem.style.marginTop=Math.random()*window.innerHeight+'px';
	// elem.style.marginLeft=Math.random()*window.innerWidth+'px';
	elem.style.marginLeft=lightCPos[index][0]+'px';
	elem.style.marginTop=lightCPos[index][1]+'px';
}
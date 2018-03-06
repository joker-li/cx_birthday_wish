function drawCandles() {
	setTimeout(function () {
		setInterval(function () {
			var light=document.createElement('div');
			light.className='light';
			setLight(light);
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
	elem.style.marginTop=Math.random()*window.innerHeight+'px';
	elem.style.marginLeft=Math.random()*window.innerWidth+'px';
}
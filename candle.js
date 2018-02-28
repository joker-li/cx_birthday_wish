function drawCandles() {
	
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
}
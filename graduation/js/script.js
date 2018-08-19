/*
$(document).ready(function(){
	$("#theTarget").skippr();
});
*/

$(document).ready(function(){
	$("#theTarget").skippr({
		transition: 'slide',
		speed: 1000,
		easing: 'easeOutQuart',
		navType: 'bubble',
		childrenElementType: 'div',
		arrows: true,
		autoPlay: true,
		autoPlayDuration: 5000,
		keyboardOnAlways: true,
		hidePrevious: false,
	});
});


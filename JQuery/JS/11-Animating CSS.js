$(function() {
	$('li').on('click', function() {

		$(this).animate({
			opacity: 0.0,
			paddingLeft: '+=80',
		}, 500, function() { //'500' is the speed of animation in milliseconds
		//The aobve function is called when animation finishes
			$(this).remove();
		});
	});
});
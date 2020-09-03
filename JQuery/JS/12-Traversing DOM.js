$(function() {
	var $h2 = $('h2');
	$('ul').hide();
	$h2.append('<a> <small>Show</small> </a>');

	$h2.on('click', function() {
		$h2.next()     //selects the next sibling after 'h2' which is 'ul'
			.fadeIn(500)
			.children('.hot')  //Selects the children of ul which have 'hot' class 
			.addClass('complete');
		$h2.find('a').fadeOut(); // finds <a> tag in 'h2' and vanishes it
	});
	
});
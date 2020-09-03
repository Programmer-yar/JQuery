$(function() {
	$('li#three').removeClass('hot');
	$('li.hot').addClass('favorite');
	$('ul').attr('id', 'group')

	//Getting and Setting CSS Properties
	var backgroundColor = $('li').css('background-color');
	$('ul').append('<p>Color was: ' + backgroundColor + '</p>');
	$( ' li ') .css({
		'background-color' : '#c5a996',
		'border': 'lpx solid #fff',
		'color': '#000',
		'font-family': 'Georgia',
		'padding-left'  :  '+=75', //'+=' increase the pixel given in numbers
		});
});
$(function() {
	$('li:lt(2)').removeClass('hot'); //Select all list items with index less than 2
	$('li').eq(0).addClass('complete'); // selects list item with index equals '0'
	$('li:gt(2)').addClass('cool');
});
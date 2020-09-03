$(function () {
	var $p = $('p');
	var $clonedQuote = $p.clone(); // clone copies the element
	$p.remove();
	$clonedQuote.insertAfter('h1');

	var $moveItem = $('#one').detach(); //removes the element but keeps copy in memory
	$moveItem.appendTo('ul');
});
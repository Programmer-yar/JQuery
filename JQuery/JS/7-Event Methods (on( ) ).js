$(function () {
	var ids = '';
	var $listItems = $('li'); // selects all list items

	$listItems.on('mouseover click', function() {
	/* 'on()' method adds event listener with 2 events (mouseover, click)
	and calls the anonymous function when any one of the 2 events happen on
	any of the list item */

		ids = this.id;  // stores the id of list item on which event occured
		$listItems.children('span').remove(); //removes any span tag on 'list item'
		$(this).append('<span class="priority"> ' + ids +'</span>');
		$('li span').css({'color':'red'}); //only changes the color of text inside <span>
		//$listItems.children('span').css({'color':'red'}); (same function as above)
	});

	$listItems.on('mouseout', function() { 
	/* adds 'mouseout' event listener using on method on all 'list items' */

		$(this).children('span').remove();
	});
});
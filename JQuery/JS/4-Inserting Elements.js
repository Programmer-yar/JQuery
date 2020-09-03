/* Below function inside a $() or Jquery method represents when the page is ready()
load this function */

$(function() {
	$('ul').before('<p class="notice">Just Updated</p>');
	//Selects 'ul' and using 'before()' method insert a paragraph before <ul>

	$('li.hot').prepend('+ ');
	/* select all 'li' with class='hot' and using prepend adds a "+" before every
	 'li text'. prepend inserts data just after the opening tag */

	$('li').append('<b>--Vow</b>');

	var $newListItem = $('<li><em>gluten free</em> Soye Sauce </li>');
	// creates a new paragraph and stores it inside a variable

	$('li:last').after($newListItem);
	//Selects last 'li' and apply after method to add a paragraph after that item
});
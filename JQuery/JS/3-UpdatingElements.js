$(function() {  // As soon as the page is ready/loaded
	$('li:contains("pine")').text('almonds');
	/* Selects <li> that contains word 'pine' and change the entire text of that 'li'
	with 'almonds' using 'text()' method */

	$('li.hot').html(function() { 
	//selects all 'li' with class 'hot' and applies 'html()' method
		return '<em>'+ $(this).text() + '</em>';
	});
	
	$('li#one').remove();  //selects 'li' with 'id' attribute = 'one' and then applies
	                       //'remove()' method
});
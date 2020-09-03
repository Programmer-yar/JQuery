/* "$()" is used as shorthand for "jQuery()"
$() or jQuery() is called JQUERY OBJECT */


$(':header').addClass('headline');
//$(':header') -> selects all headings <h1> -- <h6>
// ".addClass('headline')" adds 'headline' to their class attribute

$('li:lt(3)').hide().fadeIn(1500);
//$('li:lt(3)') -> selects first 3 list items
//'hide()' hides them and then fadeIn(1500) makes them fade into view


$('li').on('click', function() {
	$(this).remove();
});
//$('li') -> selects all List Items
//'on' adds event listener for clicking the item
// function is called when an item is clicked 


$('li em').addClass('seasonal');
//Selects list item with <em> tag and only the text within <em> tag 
	
$('li.hot').addClass('favorite'); // selects 'li' with class = "hot"
$('li[id!="one"]').hide().delay(500).fadeIn(1400);
// selects all list items except the ones which have id="one"



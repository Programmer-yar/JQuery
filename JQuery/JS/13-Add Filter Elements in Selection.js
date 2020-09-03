var $listItems = $('li');
$listItems.filter('.hot:last').removeClass('hot');
/*Filters the 'li' with class 'hot' then selects the last element with that class
'removeClass' method then removes the 'hot' class from that element */

$('li:not(.hot)').addClass('cool');
//filters the 'li' that do not contain 'hot' class and adds 'cool' class to it

$listItems.has('em').addClass('complete');

$listItems.each(function() {
	var $this = $(this);
	if ($this.is('.hot')) {
		$this.prepend('Priority item: ');
	}
});

$('li:contains("honey")').append(' (local)');
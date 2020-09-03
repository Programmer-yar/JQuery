$(function() {  //Shortcut for ready function
	$('li').each(function() {
	/*Selecting every list item and using each method to apply function on them
	one by one (without using loop) */
		var ids = this.id;   //'this' is a reference to current 'li'
		$(this).append('<span> -- '+ ids+ '</span>');
		/*'$(this)' creates JQuery object of current 'li' 
		on which different method can be applied */
 	});

	$('li span').css({'color':'red'});
	/* Selecting all 'li' with <span> tag and then using CSS attribute 
	changer method */
});
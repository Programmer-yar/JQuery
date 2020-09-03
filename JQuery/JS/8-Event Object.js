$(function() {

	$('li').on('click', function(e) {
		$('li span').remove();
		var date = new Date();  // Creation of a date event 
		date.setTime(e.timeStamp);  // setting the 'event time' in 'date' event
		var clicked = date.toDateString(); //converting it into readable format
		$(this).append('<span class="date">  '+clicked+' '+e.type + '</span>');
		$('li span').css({'color':'red'});
	});

});
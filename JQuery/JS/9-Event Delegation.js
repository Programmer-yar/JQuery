$(function() {
	var listItem, itemStatus, eventType;

	$('ul').on('click mouseover',
	 	':not(#four)',   //filters out the element with id='four'
	  	{status: 'important'},  // additional data passed to event handler
		function(e) {
			listItem = 'item: ' + e.target.textContent + '<br>';
			itemStatus = 'Status: ' +e.data.status + '<br>';
			eventType = 'Event: ' +e.type;
			$('#notes').html(listItem + itemStatus + eventType).css({'color':'blue'});
			//Selects an item with id='notes' and change its html content
			//css method changes css properties
		});
});
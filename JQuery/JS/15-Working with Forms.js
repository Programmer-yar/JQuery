$(function () {

	var $newItemButton = $('#newItemButton'); // gets the div with id="newItemButton"
	var $newItemForm = $('#newItemForm'); // gets the form
	var $textInput = $('input:text'); // filters out the input with type="text"

	$newItemButton.show();
	$newItemForm.hide();

	$('#showForm').on('click', function() {
	//sets the event listener on the button with id = "showForm"

		$newItemButton.hide();
		$newItemForm.show();
	});

	$newItemForm.on('submit', function(e) {
		e.preventDefault();
		//Prevents the form submit event from happening
		var newText = $('input:text').val();
		$('li:last').after('<li>'+ newText +'</li>');
		$newItemForm.hide();
		$newItemButton.show();
		$textInput.val('');
	});
});
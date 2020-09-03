//Ready Method
$(document).ready(function(){

});
// Shortcut for ready method --> $(function(){ });

var $first_ul_html, first_ul_text;
$first_ul_html = $('ul').html();  //copies the list (every list item)
$first_ul_text = $('ul').text();  //just copy text (text inside every list item)

$('div#test_div1').append($first_ul_html);
$('p[id="test_para1"]').append( $first_ul_text );

// var $listHTML = $('ul').html();
// $('ul').append($listHTML);

// var $listText = $('ul').text();
// $('ul').append('<p>'+ $listText +'</p>')

var $listItemHTML = $('li').html(); //selects the html content of first 'list item'
$('p[id="test_para2"]').append( $listItemHTML );




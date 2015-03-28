

$( document ).ready (function(){
	$('#first').submit(function( e ) {
		e.preventDefault();
		name = $(this).children("input[name]").val();
		$( '#first-name').html(name);
	});
})
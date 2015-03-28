

$( document ).ready (function(){
	$('#first').submit(function( e ) {
		e.preventDefault();
		name = $(this).children("input[name]").val();
		$( '#first-name').html(name);
	});

	$('#middle').submit(function( e ) {
		e.preventDefault();
		name = $(this).children("input[name]").val();
		$( '#middle-name').html(name);
	});

	$('#last').submit(function( e ) {
		e.preventDefault();
		name = $(this).children("input[name]").val();
		$( '#last-name').html(name);
	});

})
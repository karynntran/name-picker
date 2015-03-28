var boyNames = ["chase", "benjamin", "nicholas"]

function randomizeNames(gender){
	return gender[Math.floor(Math.random()*gender.length)];
}

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

	$( '#randomize-first' ).click(function(e) {
	  e.preventDefault();
	  name = randomizeNames(boyNames);
	  $( '#first-name').html(name);
	});

	$( '#randomize-middle' ).click(function(e) {
	  e.preventDefault();
	  name = randomizeNames(boyNames);
	  $( '#middle-name').html(name);
	});



})

function chooseGender(){
	$( '.gender' ).click(function(e) {
	  debugger;
	  console.log('gender');
	  e.preventDefault();
	});
}

function randomizeNames(gender){
	return gender[Math.floor(Math.random()*gender.length)].name;
}

$( document ).ready (function(){
	$('#first').submit(function( e ) {
		e.preventDefault();
		name = $(this).children("input[name]").val();
		$( '#first-name').html(name.toUpperCase());
	});

	$('#middle').submit(function( e ) {
		e.preventDefault();
		name = $(this).children("input[name]").val();
		$( '#middle-name').html(name.toUpperCase());
	});

	$('#last').submit(function( e ) {
		e.preventDefault();
		name = $(this).children("input[name]").val();
		$( '#last-name').html(name.toUpperCase());
	});

	$( '#randomize-first' ).click(function(e) {
	  e.preventDefault();
	  name = randomizeNames(boyNames);
	  $( '#first-name').html(name.toUpperCase());
	});

	$( '#randomize-middle' ).click(function(e) {
	  e.preventDefault();
	  name = randomizeNames(boyNames);
	  $( '#middle-name').html(name.toUpperCase());
	});

	chooseGender();

})
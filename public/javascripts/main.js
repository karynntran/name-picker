
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


//on window onload
document.addEventListener('DOMContentLoaded', function(){

	var nameTypeArray = ["first", "middle", "last"];

	for (var i = 0; i < nameTypeArray.length; i++){
		var submitButton = document.getElementById(nameTypeArray[i] + "Submit");
		var randomizeButton = document.getElementById(nameTypeArray[i] + "Randomize");
		var submitResult = document.getElementById(nameTypeArray[i] + "Name");

		submitButton.onclick = (function(submitResult) {
            return function(event) {
                event.preventDefault();
                var name = this.previousElementSibling.value;
                submitResult.textContent = name;
            }
        })(submitResult);

		randomizeButton.onclick = (function(submitResult) {
            return function(event) {
                event.preventDefault();
                var name = randomizeNames(boyNames);
                submitResult.textContent = name;
            }
        })(submitResult);

	};


	// $( '#randomize-first' ).click(function(e) {
	//   e.preventDefault();
	//   name = randomizeNames(boyNames);
	//   $( '#first-name').html(name.toUpperCase());
	// });

	// $( '#randomize-middle' ).click(function(e) {
	//   e.preventDefault();
	//   name = randomizeNames(boyNames);
	//   $( '#middle-name').html(name.toUpperCase());
	// });

	// chooseGender();
});

// $( document ).ready (function(){
// 	$('#first').submit(function( e ) {
// 		e.preventDefault();
// 		name = $(this).children("input[name]").val();
// 		$( '#first-name').html(name.toUpperCase());
// 	});

// 	$('#middle').submit(function( e ) {
// 		e.preventDefault();
// 		name = $(this).children("input[name]").val();
// 		$( '#middle-name').html(name.toUpperCase());
// 	});

// 	$('#last').submit(function( e ) {
// 		e.preventDefault();
// 		name = $(this).children("input[name]").val();
// 		$( '#last-name').html(name.toUpperCase());
// 	});

// 	$( '#randomize-first' ).click(function(e) {
// 	  e.preventDefault();
// 	  name = randomizeNames(boyNames);
// 	  $( '#first-name').html(name.toUpperCase());
// 	});

// 	$( '#randomize-middle' ).click(function(e) {
// 	  e.preventDefault();
// 	  name = randomizeNames(boyNames);
// 	  $( '#middle-name').html(name.toUpperCase());
// 	});

// 	chooseGender();

// })
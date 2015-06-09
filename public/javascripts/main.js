
function chooseGender(){
	var boyButton = document.getElementById("boyButton");
    var girlButton = document.getElementById("girlButton");

    boyButton.onclick = (function(){
        genderValue = boyNames;
    });
};

function randomizeNames(gender){
	return gender[Math.floor(Math.random()*gender.length)].name;
}

//on window onload
document.addEventListener('DOMContentLoaded', function(){

	var nameTypeArray = ["first", "middle", "last"];
    // var genderButtonsArray = ["boy", "girl"];

    // for (var i = 0; i < genderButtonsArray.length; i++){
    //     var genderButton = document.getElementById(genderButtonsArray[i] + "Button");
    //     genderValue = genderButtonsArray[i] + "Names";

    //     genderButton.onclick = (function(genderValue) {
    //         return function(event) {
    //             event.preventDefault();
    //         }
    //     })(genderValue);

    //     console.log(genderValue);
    // };
    chooseGender();    

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

});

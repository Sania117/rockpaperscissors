// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function() {

    let input = $("#input").val();

    let answers = ["rock", "paper", "scissors"];

    let isTrue = answers.includes(input);

    if (isTrue === true) {

        $("#userChoice").html(`<div> ${input} </div>`);
    } else {
        
        $("#userChoice").html('No!');
    }

    let computer_choice = Math.random();

    console.log(computer_choice);

    let computer_answers = [""];

    if (computer_choice < 0.35) {

            computer_answers.push("rock");

            $("#computerChoice").html(`<div> ${computer_answers} </div>`);

    } else if (computer_choice > 0.36 && computer_choice < 0.68){

            computer_answers.push ("paper");

            $("#computerChoice").html(`<div> ${computer_answers}</div>`);

    } else {

            computer_answers.push("scissors");

            $("#computerChoice").html(`<div> ${computer_answers} </div>`);
    }
    

});


// DOCUMENT READY FUNCTION BELOW


// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function() {

    let input = $("#input").val().tolowercase();

    

    let user_answers = input;

    let answers = ["rock", "paper", "scissors"];

    let isTrue = answers.includes(input);

    if (isTrue === true) {

        $("#userChoice").html(`<div> ${input} </div>`);
    } else {
        
        alert('Not a valid answer!');
    }

    let computer_choice = Math.random();

    console.log(computer_choice);

    let computer_answers = [];

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

    if (user_answers == "rock" && computer_answers == "paper"){

        $("#result").text("The computer wins!");

    } else if (user_answers == "rock" && computer_answers == "scissors"){

        $("#result").text("You win!")

    } else if (user_answers == "paper" && computer_answers == "scissors") {

        $("#result").text("The computer wins!");

    } else if (user_answers == "paper" && computer_answers == "rock") {

        $("#result").text("You win!")

    } else if (user_answers == "scissors" && computer_answers == "rock") {

        $("#result").text("The computer wins!");

    } else if (user_answers == "scissors" && computer_answers == "paper") {

        $("#result").text("You win!");

    }else if (user_answers == computer_answers) {

        $("#result").text("It's a tie!");

    }

    $("#input").val("");

    
    

});


// DOCUMENT READY FUNCTION BELOW


// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    let input = $("#input").val();
    let answers = ["rock", "paper", "scissors"];
    let isTrue = answers.includes(input);
    if(isTrue === true){
    $("#userChoice").html(`<div> ${input} </div>`);
    }else {
        $("#userChoice").html('No!');
    }
    

});


// DOCUMENT READY FUNCTION BELOW


// DOM ElEMENTS
var timer = document.getElementById("countdown");
var startCard = document.querySelector(".starting-card")
var quesCard = document.querySelector(".question-card")
var questionOptions = document.querySelector(".options");
var startButton = document.querySelector(".start")


// Score and Timer elements
var timeleft = 75;
var score = 0;


// When the web page loads hide ques card
// Resources used for page load are from:
// https://stackoverflow.com/questions/39307329/hide-div-onload-in-javascript/39307565 
window.onload = function() {
  quesCard.classList.add("hide");
};

startButton.addEventListener("click", function() {
  quizstart()
});

questionOptions.addEventListener("click", function() {
  console.log("this button was clicked")
});





function quizstart() {
  console.log("to start the quiz")
  // startButton.classList.add("hide");
  startCard.classList.add("hide");
  quesCard.classList.add("show");

};




// Questions
// Resources used for array are from:
// https://www.youtube.com/watch?v=iiADhChRriM
// https://www.youtube.com/watch?v=wI1CWzNtE-M
var questions = {
    array1:{
        title: "This is a question",
        question: [{
            "Letter A": true,
            "Letter B": false,
            "Letter C": false,
            "Letter D": false
        }]
    },
    // array2:{
    //     title: "This is a question",
    //     Array: [{
    //         "Letter A": true,
    //         "Letter B": false,
    //         "Letter C": false,
    //         "Letter D": false
    //     }]
    // },
    // array3:{
    //     title: "This is a question",
    //     Array: [{
    //         "Letter A": true,
    //         "Letter B": false,
    //         "Letter C": false,
    //         "Letter D": false
    //     }]
    // },
    // array4:{
    //     title: "This is a question",
    //     Array: [{
    //         "Letter A": true,
    //         "Letter B": false,
    //         "Letter C": false,
    //         "Letter D": false
    //     }]
    // },
    // array5:{
    //     title: "This is a question",
    //     Array: [{
    //         "Letter A": true,
    //         "Letter B": false,
    //         "Letter C": false,
    //         "Letter D": false
    //     }]
    // },
}

// Timer for 75 seconds
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  timer.innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
}, 1000);

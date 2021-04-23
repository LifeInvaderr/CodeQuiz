// DOM ElEMENTS
var timer = document.getElementById("countdown");
var startCard = document.querySelector(".starting-card")
var quesCard = document.querySelector(".question-card")
var questionOptions = document.querySelector(".options");
var startButton = document.querySelector(".start")


// Score and Timer elements
var timeleft = 75;
var score = 0;

// The button to start the quiz
startButton.addEventListener("click", function () {
  quizstart()
});

// This starts the timer, hides the startcard, and begins the quiz question index
function quizstart() {
  startTimer();
  console.log("to start the quiz");
  startCard.classList.add("hide");
  quizQuesInd();
};

// This is the function for the timer
function startTimer() {
  // Timer for 75 seconds
  var timeset = setInterval(function () {
    if (timeset <= 0) {
      clearInterval(timeset);
    }
    timer.innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
  }, 1000);

}

var i = 0

// This is the function to add the buttons to the page
// as well as add the content from the array to the page
function quizQuesInd() {
  var quesTextEle = document.createElement("h2")
  quesTextEle.textContent = questions[i].title;
  quesCard.append(quesTextEle);

  var quesBtn1 = document.createElement("button");
  quesBtn1.textContent = questions[i].choices[0];
  quesBtn1.classList.add("ansButton1");
  quesCard.append(quesBtn1);

  var quesBtn2 = document.createElement("button");
  quesBtn2.textContent = questions[i].choices[1];
  quesBtn2.classList.add("ansButton2");
  quesCard.append(quesBtn2);

  var quesBtn3 = document.createElement("button");
  quesBtn3.textContent = questions[i].choices[2];
  quesBtn3.classList.add("ansButton3");
  quesCard.append(quesBtn3);

  var quesBtn4 = document.createElement("button");
  quesBtn4.textContent = questions[i].choices[3];
  quesBtn4.classList.add("ansButton4");
  quesCard.append(quesBtn4);

  document.querySelector(".ansButton1").addEventListener("click", ansCheck);
  document.querySelector(".ansButton2").addEventListener("click", ansCheck);
  document.querySelector(".ansButton3").addEventListener("click", ansCheck);
  document.querySelector(".ansButton4").addEventListener("click", ansCheck);

  // check if this .contnent are = to i.answer

}


function ansCheck() {
  for (var i = 1, len = quesCard.children.length; i < len; i++)
  {
  

      (function(index){
          quesCard.children[i].onclick = function(){
                alert(index)  ;
          }    
      })(i);
  
  }
}

// Questions
// Resources used for array are from:
// https://www.youtube.com/watch?v=iiADhChRriM
// https://www.youtube.com/watch?v=wI1CWzNtE-M
var questions = [
  {
    title: "This question one",
    choices: [
      "This is ans 1",
      "This is ans 2",
      "This is ans 3",
      "This is ans 4"
    ],
    correct: "This is ans 1",
  },
  {
    title: "This is a question",
    choices: [
      "This is ans 1",
      "This is ans 2",
      "This is ans 3",
      "This is ans 4"
    ],
    correct: "This is ans 2",
  },
  {
    title: "This is a question",
    choices: [
      "This is ans 1",
      "This is ans 2",
      "This is ans 3",
      "This is ans 4"
    ],
    correct: "This is ans 1",
  },
  {
    title: "This is a question",
    choices: [
      "This is ans 1",
      "This is ans 2",
      "This is ans 3",
      "This is ans 4"
    ],
    correct: "This is ans 1",
  },
  {
    title: "This is a question",
    choices: [
      "This is ans 1",
      "This is ans 2",
      "This is ans 3",
      "This is ans 4"
    ],
    correct: "This is ans 1",
  },
]

console.log(questions[i].title)


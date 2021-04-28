// DOM ElEMENTS
var timer = document.getElementById("countdown");
var startCard = document.querySelector(".starting-card")
var quesCard = document.querySelector(".question-card")
var questionOptions = document.querySelector(".options");
var startButton = document.querySelector(".start")
var endScreen = document.querySelector(".score-card")

// Current Question Index Variable
var currentQues = 0

// Score and Timer elements
var timeleft = 5;
var score = 0;

// To hide the score card
window.onload = function() {
  endScreen.classList.add("hide")
}

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
    if (timeleft <= 0) {
      clearInterval(timeset)
      endquiz();
    }
    timer.innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
  }, 1000);
}

// This is the function to add the buttons to the page
// as well as add the content from the array to the page
function quizQuesInd() {
  quesCard.innerHTML = " "


  var quesTextEle = document.createElement("h2")
  quesTextEle.textContent = questions[currentQues].title;
  quesCard.append(quesTextEle);

  var quesBtn1 = document.createElement("button");
  quesBtn1.textContent = questions[currentQues].choices[0];
  quesBtn1.classList.add("ansButton1");
  quesCard.append(quesBtn1);

  var quesBtn2 = document.createElement("button");
  quesBtn2.textContent = questions[currentQues].choices[1];
  quesBtn2.classList.add("ansButton2");
  quesCard.append(quesBtn2);

  var quesBtn3 = document.createElement("button");
  quesBtn3.textContent = questions[currentQues].choices[2];
  quesBtn3.classList.add("ansButton3");
  quesCard.append(quesBtn3);

  var quesBtn4 = document.createElement("button");
  quesBtn4.textContent = questions[currentQues].choices[3];
  quesBtn4.classList.add("ansButton4");
  quesCard.append(quesBtn4);

  document.querySelector(".ansButton1").addEventListener("click", ansCheck);
  document.querySelector(".ansButton2").addEventListener("click", ansCheck);
  document.querySelector(".ansButton3").addEventListener("click", ansCheck);
  document.querySelector(".ansButton4").addEventListener("click", ansCheck);
}
// Function to check answers within the array
function ansCheck() {
  for (var i = 1, len = quesCard.children.length; i < len; i++) {
    (function (index) {
      quesCard.children[i].onclick = function () {
        var buttonContent = this.textContent;
        if (buttonContent === questions[currentQues].correct) {
          console.log("correct");
          score += 100;
        }
        else {
          console.log("wrong");
          timeleft -= 10;
        }

        if (len => i) {
          endquiz()
        }

        currentQues++
        quizQuesInd();
      }
    })(i);
  }
}

//if i>= than array
//then call endquizfunc

//endquiz function
function endquiz() {
  quesCard.classList.add("hide");

  console.log(timeleft)
  console.log(score)
  timer.classList.add("hide")
  endScreen.classList.remove("hide")

  var scoreText = document.createElement("h2")
  scoreText.textContent = "Your score is: " + score
  endScreen.append(scoreText)

  var timeText = document.createElement("h2")
  timeText.textContent = "Your had " + timeleft + " seconds left"
  endScreen.append(timeText)

  clearInterval(timeset)

}




// Questions
// Resources used for array are from:
// https://www.youtube.com/watch?v=iiADhChRriM
// https://www.youtube.com/watch?v=wI1CWzNtE-M
var questions = [
  {
    title: "What color is the sky?",
    choices: [
      "Blue",
      "Green",
      "Purple",
      "Red"
    ],
    correct: "Blue",
  },
  {
    title: "What shape is a tire",
    choices: [
      "Square",
      "Circle",
      "Triangle",
      "Oval"
    ],
    correct: "Circle",
  },
  {
    title: "What animal is not like the others",
    choices: [
      "Cow",
      "Sheep",
      "Wolf",
      "Pig"
    ],
    correct: "Wolf",
  },
  {
    title: "Best ending for Fallout: New Vegas",
    choices: [
      "NCR",
      "Legion",
      "Mr. House",
      "Independent"
    ],
    correct: "NCR",
  },
  {
    title: "This is a question",
    choices: [
      "This is ans 1",
      "This is ans 2",
      "This is ans 3",
      "This is ans 4"
    ],
    correct: "This is ans 4",
  },
]


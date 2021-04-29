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
var timeleft = 75;
var score = 0;

// To hide the score card
window.onload = function () {
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

var timeset;

// This is the function for the timer
function startTimer() {
  // Timer for 75 seconds
  timeset = setInterval(function () {
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
// function ansCheck() {

function ansCheck() {
  var selectedanswer = this.textContent
  var correctAns = questions[currentQues].correct
  if (selectedanswer === correctAns) {
    score += 100;
  } else { timeleft -= 10 }
  currentQues++
  if (currentQues >= questions.length) {
    endquiz();
  }
  quizQuesInd();
}


//if i>= than array
//then call endquizfunc

//endquiz function
function endquiz() {
  quesCard.classList.add("hide");
  clearInterval(timeset);

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
    title: "What are replicants?",
    choices: [
      "Cyborgs",
      "Bioengineered Beings",
      "Off Worlders",
      "Assasins"
    ],
    correct: "Bioengineered Beings",
  },
  {
    title: "What does the term 'retired' mean in the film?",
    choices: [
      "To quit a job",
      "To find new place of work",
      "To be killed",
      "To be placed into custody"
    ],
    correct: "To be killed",
  },
  {
    title: "What was K?",
    choices: [
      "Cyborg",
      "Replicant",
      "Human",
      "Alien"
    ],
    correct: "Replicant",
  },
  {
    title: "Who did Deckard fall in love with?",
    choices: [
      "Scarlet",
      "Joi",
      "Olivia",
      "Rachael"
    ],
    correct: "Rachael",
  }, {
    title: "What was the blackout?",
    choices: [
      "An EMP blast that eraesed all Data",
      "A shutdown of an electrical grid",
      "The rebellion of replicants",
      "The complete shutdown of all replicant manufacturing"
    ],
    correct: "An EMP blast that eraesed all Data",
  },
  {
    title: "In the first Blade Runner, what was Roy and the replicants goal?",
    choices: [
      "To produce a new line of replicants",
      "To inherit the Tyrell Corporation",
      "To receive cybernetic upgrades",
      "To extend their current life"
    ],
    correct: "To extend their current life",
  },
  {
    title: "In Blade Runner 2049, what was the goal of the replicants?",
    choices: [
      "To conceal the first replicant/human child",
      "To amass an army and take over the human population",
      "To move off-world and start a new life",
      "To extend their current life"
    ],
    correct: "To conceal the first replicant/human child",
  },
  {
    title: "Why would 'the child' cause protest?",
    choices: [
      "It would seem inhumane for a company to produce child replicants",
      "The Blade Runners were to worried about the Tyrell Corp",
      "It would remove the barrier between human and Replicant",
      "As it would give the Replicants some leverage in their goals"
    ],
    correct: "It would remove the barrier between human and Replicant",
  },
  {
    title: "In Blade Runner 2049, who was the child?",
    choices: [
      "K",
      "Pris",
      "Stelline",
      "Joi"
    ],
    correct: "Stelline",
  }
]
var highscores = JSON.parse(localStorage.getItem("highscores")) || [{
  Jefferson: 500
},
{
  Anthony: 200
}]






localStorage.setItem("highscores", JSON.stringify(highscores))
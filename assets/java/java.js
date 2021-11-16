var countdownTimer = document.querySelector(".timercount");
var startbutton = document.querySelector("#start-button");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var questionDisplay = document.querySelector(".question");
var questionBox = document.querySelector("#sectionbox");
var scoreCount = document.querySelector("#currentScore");
var totalScore = document.querySelector("#totalScore");


var timer = 60;
var timerCount = 60;
var SCORE = 0;
var questionNumber = 0;
var rightAnswer;
var chosenAnswer;

var questions = [ 
    {
        question: "What is my name?",
        choice1: "Steve",
        choice2: "John",
        choice3: "Alex",
        choice4: "Raccoon",
        correctAnswer: "3"
    },

    {
        question: "Correct Answer is 1",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correctAnswer: "1"
    },

    {
        question: "Question 3 answer 2",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correctAnswer: "2"
    },

    {
        question: "Question 4 answer 4",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correctAnswer: "4"
    },

    {
        question: "Question 5 answer 2",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correctAnswer: "2"
    },

    {
        question: "Question 6 answer 2",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correctAnswer: "2"
    },

    {
        question: "Question 7 answer 2",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correctAnswer: "2"
    },

    {
        question: "Question 8 answer 2",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correctAnswer: "2"
    },

    {
        question: "Question 9 answer 2",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correctAnswer: "2"
    },

    {
        question: "Question 10 answer 2",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correctAnswer: "2"
    },
]

//Timer function
function timeLeft() {
    timer = setInterval(function() {
        timerCount--;
        countdownTimer.textContent = timerCount;

        if(timerCount <= 0)
        {
            console.log("times up!");
            clearInterval(timer);
            questionBox.style.display = "none";
            endScreen();

        } else if(timerCount > 0 && questionNumber > 9) {
            clearInterval(timer);
            questionBox.style.display = "none";
            endScreen();
        }

    }, 1000);
}


//game starer
function startgame() {
    timer = 60;
    timerCount = 60;
    SCORE = 0;
    questionNumber = 0;
    timeLeft();
    questionBox.style.display = "block";
    startbutton.style.display = "none";
    nextQuestion();
}

//Cycles through questions

function nextQuestion() {
    questionMaker(questions[questionNumber]);
    questionNumber++;
}

//Make functions to display questions
function questionMaker() {
    questionDisplay.textContent = questions[questionNumber].question;
    answer1.textContent = questions[questionNumber].choice1;
    answer2.textContent = questions[questionNumber].choice2;
    answer3.textContent = questions[questionNumber].choice3;
    answer4.textContent = questions[questionNumber].choice4;
    rightAnswer = questions[questionNumber].correctAnswer;
}

//Check answer, if correct button pressed +20 to SCORE and move to next question.
function checkAnswer() {
    if(chosenAnswer == rightAnswer) {
        SCORE = SCORE + 5;
        console.log("Correct Answer!");
        checkScore();
    } else {
        console.log("wrong answer");
        timerCount = timerCount - 5;
    }
}

//Game rules.
//Show question with 4 answer, if wrong answer remove 8 seconds.
//Total score (Correct + timeleft)

//End Screen

function endScreen() {
    SCORE = SCORE + timerCount;
    totalScore.textContent = SCORE;
}

//Refresh Score screen

function checkScore() {
    scoreCount.textContent = SCORE;
}

//Event listener for start button
startbutton.addEventListener("click", startgame);

//Event listener for answers. Change event when finishing.
answer1.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if(element.matches(".answer1") === true) {
        chosenAnswer = 1;
        checkAnswer();
        console.log("Chosen Answer: "+chosenAnswer);
    }
    nextQuestion()
});

answer2.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if(element.matches(".answer2") === true) {
        chosenAnswer = 2;
        checkAnswer();
        console.log("Chosen Answer: "+chosenAnswer);
    }
    nextQuestion()
});

answer3.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if(element.matches(".answer3") === true) {
        chosenAnswer = 3;
        checkAnswer();
        console.log("Chosen Answer: "+chosenAnswer);
    }
    nextQuestion()
});
 
answer4.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if(element.matches(".answer4") === true) {
        chosenAnswer = 4;
        checkAnswer();
        console.log("Chosen Answer: "+chosenAnswer);
    }
    nextQuestion()
});
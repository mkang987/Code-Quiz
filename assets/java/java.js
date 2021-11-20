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
var endScore = document.querySelector("#scoreBoard");
var viewScore = document.querySelector("#highscore-button");
var clearScore = document.querySelector("#clear-button");

var timer = 60;
var timerCount = 60;
var SCORE = 0;
var questionNumber = 0;
var rightAnswer;
var chosenAnswer;

const NO_OF_HIGH_SCORES = 5;
const HIGH_SCORES = 'highScores';


//List of Questions and Correct answer
var questions = [ 
    {
        question: "What does HTML Stand for?",
        choice1: "HyperText Markup Language",
        choice2: "High Transfer Module Lists",
        choice3: "Hidden Text Mockup Launcher",
        choice4: "Held Terminal Minimized Loader",
        correctAnswer: "1"
    },

    {
        question: "Who invented HTML?",
        choice1: "Bill Gates",
        choice2: "Edward Jenner",
        choice3: "John Pemberton",
        choice4: "Tim Berners-Lee",
        correctAnswer: "4"
    },

    {
        question: "What is DOM?",
        choice1: "Data Onsite Migration",
        choice2: "Document Object Model",
        choice3: "Digital Opposing Membrane",
        choice4: "Dynamic Operational Module",
        correctAnswer: "2"
    },

    {
        question: "A ____ is used for creating an element in HTML.",
        choice1: "README",
        choice2: "Style Sheet",
        choice3: "Title Bar",
        choice4: "Tag",
        correctAnswer: "4"
    },

    {
        question: "Which of the following is a function?",
        choice1: "rollTheDice();",
        choice2: "var x = 5;",
        choice3: "<title>Coding is fun!</title>",
        choice4: ".inline{display: inline}",
        correctAnswer: "1"
    },

    {
        question: "A(n) ______ extends a tag, changing tag behavior or providing metadata.",
        choice1: "Addon",
        choice2: "Attribute",
        choice3: "Identifier",
        choice4: "Morpher",
        correctAnswer: "2"
    },

    {
        question: "What is the difference between <a> and <link> tag?",
        choice1: "<a> is used for setting arguments while <link> will link 2 elements",
        choice2: "<a> links to another webpage or certain part of webpage, <link> defines link between a doc and external source.",
        choice3: "<a> will activate whatever is inside it, <link> will link whatever objects are inside it.",
        choice4: "No differences",
        correctAnswer: "2"
    },

    {
        question: "When was jQuery released?",
        choice1: "September 8th, 2008",
        choice2: "August 26, 2006",
        choice3: "July 19th, 2004",
        choice4: "May 9th, 2010",
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

    {
        question: "Complete",
    }
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

        } else if(timerCount > 0 && questionNumber == 11) {
            clearInterval(timer);
            questionBox.style.display = "none";
            endScreen();
        }

    }, 1000);
}


//game starer function
function startgame() {
    timer = 60;
    timerCount = 60;
    SCORE = 0;
    questionNumber = 0;
    timeLeft();
    endScore.style.display = "none";
    questionBox.style.display = "block";
    startbutton.style.visibility = "hidden";
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


//End Screen

function endScreen() {
    SCORE = SCORE + timerCount;
    totalScore.textContent = SCORE;
    startbutton.style.visibility = "visible";
    checkHighScore(SCORE)
}

//Refresh Score screen
function checkScore() {
    scoreCount.textContent = SCORE;
}


//HighScore function
function checkHighScore(SCORE) {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;

    if(SCORE > lowestScore) {
        saveHighScore(SCORE, highScores);
        showHighScores();
    }
}

//View highscores
function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const highScoreList = document.getElementById(HIGH_SCORES);
  
    endScore.style.display = "block";
    highScoreList.innerHTML = highScores
        .map((SCORE) => `<li>${SCORE.SCORE} - ${SCORE.name}`)
        .join('');
}

//Saving HighScore
function saveHighScore(SCORE, highScores) {
    var name = prompt('Enter your name:');
    var newScore = { SCORE , name};
    highScores.push(newScore);
    highScores.sort((a,b) => b.SCORE - a.SCORE);
    highScores.splice(NO_OF_HIGH_SCORES);
    localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
}

//Clear high Scores
function clearHighScores() {
    localStorage.clear();
    showHighScores();
}

//Event listener for start button
startbutton.addEventListener("click", startgame);
viewScore.addEventListener("click",showHighScores)
clearScore.addEventListener("click",clearHighScores)

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
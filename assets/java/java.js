var countdownTimer = document.querySelector(".timercount");
var startbutton = document.querySelector(".start-button");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var questionDisplay = document.querySelector(".question");



var timer = 60;
var timerCount = 60;

var question1 = ["What is my name?", "Steve", "John", "Alex", "Raccoon"];

//Timer function
function timeLeft() {
    timer = setInterval(function() {
        timerCount--;
        countdownTimer.textContent = timerCount;

        if(timerCount <= 0)
        {
            console.log("times up!");
            clearInterval(timer);
        }

    }, 1000);
}

function startgame() {
    timeLeft();
    questionMaker(question1[0],question1[1],question1[2],question1[3], question1[4]);
}

//Make functions to display questions
function questionMaker(Question,Ans1,Ans2,Ans3,Ans4) {
    questionDisplay.textContent = Question;
    answer1.textContent = Ans1;
    answer2.textContent = Ans2;
    answer3.textContent = Ans3;
    answer4.textContent = Ans4;

}

//Game rules.
//Show question with 4 answer, if wrong answer remove 10 seconds.
//Total score (Correct + timeleft)



//Event listener for start button
startbutton.addEventListener("click", startgame);

//Event listener for answers. Change event when finishing.
answer1.addEventListener("click", event); 
answer2.addEventListener("click", event);
answer3.addEventListener("click", event);
answer4.addEventListener("click", event);

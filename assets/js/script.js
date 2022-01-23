//declare variables start
start = document.getElementById("start");
startButton = document.getElementById("startButton");
questions = document.getElementById("questions");
questionBox = document.getElementById("question-box")
questionDiv = document.getElementById("quiz-questions")
response1 = document.getElementById("response1");
response2 = document.getElementById("response2");
response3 = document.getElementById("response3");
response4 = document.getElementById("response4");
submit = document.getElementById("submit")
finish = document.getElementById("finish");
highScores = document.getElementById("high-scores");
initials = document.getElementById("initials");
count = 0;
time = 60;
countdown = document.getElementById("countdown")
//declare variables end

//declare questions start
var quizQuestions = [
    {
        question: "What does JS stand for in web development?",
        responses: {
            response1: 'JavaScript',
            response2: 'Just Salt',
            response3: 'Just Saying',
            response4: 'John and Sally'
        },
        correctAnswer: 'response1'
    },
    {
        question: "What does CSS stand for in web development?",
        responses: {
            response1: 'Cannot Stand Soap',
            response2: 'Could Songs Sing',
            response3: 'Cascading Style Sheets',
            response4: 'Cones Start Somewhere'
        },
        correctAnswer: 'response3'
    },
    {
        question: "How do you push changes in your file to GIT?",
        responses: {
            response1: 'git push',
            response2: 'git add to git',
            response3: 'push git',
            response4: 'git push origin main'
        },
        correctAnswer: 'response4'
    },
    {
        question: "How do you create a new file using the GIT command line?",
        responses: {
            response1: 'create-file',
            response2: 'mkdir',
            response3: 'make file',
            response4: 'mkfl'
        },
        correctAnswer: 'response2' 
    }
];
//declare questions end

//timer funtion start
start.addEventListener("click", function() {

    timer = setInterval(function functionTimer(){
        if (time === -1) {
            clearTimeout(timer);
            countdown.setAttribute("class", "hidden")
        } else if (count > 3) {
            countdown.setAttribute("class", "hidden")
            clearTimeout(timer)
        } else {
            countdown.innerHTML = time;
            time--;
            console.log(time)
        }
    }, 1000)
});
//timer function end

//check answer function start
function validateAnswer(event) {
    var selectedAnswer = event.target.textContent
    var correctAnswer = quizQuestions[count].responses[4].correctAnswer
    count = count + 1
    if (selectedAnswer !== correctAnswer) {
        time = time - 10
    }

    nextQuestion();
}
//check answer function end

//function to generate next question start
function nextQuestion() {
    if (count <= 3) {
        response1.addEventListener("click", validateAnswer);
        response2.addEventListener("click", validateAnswer);
        response3.addEventListener("click", validateAnswer);
        response4.addEventListener("click", validateAnswer);
        questions.textContent = quizQuestions[count].questions;
        response1.textContent = quizQuestions[count].responses[0].response1
        response2.textContent = quizQuestions[count].responses[1].response2
        response3.textContent = quizQuestions[count].responses[2].response3
        response4.textContent = quizQuestions[count].responses[3].response4
    } else {
        finish.setAttribute("class", "display");
        questionBox.setAttribute("class", "hidden");
        timeLeft = parseInt(time) + 1;
        finalScore.textContent = "You Scored " + timeLeft;
        submit.addEventListener("click", function() {
            actualScore = input.value + "-" + timeLeft
            localStorage.setItem("highscore", actualScore)
            finish.setAttribute("class", "hidden")
            highScores.setAttribute("class", "display")
            var userScore = document.createElement("li")
            userScore.textContent = localStorage.getItem("highscore")
            highScores.append(userScore)
        });
        return
    }
}
//function to generate next question end


//LAST SECTION OF CODE

startButton.addEventListener("click", function() {
    start.setAttribute("class", "hidden");
    questionDiv.setAttribute("class", "display");

    questions.textContent = quizQuestions[count].questions;
    response1.textContent = quizQuestions[count].responses[0].response1;
    response2.textContent = quizQuestions[count].responses[0].response2;
    response3.textContent = quizQuestions[count].responses[0].response3;
    response4.textContent = quizQuestions[count].responses[0].response4;
    nextQuestion();
});
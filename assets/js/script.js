//declare variables start
start = document.getElementById("start");
startButton = document.getElementById("startButton");
questions = document.getElementById("questions");
response1 = document.getElementById("response1");
response2 = document.getElementById("response2");
response3 = document.getElementById("response3");
response4 = document.getElementById("response4");
highScores = document.getElementById("high-scores");
initials = document.getElementById("initials");
count = 0;
time = 60;
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
        question: "",
        responses: {
            response1: '',
            response2: '',
            response3: '',
            response4: ''
        },
        correctAnswer: 'response4'
    },
    {
        question: "",
        responses: {
            response1: '',
            response2: '',
            response3: '',
            response4: ''
        },
        correctAnswer: 'response2'
    }
];
//declare questions end

//timer funtion start
start.addEventListener("click", function(){

    timer = setInterval(function functionTimer(){
        if (time === -1) {
            clearTimeout(timer);
        } else if (count > 3) {
            clearTimeout(timer)
        } else {
            time--;
        }
    }, 1000)
});
//timer function end

//generate questions function start
function generateQuestions(questions){
    var output = [];
    var responses;

    for(var i=0; i<questions.length; i++){

        responses = [];


    }
}
//generate questions function end

//check answer function start
function validateAnswer(event) {

}
//check answer function end

//function to generate next question start
function nextQuestion() {
    if (count <= 3) {
        response1.addEventListener("click", validateAnswer);
        response2.addEventListener("click", validateAnswer);
        response3.addEventListener("click", validateAnswer);
        response4.addEventListener("click", validateAnswer);
        
    }
}
//function to generate next question end


//LAST SECTION OF CODE

start.addEventListener("click", function() {
    

})
start = document.getElementById("start");
startButton = document.getElementById("startButton");
questions = document.getElementById("questions");
response1 = document.getElementById("response1");
response2 = document.getElementById("response2");
response3 = document.getElementById("response3");
response4 = document.getElementById("response4");
highScores = document.getElementById("high-scores");
initials = document.getElementById("initials");

var quizQuestions = [
    {
        question: "",
        responses: {
            response1: '',
            response2: '',
            response3: '',
            response4: ''
        },
        correctAnswer: 'response1'
    },
    {
        question: "",
        responses: {
            response1: '',
            response2: '',
            response3: '',
            response4: ''
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

function generateQuestions(questions){
    var output = [];
    var responses;

    for(var i=0; i<questions.length; i++){

        responses = [];

        
    }
}
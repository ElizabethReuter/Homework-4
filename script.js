var startButton = document.querySelector("#startBtn");
var questionNumber = document.querySelector(".question-number");
var questionText = document.querySelector("#question-text");
var optionContainer = document.querySelector("#option-container");

var questionCounter = 0;
var currentQuestion;
var availableQuestions = [ ];
var answerOptions = [ ];


function drawQuestionsNum(){
    questionsNumber.textContent =  questionsNumlist[questionCounter]

    
}

var questionNumber = [
	{
		question: "........",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "......",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
    }
    {
		question: "......",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
    }
    {
		question: "......",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
    }
    {
		question: "......",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];



drawQuestionsNum();


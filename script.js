function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    
    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};


var questions = [
    new Question ("Where was the show originally supposed to be based in?", ['Montauk', 'Birmingham', 'Hawkins', 'Cedar Falls'], "Montauk"),
    new Question ("Eleven was supposed to be killed off at the end of what season?", ['First', 'Second', 'Third', 'Fourth'], "First"),
    new Question ("The Duffer brothers were inspired by what anime series?", ['Naruto Shippūden', 'Naruto','Elfen Lied', 'Fairy Tail'], "Elfen Lied"),
    new Question ("The producers of Stranger Things got secret-keeping tips from the producers of what other tv series?", ['Friends', 'Game of Thrones', 'Supernatural', 'New Girl'], "Game of Thrones"),
    new Question ("It was Caleb McLaughlin's idea to have his character, Lucas, wear what accessory?", ['Backpack', 'Watch', 'Baseball Cap', 'Bandana'], "Bandana")
];

window.onload = function() {
    var sec = 60;
    setInterval(function() {
      document.getElementById("timer").innerHTML = " Time : " + sec;
      sec--;
      if (sec == 00) {
        sec = 60;
        if (minute == 0) {
          minute = 1;
        }
      }
    }, 1000);
  }

  setTimeout(function(){
    clearInterval(sec);
 }, 1000);

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();


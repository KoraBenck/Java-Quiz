var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit')

function countdown() {
    var timeLeft = 5;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
	}

	function showResults(questions, quizContainer, resultsContainer){
	}

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var questions = [
    {
        question: "What is Han Solo's ship called?",
        answers: {
            a: "The Century Eagle",
            b: "The Millenium Falcon",
            c: "The Decade Hawk",
            d: "The Eon Harpy",
        },
        correctAnswer: "b"
    },
    {
        question: "Who is Luke's father revealed to be?",
        answers: {
            a: "Darth Vader",
            b: "Obi-Wan",
            c: "Chewbacca",
            d: "Han Solo",
        },
        correctAnswer: "a"
    },
    {
        question: "What color lightsaber to Obi-wan weild?",
        answers: {
            a: "Red",
            b: "Green",
            c: "Blue",
            d: "Purple",
        },
        correctAnswer: "c"
    },
    {
        question: "Where did Lando Calrissian betray Han Solo?",
        answers: {
          a: "Naboo",
          b: "Courascant",
          c: "Hoth",
          d: "Cloud City",
        },
        correctAnswer: "d"
    },
    {
      question: "What color is R2-D2?",
      answers: {
        a: "Blue and White",
        b: "Gold",
        c: "Red and White",
        d: "Orange",
      },
      correctAnswer: "a"
    },
]

function showQuestions(questions, quizContainer){
	var output = [];
	var answers;

	for(var i=0; i<questions.length; i++){
		
		answers = [];

		for(letter in questions[i].answers){

			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	quizContainer.innerHTML = output.join('');
}

showQuestions(questions, quizContainer);

function showResults(questions, quizContainer, resultsContainer){
	
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	var userAnswer = '';
	var numCorrect = 0;
	
	for(var i=0; i<questions.length; i++){

		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
			
			answerContainers[i].style.color = 'lightgreen';
		}
		else{
			answerContainers[i].style.color = 'red';
		}
	}

	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

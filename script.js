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

var questions = [
    {
        question: "What is Han Solo's ship called?",
        answers: {
            a: "The Century Eagle",
            b: "The Millenium Falcon",
            c: "The Decade Hawk"
        },
        correctAnswer: "b"
    }
]
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
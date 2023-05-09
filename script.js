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
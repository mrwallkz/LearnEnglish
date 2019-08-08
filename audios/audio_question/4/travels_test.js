
 (function() {
  function buildQuiz() {
   
    const output = [];


    myQuestions.forEach((currentQuestion, questionNumber) => {
     
      const answers = [];


      for (letter in currentQuestion.answers) {
       
        answers.push(
        	
          `<label class="radio_select">
            <input type="radio" name="question${questionNumber}" 
            value="${letter}">
            ${letter} .
            ${currentQuestion.answers[letter]}
            <span class="checkmark"></span>
          </label>`
        );
      }

    
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
       `
      );
    });


    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
   
    const answerContainers = quizContainer.querySelectorAll(".answers");

  
    let numCorrect = 0;

   
    myQuestions.forEach((currentQuestion, questionNumber) => {
    
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    
      if (userAnswer === currentQuestion.correctAnswer) {
       
        numCorrect++;

        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = 
    `<hr>
      <div class="result_div">
         <span class="result_text">Result:</span><br> 
         <span class="result_count">${numCorrect}</span> <span class="slash">/</span><span class="result_count"> ${myQuestions.length}</span>
      </div><hr>`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const subButton = document.getElementById("sub");
  const myQuestions = [
     {
      question: "At six o’clock in the morning, they were out of sight of land.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "On Sunday it was very cold.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "The sun gradually sinking in the west.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "The traveller saw whales spouting on Sunday morning.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "In a moment the deck was cleared.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "The people on the ship saw the iceberg in summer.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },





     {
      question: "At four o'clock in the afternoon",
      answers: {
        a: "we were out of sight of land",
        b: "we couldn't see land",
        c: "we saw an iceberg",
        d: "we set sail",
      },
      correctAnswer: "a"
    },
    {
      question: "The traveller used many words to describe the first day of the journey, EXCEPT",
      answers: {
        a: "long",
        b: "inspiring",
        c: "magnificent",
        d: "solemn",
      },
      correctAnswer: "a"
    },
    {
      question: "On the first evening of the journey the traveller noticed how the moon",
      answers: {
        a: "was full",
        b: "touched the waters",
        c: "was low on the horizon",
        d: "was dancing in the sky",
      },
      correctAnswer: "b"
    },
    {
      question: "On Sunday the weather was",
      answers: {
        a: "warm and windy",
        b: "cold and still",
        c: "warm and still",
        d: "cold and windy",
      },
      correctAnswer: "d"
    },

    {
      question: "On Sunday the traveller decided to stay on deck in order to",
      answers: {
        a: "breathe the fresh salty air",
        b: "have breakfast",
        c: "avoide sickness",
        d: "see the Steamship America",
      },
      correctAnswer: "c"
    },
    {
      question: "All of these words were used to describe the iceberg EXCEPT",
      answers: {
        a: "calm",
        b: "white",
        c: "lonely",
        d: "Enormous",
      },
      correctAnswer: "d"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

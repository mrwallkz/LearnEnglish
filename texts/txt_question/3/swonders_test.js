
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
      question: "1.  ...",
      answers: {
        a: "always ",
        b: "still",
        c: "again",
        d: "yet",
      },
      correctAnswer: "b"
    },
    {
      question: "2.  ...",
      answers: {
        a: "nuisance",
        b: "effect",
        c: "trouble",
        d: "affect",
      },
      correctAnswer: "d"
    },
     {
      question: "3.  ...",
      answers: {
        a: "another",
        b: "left",
        c: "other",
        d: "rest",
      },
      correctAnswer: "c"
    },
    {
      question: "4.  ...",
      answers: {
        a: "farther",
        b: "later",
        c: "further",
        d: "longer",
      },
      correctAnswer: "d"
    },
    {
      question: "5.  ...",
      answers: {
        a: "engaged",
        b: "worked on ",
        c: "contemplated",
        d: "attempted",
      },
      correctAnswer: "d"
    },
    
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

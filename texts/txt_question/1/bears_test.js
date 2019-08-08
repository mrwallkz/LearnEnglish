
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
      question: "A bear has small eyes.",
      answers: {
        a: "True",
        b: "False",
        c: "Doesn't say",
      },
      correctAnswer: "c"
    },
    {
      question: "Bears can be black.",
      answers: {
        a: "True",
        b: "False",
        c: "Doesn't say",
      },
      correctAnswer: "a"
    },
     {
      question: "Bears don’t live in Europe.",
      answers: {
        a: "True",
        b: "False",
        c: "Doesn't say",
      },
      correctAnswer: "b"
    },
    {
      question: "They live in groups.",
      answers: {
        a: "True",
        b: "False",
        c: "Doesn't say",
      },
      correctAnswer: "b"
    },
    {
      question: "Mother bear has more than five babies.",
      answers: {
        a: "True",
        b: "False",
        c: "Doesn't say",
      },
      correctAnswer: "b"
    },




     {
      question: "Baby bears are born in the winter.",
      answers: {
        a: "True",
        b: "False",
        c: "Doesn't say",
      },
      correctAnswer: "a"
    },
    {
      question: "Baby bears live with their father.",
      answers: {
        a: "True",
        b: "False",
        c: "Doesn't say",
      },
      correctAnswer: "b"
    },
    {
      question: "Baby bears hunt with their mother.",
      answers: {
        a: "True",
        b: "False",
        c: "Doesn't say",
      },
      correctAnswer: "c"
    },
    {
      question: "Bears eat a lot before winter.",
      answers: {
        a: "True",
        b: "False",
        c: "Doesn't say",
      },
      correctAnswer: "a"
    },
    {
      question: "Bears are never dangerous.",
      answers: {
        a: "True",
        b: "False",
        c: "Doesn't say",
      },
      correctAnswer: "b"
    },
    

  
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

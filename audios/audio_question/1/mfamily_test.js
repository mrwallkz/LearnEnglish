
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
      question: "His name is Tom.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "He has a large family.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "They are from Italy.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "His father’s name is Bob.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "His mother’s name is Liz.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "They live in a big house.  ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },






     {
      question: "His family is… ",
      answers: {
        a: "large",
        b: "small",
        c: "very large",
      },
      correctAnswer: "a"
    },
    {
      question: "They live in… ",
      answers: {
        a: "Germany",
        b: "Italy",
        c: "England",
      },
      correctAnswer: "b"
    },

    {
      question: "His brother’s name is… ",
      answers: {
        a: "Jack",
        b: "Bob",
        c: "Tom",
      },
      correctAnswer: "a"
    },
    {
      question: "His brother likes … ",
      answers: {
        a: "to play volleyball",
        b: "to play football",
        c: "to play tennis",
      },
      correctAnswer: "c"
    },
    {
      question: "They live in… ",
      answers: {
        a: "a flat",
        b: "a big house",
        c: "a small house. ",
      },
      correctAnswer: "b"
    },

    {
      question: "Their house is… ",
      answers: {
        a: "number 10",
        b: "number 4",
        c: "number 3",
      },
      correctAnswer: "a"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

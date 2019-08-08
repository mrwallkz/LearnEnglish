
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
      question: "A cat lives in a big house.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The cat eats a lot of mice every day.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "On his birthday the cat eats only one mouse.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The cat is glad to see the mice at his birthday.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "The mice bring presents for the cat.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },




     {
      question: "Every year … come to the cat’s birthday.",
      answers: {
        a: "aone or two mice",
        b: "ball the mice",
        c: "some mice",
      },
      correctAnswer: "b"
    },
    {
      question: "They give presents for him",
      answers: {
        a: "chocolates.",
        b: "fish.",
        c: "cakes, bottles of milk and interesting toys.",
      },
      correctAnswer: "c"
    },
    {
      question: "Last year mice gave him … as birthday present.",
      answers: {
        a: "a ribbon with a small bell",
        b: "a cathouse",
        c: "a book with pictures",
      },
      correctAnswer: "a"
    },
    {
      question: "The cat was glad because",
      answers: {
        a: "the mice came to see him.",
        b: "he liked the ribbon with the bell.",
        c: "the ribbon was nice and pink.",
      },
      correctAnswer: "b"
    },
    {
      question: "The mice were happy because",
      answers: {
        a: "the cat was glad.",
        b: "the ribbon was nice.",
        c: "the cat was going to wear the ribbon with the bell.",
      },
      correctAnswer: "c"
    },
    

  
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

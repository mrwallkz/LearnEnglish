
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
      question: "In Great Britain boys and girls begin to go to school when they are six.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "English schools work five days a week.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "On Saturdays and Sundays pupils have only one lesson at school.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "There no primary schools in Great Britain.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Children go to primary schools till they are 12.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },




     {
      question: "In Great Britain there are",
      answers: {
        a: "no primary schools.",
        b: "primary and secondary schools.",
        c: "only primary school.",
      },
      correctAnswer: "b"
    },
    {
      question: "English children begin to go to a secondary school",
      answers: {
        a: "when they are 11 or 12.",
        b: "when they are 9 or 10.",
        c: "when they are 5 or 6.",
      },
      correctAnswer: "a"
    },
    {
      question: "In Britain there are secondary schools",
      answers: {
        a: "only for boys.",
        b: "only for girls.",
        c: "for boys and girls, only for boys, only for girls.",
      },
      correctAnswer: "c"
    },
    {
      question: "Some schools prepare pupils",
      answers: {
        a: "for sports and work.",
        b: "for work and university.",
        c: "for university.",
      },
      correctAnswer: "b"
    },
    {
      question: "All  schoolchildren wear",
      answers: {
        a: "dark grey uniforms.",
        b: "blouses and skirts.",
        c: "uniforms at schools.",
      },
      correctAnswer: "c"
    },
    

  
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

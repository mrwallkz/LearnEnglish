
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
      question: "They are the pupils of the Green School. ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "They like to go to school.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Her name is Tamara",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "They like Christmas..",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "His name is Peter.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "His name is Tom.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },






     {
      question: "They can …",
      answers: {
        a: "read, write and count",
        b: "speak, write and count",
        c: "speak, read and write",
        d: "speak, jump and count",
      },
      correctAnswer: "a"
    },
    {
      question: "What have they got?",
      answers: {
        a: "pen;",
        b: "pencil",
        c: "Christmas tree",
        d: "book.",
      },
      correctAnswer: "c"
    },

    {
      question: "They are the pupils of the …",
      answers: {
         a: "Green School",
        b: "White School",
        c: "college ",
        d: "institute",
      },
      correctAnswer: "a"
    },
    {
      question: "Mary would like to have…",
      answers: {
        a: "to a cat;",
        b: "a new doll",
        c: "a rabbit",
        d: "a dog.",
      },
      correctAnswer: "b"
    },
    {
      question: "They like to go …",
      answers: {
        a: "to school;",
        b: "to the park;",
        c: "home;",
        d: "to the shop.",
      },
      correctAnswer: "a"
    },

    {
      question: "Jane would like to have …",
      answers: {
        a: "books",
        b: "a doll",
        c: "a nice hat and a funny toy",
        d: "a new dress",
      },
      correctAnswer: "c"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

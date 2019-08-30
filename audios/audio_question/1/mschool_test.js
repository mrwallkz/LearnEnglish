
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
      question: "Ivan goes to school five days a week.  ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Children do sums and count at Sport lessons.  ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Taras’s favourite lessons are Reading and Ukrainian.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Ivan doesn’t like Sport.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "On Saturday and Sunday children don’t go to school.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Ivan’s favourite days are Monday and Friday.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },






     {
      question: "Children go to school… ",
      answers: {
        a: "four days a week",
        b: "five days a week",
        c: "three days a week",
      },
      correctAnswer: "b"
    },
    {
      question: "At Maths lessons children...",
      answers: {
        a: "do sums and count",
        b: "jump and play games",
        c: "speak English",
      },
      correctAnswer: "a"
    },

    {
      question: "Ivan and his friend Taras... ",
      answers: {
        a: "don’t like playing games",
        b: "don’t like singing songs",
        c: "don’t like doing sums and counting",
      },
      correctAnswer: "c"
    },
    {
      question: "Ivan’s favourite lessons are… ",
      answers: {
        a: "Music",
        b: "English",
        c: "Ukrainian",
      },
      correctAnswer: "b"
    },
    {
      question: "Taras’s favourite lessons are... ",
      answers: {
        a: "English and Maths",
        b: "Sport and Music",
        c: "Reading and Art",
      },
      correctAnswer: "b"
    },

    {
      question: "Taras doesn’t like...  ",
      answers: {
        a: "Art",
        b: "Sport",
        c: "English",
      },
      correctAnswer: "a"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

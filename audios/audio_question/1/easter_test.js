
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
      question: "Easter is in summer.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "We can see many beautiful yellow daffodils in spring.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Easter starts on Friday in Britain.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "People give children wood eggs for Easter.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Children can eat eggs on Easter Sunday.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "In Ukraine people make Easter cakes and paint eggs.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },






     {
      question: "Easter is in",
      answers: {
        a: "spring",
        b: "summer",
        c: "winter",
      },
      correctAnswer: "a"
    },
    {
      question: " Daffodils are",
      answers: {
        a: "red",
        b: "brown",
        c: "yellow",
      },
      correctAnswer: "c"
    },

    {
      question: "In Britain Easter starts",
      answers: {
        a: "on Friday",
        b: "on Sunday",
        c: "on Saturday",
      },
      correctAnswer: "a"
    },
    {
      question: "People often eat",
      answers: {
        a: "bread",
        b: "hot-cross buns",
        c: "sandwiches",
      },
      correctAnswer: "b"
    },
    {
      question: "Children can eat eggs",
      answers: {
        a: "on Monday",
        b: "on Friday",
        c: "on Easter Sunday",
      },
      correctAnswer: "c"
    },

    {
      question: "On Easter Sunday people go",
      answers: {
        a: "to school",
        b: "to church",
        c: "to work",
      },
      correctAnswer: "b"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

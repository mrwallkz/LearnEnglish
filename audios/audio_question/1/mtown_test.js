
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
      question: "Nick  livеs in a city. ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Our town is not very big.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "On  Mondays there are a lot of people and cars in the streets",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The people of our town do the shopping. ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "In spring and summer there are a lot of grannies and little children in our \"Children's Park\".",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "This park is the best place for  people.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },






     {
      question: "Nick livеs …",
      answers: {
        a: "in a city",
        b: "in a village",
        c: "in a small town",
        d: "in London",
      },
      correctAnswer: "c"
    },
    {
      question: "Our town is…",
      answers: {
        a: "not very big ",
        b: "very big ",
        c: "big",
        d: "nice",
      },
      correctAnswer: "a"
    },

    {
      question: "There is… across the river ",
      answers: {
        a: "a bridge",
        b: "a park",
        c: "a tunnel",
        d: "a museum ",
      },
      correctAnswer: "a"
    },
    {
      question: " …there are a lot of people and cars in the streets",
      answers: {
        a: "On Tuesdays",
        b: "On Saturdays and Sundays",
        c: "On Fridays",
        d: "On Sundays",
      },
      correctAnswer: "b"
    },
    {
      question: "In summer yellow and very beautiful ",
      answers: {
        a: "a yard",
        b: "a garden ",
        c: "a field",
        d: "a street ",
      },
      correctAnswer: "c"
    },

    {
      question: "Some houses in our town are …",
      answers: {
        a: "small",
        b: "large",
        c: "big",
        d: "big and tall",
      },
      correctAnswer: "d"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();


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
      question: "The word “diet” originally meant “things that people usually eat”.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "William the Conqueror stayed in bed and drank alcohol instead eating food to try and lose weight.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Sailors started to spend many years at the sea.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Wilbur Atwater introduced a new measurement for the “heat value” of food.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "There are three main diets in the world.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Diets help people put on weight.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },






     {
      question: "The word “diet” originally meant...",
      answers: {
        a: "“things that people usually eat”",
        b: "“things that people don’t like to eat” ",
        c: "“things that make people strong”",

      },
      correctAnswer: "a"
    },
    {
      question: "William the Conqueror used a diet",
      answers: {
        a: "to be fit  ",
        b: "to be healthy",
        c: "to lose weight",
  
      },
      correctAnswer: "c"
    },

    {
      question: "What did he do? ",
      answers: {
        a: "He drank a lot of pure water.",
        b: "He drank wine instead water.",
        c: "He drank alcohol instead of eating food",
   
      },
      correctAnswer: "c"
    },
    {
      question: "People became to understand better what our bodies need thanks to...",
      answers: {
        a: "William the Conqueror    ",
        b: "long sea voyages",
        c: "alcohol",
   
      },
      correctAnswer: "a"
    },
    {
      question: "Wilbur Atwater lived ...",
      answers: {
        a: "in the 19th century     ",
        b: "at the beginning of the 18th century     ",
        c: "in the 20th century",
 
      },
      correctAnswer: "a"
    },

    {
      question: "Extreme weather can be caused by ...",
      answers: {
        a: "fats, minerals, vitamins",
        b: "fats, proteins, carbohydrates",
        c: "fats, proteins, vitamins",
    
      },
      correctAnswer: "b"
    },
 
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

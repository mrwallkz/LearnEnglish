
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
    `
      <div class="result_div">
         <span class="result_text">Result:  <span style ="result_count">${numCorrect}</span> <span class="result_count1">/</span> <span  style ="result_count">${myQuestions.length}</span> </span>
      </div>`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const subButton = document.getElementById("sub");
  const myQuestions = [
     {
      question: "There are many tasty things in a cafe.  ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "For breakfast there are different salads, meat or chicken, fish and soup.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "For dinner there are always different sandwiches and cheese, hamburgers and eggs.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Once Bill, Kate and their mother go to the cafe.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Bill would like a vegetable salad and some meat.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Kate would like some soup and salad.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },






     {
      question: "Bill, Kate and their mother like to have a meal",
      answers: {
        a: "in a restaurant",
        b: "in a cafe",
        c: "at home",
      },
      correctAnswer: "b"
    },
    {
      question: "For breakfast there are",
      answers: {
        a: "different hamburgers and eggs, sausages, toast and jam",
        b: "meat or chicken, fish and chips",
        c: "different salads and soup",
      },
      correctAnswer: "a"
    },

    {
      question: "For dinner there are always",
      answers: {
        a: "different sandwiches and cheese, hamburgers and eggs",
        b: "different salads, meat or chicken, fish and chips, and soup",
        c: "tasty cakes and sweets",
      },
      correctAnswer: "b"
    },
    {
      question: "Bill would like",
      answers: {
        a: "a fruit salad and orange juice",
        b: "some chicken and banana yoghurt",
        c: "a vegetable salad and some meat",
      },
      correctAnswer: "c"
    },
    {
      question: "Kate would like",
      answers: {
        a: "some chicken and banana yoghurt",
        b: "some soup",
        c: "some meat and cheese",
      },
      correctAnswer: "a"
    },

    {
      question: "In the cafe there isn’t",
      answers: {
        a: "any cola",
        b: "any orange juice",
        c: "any apple juice",
      },
      correctAnswer: "b"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

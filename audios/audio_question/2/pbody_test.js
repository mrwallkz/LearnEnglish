
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
      question: "Most people thought Zellweger was the wrong person for the part of Bridget Jones.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Zellweger was unsure about talking part of Bridget.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "She learnt to speak like an English person.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "She ate a lot and exercised a lot.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "She put on weight to feel like Bridget Jones.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "She earned $ 2.5 million for every kilo she put on.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },






     {
      question: "Most people were ... when Renee got the role of Bridget.",
      answers: {
        a: "surprised",
        b: "happy",
        c: "upset",
      },
      correctAnswer: "a"
    },
    {
      question: "She often felt quite ... while eating fattening food.",
      answers: {
        a: "unsure",
        b: "happy",
        c: "sick",
      },
      correctAnswer: "c"
    },

    {
      question: "The article tells us that Renee…",
      answers: {
        a: "is only interested in money and fame",
        b: "doesn’t have a very successful career",
        c: "is not afraid to change if it’s necessary for the role",
      },
      correctAnswer: "a"
    },
    {
      question: "Why did she gain some kilos?",
      answers: {
        a: "the only reason was money",
        b: "she thought it was important for the role",
        c: "she wanted to show everyone that it’s easy to lose all the weight afterwards",
      },
      correctAnswer: "a"
    },
    {
      question: "What was people’s reaction for Renee’s weight changes?",
      answers: {
        a: "People criticized her for being fat or too skinny  ",
        b: "People were envious that she put on some weight so easily",
        c: "They felt sorry for her",
      
      },
      correctAnswer: "a"
    },

    {
      question: "How many carrots did the goat eat? He ate",
      answers: {
        a: "watched TV all the time",
        b: "didn’t eat at all",
        c: "she ate a lot of pizza, peanut butter sandwiches and chocolate",
     
      },
      correctAnswer: "c"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

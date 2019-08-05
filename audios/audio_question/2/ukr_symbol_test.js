
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
      question: "The national flag of Ukraine consists of two horizontal stripes..",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "The top is yellow and bottom is blue",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "The anthem of Ukraine wrote in 1865.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Ukraine became an independent state in 1992.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The trident is an ancient symbol of Ukrainian people.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "The anthem of Ukraine is “Sche ne vmerla Ukrainy…”",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },






     {
      question: "The colour of Ukrainian flag is…",
      answers: {
        a: "blue and yellow",
        b: "green and blue",
        c: "brown and white",
      
      },
      correctAnswer: "a"
    },
    {
      question: "Ukraine became an independent state in…",
      answers: {
        a: "1994",
        b: "1999",
        c: "1991",
      
      },
      correctAnswer: "c"
    },

    {
      question: "Who wrote the words to the anthem of Ukraine? ",
      answers: {
        a: "Pavlo Chubynskyi",
        b: "Mykola Lysenko",
        c: "Mykhailo Verbutskyi",
     
      },
      correctAnswer: "a"
    },
    {
      question: "Who wrote the music to the anthem of Ukraine?",
      answers: {
        a: "Mykola Lysenko",
        b: "Mykhailo Verbutskyi",
        c: "Pavlo Chubynskyi",
      
      },
      correctAnswer: "b"
    },
    {
      question: "The anthem of Ukraine wrote in…",
      answers: {
        a: "1863",
        b: "1864",
        c: "1865",
     
      },
      correctAnswer: "a"
    },

    {
      question: "The national flag of Ukraine consists of…",
      answers: {
        a: "two horizontal stripes",
        b: "four horizontal stripes",
        c: "five horizontal stripes",
      
      },
      correctAnswer: "a"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

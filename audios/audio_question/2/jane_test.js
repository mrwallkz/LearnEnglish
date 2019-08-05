
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
      question: "A man took my things.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The teacher took me into a short room.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Girls sat on chairs. It was very cold in the room",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "We didn’t go into the windy garden.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The water in the washroom wasn’t warm.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "For dinner we had some bad meat and potatoes.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },






     {
      question: "The room was with many…",
      answers: {
        a: "chairs",
        b: "windows",
        c: "tables",
       
      },
      correctAnswer: "c"
    },
    {
      question: "The girls were dressed in…",
      answers: {
        a: "uniforms",
        b: "dresses ",
        c: "skirts and blouses",
        
      },
      correctAnswer: "a"
    },

    {
      question: "We had a piece of bread …",
      answers: {
        a: "for supper",
        b: "for dinner",
        c: "for lunch",
      },
      correctAnswer: "a"
    },
    {
      question: "We read…",
      answers: {
        a: "the Bible",
        b: "the text",
        c: "the book",
      },
      correctAnswer: "a"
    },
    {
      question: "In May school wasn’t…",
      answers: {
        a: "a sad place",
        b: "a hospital",
        c: "a happy place",
      },
      correctAnswer: "c"
    },

    {
      question: "How many carrots did the goat eat? He ate",
      answers: {
        a: "feel fine",
        b: "go home",
        c: "go from the school to die",
      },
      correctAnswer: "a"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

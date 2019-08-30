
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
      question: "This text is about...",
      answers: {
        a: "Christmas presents",
        b: "Father Christmas",
        c: "Christmas celebrations",
        d: "the Christmas tree",
      },
      correctAnswer: "c"
    },
    {
      question: "When Christmas comes, the children are given presents... ",
      answers: {
        a: "at the Christmas table",
        b: "in the streets",
        c: "at schools",
        d: "at home",
      },
      correctAnswer: "d"
    },
     {
      question: "Which sentence is wrong?",
      answers: {
        a: "Christmas is a family holiday",
        b: "Presents are usually given at Christmas",
        c: "At Christmas, children usually don't go to sleep",
        d: "Children find their presents near their beds, under the Christmas tree or in a stocking.",
      },
      correctAnswer: "c"
    },
    {
      question: "Choose a title",
      answers: {
        a: "British Children",
        b: "British Christmas",
        c: "Christmas parties",
        d: "British Homes",
      },
      correctAnswer: "b"
    },
    {
      question: "Find the word which is not in the text",
      answers: {
        a: "Christmas",
        b: "Presents",
        c: "Easter ",
        d: "Eve",
      },
      correctAnswer: "c"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

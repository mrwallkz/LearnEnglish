
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
      question: "It was winter.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "A rabbit went to the forest.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "He ate 4 carrots.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The goat saw the carrots on the table.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "He went to the fox’s house.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "The rabbit saw the book on the table.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },






     {
      question: "Why did rabbit have nothing to eat?",
      answers: {
        a: "it was late",
        b: "it was winter",
        c: "he was lazy",
        d: "he was fool",
      },
      correctAnswer: "b"
    },
    {
      question: "Where did he do to get something to eat? He went to…",
      answers: {
        a: "the shop",
        b: "the wood",
        c: "the field",
        d: "the river",
      },
      correctAnswer: "c"
    },

    {
      question: "How many carrots did the rabbit eat? He ate…",
      answers: {
        a: "two carrots",
        b: "four carrots",
        c: "one carrot",
        d: "six carrots",
      },
      correctAnswer: "a"
    },
    {
      question: "Whom did he bring the other carrots? ",
      answers: {
        a: "fox",
        b: "rabbit",
        c: "goat",
        d: "pig",
      },
      correctAnswer: "c"
    },
    {
      question: "What did the goat think about his friend? He thought",
      answers: {
        a: "what a bad friend I have",
        b: "what a crazy friend I have",
        c: "what a strong friend I have",
        d: "what a good friend I have",
      },
      correctAnswer: "d"
    },

    {
      question: "How many carrots did the goat eat? He ate",
      answers: {
        a: "two carrots",
        b: "one carrot",
        c: "three carrots",
        d: "four carrots",
      },
      correctAnswer: "b"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

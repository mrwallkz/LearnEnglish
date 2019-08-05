
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
      question: "Generally speaking, the British are rude.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Most British people have their own homes.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "British people still like hunting pets.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The British are closely connected to their tradition.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "The British are often very open and spontaneous people.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "British people still love hunting of foxes and hares.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },





     {
      question: "The British are often viewed as ...",
      answers: {
        a: "the most talkative and amiable people in the world",
        b: "the most boring people in the world",
        c: "the most absent – minded people in the world",
      
      },
      correctAnswer: "b"
    },
    {
      question: "They have ... which is not understood by the foreigners",
      answers: {
        a: "a specific sense of humour",
        b: "a specific style in fashion",
        c: "their private life",
       
      },
      correctAnswer: "a"
    },

    {
      question: "Talking to other people they always discuss ...",
      answers: {
        a: "their family matters",
        b: "the weather or some general questions",
        c: "their private life",
       
      },
      correctAnswer: "b"
    },
    {
      question: "The British always queue when they are ... ",
      answers: {
        a: "waiting for a bus",
        b: "shopping",
        c: "taking books from a library",
       
      },
      correctAnswer: "a"
    },
    {
      question: "The clothes the British wear are usually",
      answers: {
        a: "useless",
        b: "specific",
        c: "unimaginatively formal",
      
      },
      correctAnswer: "c"
    },

    {
      question: "If you have a British friend, this is ",
      answers: {
        a: "a friend for life",
        b: "a hooligan and vandal",
        c: "a reserved person",
       
      },
      correctAnswer: "a"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

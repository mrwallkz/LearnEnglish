
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
      question: "Once upon a time there lived…",
      answers: {
       a: "two cats",
        b: "three mice",
        c: "two dogs",
        d: "two mice",
      },
      correctAnswer: "d"
    },
    {
      question: "One of them lived…",
      answers: {
        a: "in a big village",
        b: "in a small city",
        c: "in a big city",
        d: "in a small village",
      },
      correctAnswer: "c"
    },
     {
      question: "One day Maggy decided to visit…",
      answers: {
        a: "her mother",
        b: "her friend",
        c: "her teacher",
        d: "her sister",
      },
      correctAnswer: "b"
    },
    {
      question: " She went to the city…",
      answers: {
      a: "by train",
        b: "by plain",
        c: "by car",
        d: "by ship",
      },
      correctAnswer: "a"
    },
    {
      question: "Maggy got to Minni’s house…",
      answers: {
        a: "by car",
        b: "by trolley-bus",
        c: "by tram",
        d: "by bus",
      },
      correctAnswer: "d"
    },
     {
      question: "Minny said it was nice to live…",
      answers: {
        a: "in the village",
        b: "in the house",
        c: "in the flat",
        d: "in the city",
      },
      correctAnswer: "d"
    },






     {
      question: "There was…",
      answers: {
        a: "a little black cat in the house",
        b: "a big black dog in the house",
        c: "a big black cat in the house",
        d: "a big white cat in the house",
      },
      correctAnswer: "c"
    },
    {
      question: "They decided to buy…",
      answers: {
        a: "a radio-set",
        b: "an arm-chair",
        c: "a TV-set",
        d: "a sofa",
      },
      correctAnswer: "c"
    },

    {
      question: "They went…",
      answers: {
        a: "to the shop",
        b: "to the hospital",
        c: "to school",
        d: "to the library",
      },
      correctAnswer: "a"
    },
    {
      question: "Who likes to watch TV?",
      answers: {
        a: "the cat",
        b: "the dog",
        c: "the fox",
        d: "the goat",
      },
      correctAnswer: "a"
    },
    {
      question: "The cat sat down to watch TV…",
      answers: {
        a: "in the evening",
        b: "in the morning",
        c: "in the afternoon",
        d: "every day",
      },
      correctAnswer: "d"
    },

    {
      question: "The mice came to the kitchen to eat…",
      answers: {
       a: "sausage and bread;",
        b: "corn and cheese",
        c: "fruit and vegetables",
        d: "ice-cream",
      },
      correctAnswer: "d"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

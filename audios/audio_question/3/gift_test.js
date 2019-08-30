
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
      question: "Miss McCarty spent more than 65 years washing and ironing clothes.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Miss McCarty had much money.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Once Miss McCarty visited the White House.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "In 1967 her uncle died and left her a modest house in which she still lives.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "She was afraid to fly.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Miss McCarty's generosity inspired many to give money to poor people.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },





     {
      question: "How old was Miss McCarty?",
      answers: {
        a: "65",
        b: "55",
        c: "more than 75",
        d: "60",
      },
      correctAnswer: "c"
    },
    {
      question: "What was her job?",
      answers: {
        a: "she made laundry for other people",
        b: "she ironed the clothes of other people",
        c: "she fixed the other people's clothes",
        d: "she washed and ironed the other people's clothes",
      },
      correctAnswer: "d"
    },

    {
      question: "People of how many generations were the clients of Oscola?",
      answers: {
        a: "one",
        b: "two",
        c: "three",
        d: "four",
      },
      correctAnswer: "c"
    },
    {
      question: "What did her mother leave her? ",
      answers: {
        a: "her house",
        b: "her work",
        c: "her money",
        d: "her clothes",
      },
      correctAnswer: "c"
    },
    {
      question: "Miss McCarty's generosity inspired many to give money to … ",
      answers: {
        a: "the university",
        b: "poor people",
        c: "her friends",
        d: "students",
      },
      correctAnswer: "a"
    },

    {
      question: "McCarty … and lived not a rich life.",
      answers: {
        a: "washed and ironed  ",
        b: "played and ironed",
        c: "cleaned and ironed",
        d: "washed and cooked",
      },
      correctAnswer: "a"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

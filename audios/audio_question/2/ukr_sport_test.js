
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
      question: "The main sports in Ukraine are: football, basketball and volleyball.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Playing golf is very popular in our country too.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "There are swimming pools in every school in Ukraine.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Ukrainian sportsmen took part in the Olympic Games.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Three brothers Klychko are the best boxers in the world.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },






     {
      question: "Sport is very popular in:",
      answers: {
        a: "Ukraine.",
        b: "Moldova",
        c: "USA",
      
      },
      correctAnswer: "a"
    },
    {
      question: "Playing … are very popular in our country",
      answers: {
        a: "football, volleyball",
        b: "tennis, running",
        c: "tennis, swimming",
      
      },
      correctAnswer: "c"
    },

    {
      question: "Among the best sportsmen at the Olympic Games was …",
      answers: {
        a: "Vitalii Klychko",
        b: "Yana Klochkova",
        c: "Lilia Podkopaieva",
     
      },
      correctAnswer: "b"
    },
    {
      question: "She won two gold and three silver medals in …",
      answers: {
        a: "England",
        b: "Ukraine",
        c: "Australia",
      
      },
      correctAnswer: "c"
    },
    {
      question: "We go in for different kinds of sports after …",
      answers: {
        a: "supper",
        b: "classes",
        c: "dinner",
     
      },
      correctAnswer: "b"
    },
 {
      question: "The main sports in Ukraine are …",
      answers: {
        a: "football, tennis, running",
        b: "basketball, tennis, football",
        c: "football, volleyball and basketball",
     
      },
      correctAnswer: "c"
    },
    {
      question: "The two brothers Klychko are the best …",
      answers: {
        a: "football players",
        b: "boxers",
        c: "hockey players ",
      
      },
      correctAnswer: "b"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

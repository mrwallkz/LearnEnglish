
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
      question: "Where were the Americans having dinner one day?",
      answers: {
        a: "on board ship",
        b: "at the hotel",
        c: "at a party",
        d: "in a cafe  ",
      },
      correctAnswer: "b"
    },
    {
      question: "What did the young man hope to find in the fish?",
      answers: {
        a: "a watch",
        b: "a ring",
        c: "some money",
        d: "a diamond",
      },
      correctAnswer: "d"
    },

    {
      question: "Where was the young man sent to work?",
      answers: {
        a: "to England",
        b: "to London",
        c: "to New York",
        d: "to Canada",
      },
      correctAnswer: "a"
    },
    {
      question: "When had the young people decided to marry?",
      answers: {
        a: "when he returned home",
        b: "during the journey",
        c: "before he left home",
        d: "on the way back home",
      },
      correctAnswer: "a"
    },
    {
      question: "What did the young man buy for his girl?",
      answers: {
        a: "a beautiful dress",
        b: "a fur coat",
        c: "a gold watch",
        d: "a diamond ring",
      },
      correctAnswer: "d"
    },

    {
      question: "Why didn’t the girl answer his letters?",
      answers: {
        a: "she was very ill",
        b: "she wanted to join him",
        c: "she wanted to marry another man",
        d: "she was angry with him",
      },
      correctAnswer: "c"
    },






     {
      question: "How did the young man react to his friend’s news?",
      answers: {
        a: "he was very happy",
        b: "he was very lonely",
        c: "he was very angry",
        d: "he was very unhappy",
      },
      correctAnswer: "c"
    },
    {
      question: "What did the young man do with the present?",
      answers: {
        a: "he gave it to another girl",
        b: "he threw into the sea",
        c: "he sold it",
        d: "he lost it in the street",
      },
      correctAnswer: "b"
    },

    {
      question: "What did the friends have for dinner when they met again?",
      answers: {
        a: "they had soup",
        b: "they had pudding",
        c: "they had meat",
        d: "they had fish",
      },
      correctAnswer: "d"
    },
    {
      question: "What did the young man feel hard in his mouth?",
      answers: {
        a: "a fruit stone",
        b: "a fish bone ",
        c: "an egg shell",
        d: "a diamond ring",
      },
      correctAnswer: "b"
    },
    {
      question: "Who came to the port to meet him?",
      answers: {
        a: "my father",
        b: "my friend",
        c: "my sister",
        d: "my relatives",
      },
      correctAnswer: "b"
    },

    {
      question: "Who was having dinner at a hotel in London?",
      answers: {
        a: "some Englishmen",
        b: "some people",
        c: "some Americans",
        d: "some women",
      },
      correctAnswer: "c"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

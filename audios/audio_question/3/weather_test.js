
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
      question: "The British always talk about the weather because they cannot get accustomed to it.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Extreme weather is a problem because we can’t predict it.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Extreme weather is often very destructive.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Devastating droughts are more frequent in the Western part of the world.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Natural processes as well as human activity make weather conditions become extreme.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Most important weather cycles come from the Pacific Ocean.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "The temperature of the ocean depends on the human activity.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Greenhouse gases produce heat in the Earth’s atmosphere.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The amount of water vapour in the atmosphere has recently decreased by 25 percent.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "According to Michael Oppenheimer we can stop climate change.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },






     {
      question: "Extreme weather is ...",
      answers: {
        a: "not a natural occurrence.",
        b: "difficult for scientists to understand.",
        c: "more unusual in the USA.",
        d: "becoming more common.",
      },
      correctAnswer: "d"
    },
    {
      question: "Examples of extreme weather include ...",
      answers: {
        a: "warm, wet air. ",
        b: "very hot weather in Europe. ",
        c: "changeable weather in the British Isles",
        d: "El Niño and La Niña.",
      },
      correctAnswer: "b"
    },

    {
      question: "In 2010 abnormal rainfall was not registered in:",
      answers: {
        a: "Australia",
        b: "Brazil",
        c: "the USA",
        d: "Pakistan",
      },
      correctAnswer: "a"
    },
    {
      question: "Why was the rain in Nashville an extreme event? ",
      answers: {
        a: "It happened a thousand years ago. ",
        b: "A lot of rain fell over a long time period. ",
        c: "It doesn’t usually rain in Nashville.",
        d: "A lot of rain fell in a short time.",
      },
      correctAnswer: "d"
    },
    {
      question: "What didn’t happen after the extreme rain in Rio de Janeiro?",
      answers: {
        a: "There were major floods.",
        b: "There were many landslides.",
        c: "Millions of people were affected.",
        d: "Hundreds of people were buried alive",
      },
      correctAnswer: "c"
    },

    {
      question: "Extreme weather can be caused by ...",
      answers: {
        a: "floods across large areas. ",
        b: "satellites above the Earth.",
        c: "water vapour in the atmosphere.",
        d: "very hot summers.",
      },
      correctAnswer: "c"
    },
    {
      question: "What caused many deaths in 2003?",
      answers: {
        a: "extreme rainfall",
        b: "a period of hot weather",
        c: "floods that followed a bad summer",
        d: "a typhoon",
      },
      correctAnswer: "b"
    },
    {
      question: "Which of these things is the basis of normal weather patterns?",
      answers: {
        a: "El Niño and La Niña",
        b: "greenhouse gases",
        c: "human activity",
        d: "heat waves",
      },
      correctAnswer: "a"
    },
    {
      question: "What is happening to the oceans? ",
      answers: {
        a: "They are getting bigger. ",
        b: "They are getting smaller.",
        c: "They are getting hotter",
        d: "They are producing greenhouse gases. ",
      },
      correctAnswer: "c"
    },
    {
      question: "Satellites can ...",
      answers: {
        a: "tell the amount of water vapour in the air.",
        b: "measure the temperature of the Pacific Ocean. ",
        c: "count the number of hurricanes. ",
        d: "trap greenhouse gases in the atmosphere.",
      },
      correctAnswer: "a"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

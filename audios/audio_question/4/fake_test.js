
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
      question: "Everything we read online can be trusted.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Wikipedia can reference newspaper articles which include false information copied from Wikipedia.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "A 17-year-old American student was doing research in Brazil when he spotted what he believed to be an aardvark.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "People do not copy and paste vandalised Wikipedia pages.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "All information on Wikipedia is false.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Wikipedia is considered by many to be fair and impartial.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Information on ‘Brazilian aardvark’ had catastrophic consequences.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "An increase in the number of children suffering from measles is related to unsupported claims published in a prestigious medical publication by a British surgeon.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "The link between vaccines and autism is no longer recognized by anyone.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Critical thinking can help us avoid using false information found online.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },






     {
      question: "What makes the spread of false information so easy?",
      answers: {
        a: "independent sources",
        b: "technology",
        c: "Wikipedia",
        d: "printed media",
      },
      correctAnswer: "b"
    },
    {
      question: "Which statement about circular reporting is true?",
      answers: {
        a: "It is the spread of true information. ",
        b: "It is when false information is validated by one other source only.",
        c: "It only occurs with information on Wikipedia.",
        d: "It may involve several publications. ",
      },
      correctAnswer: "d"
    },

    {
      question: "How can false information be validated?",
      answers: {
        a: "When it is published on Wikipedia.",
        b: "When it is reported on television.",
        c: "When it is referenced in a newspaper article or other publication.",
        d: "When it is posted on Facebook.",
      },
      correctAnswer: "c"
    },
    {
      question: "Which statement is true about journalists?",
      answers: {
        a: "They are not permitted to copy information from Wikipedia.",
        b: "They refuse to copy information from Wikipedia.",
        c: "As soon as they include information in an article, they verify the information.",
        d: "Many journalists may publish inaccuracies in several articles.",
      },
      correctAnswer: "d"
    },
    {
      question: "Which statement is correct?",
      answers: {
        a: "Another name for a coati is a Brazilian aardvark.",
        b: "The American student changed the information on Wikipedia to what he believed to be the truth.",
        c: "Many people believed that a Brazilian aardvark was the same as a coati.",
        d: "When writers wrote about the Brazilian aardvark they knew it was a joke.",
      },
      correctAnswer: "c"
    },

    {
      question: "Which statement is true about Wikipedia?",
      answers: {
        a: "Some people add false content to a Wikipedia entry intentionally.",
        b: "Updating information on Wikipedia is against the law.",
        c: "There is hardly any true information on Wikipedia.",
        d: "Many true facts on Wikipedia initially appear as false information.",
      },
      correctAnswer: "a"
    },
    {
      question: "What is true about childhood vaccines and autism?",
      answers: {
        a: "There is a clear connection between childhood vaccines and autism",
        b: "Circular reporting incited many parents not to vaccinate their children.",
        c: "The claims that they were connected first appeared on Wikipedia.",
        d: "The media proved early on that the claims about vaccines and autism were false.",
      },
      correctAnswer: "b"
    },
    {
      question: "According to the article, what can we do to make sure that what we are reading is true?",
      answers: {
        a: "never use Wikipedia.",
        b: "check the original source of information.",
        c: "use unbiased encyclopaedias only.",
        d: "always take things at face value.",
      },
      correctAnswer: "b"
    },
    {
      question: "Which statement is correct?",
      answers: {
        a: "Generally speaking, it’s easy to identify false information.",
        b: "If the original source is Wikipedia or the media, the information is almost always false.",
        c: "Reflecting critically on what we read is something most people often do.",
        d: "Lack of time to think and investigate can cause us to believe things that aren’t true.",
      },
      correctAnswer: "d"
    },
    {
      question: " What does the author of the article try to urge upon its readers?",
      answers: {
        a: "to stay away from Wikipedia, Facebook and other media.",
        b: "to change Wikipedia entries as we see fit.",
        c: "not to take things at face value and really take the time to think critically about them.",
        d: "never to reference or quote articles.",
      },
      correctAnswer: "c"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults)
})();

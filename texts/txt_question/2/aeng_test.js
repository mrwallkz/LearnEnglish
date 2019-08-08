
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
      question: "The passage mainly discusses",
      answers: {
        a: "Noah Webster's literary heritage",
        b: "the varieties of spelling",
        c: "Webster's political preferences",
        d: "popular schoolbooks in America",
      },
      correctAnswer: "b"
    },
    {
      question: "The passage implies that written British and American words",
      answers: {
        a: "look absolutely different",
        b: "are absolutely the same",
        c: "may differ",
        d: "come from Canada",
      },
      correctAnswer: "c"
    },
     {
      question: "It may be inferred from the passage that Webster's scientific interest was in",
      answers: {
        a: "standards",
        b: "vocabulary",
        c: "editing books",
        d: "political reforms",
      },
      correctAnswer: "b"
    },
    {
      question: "The changes between American and British English were generated",
      answers: {
        a: "on purpose",
        b: "by accident",
        c: "in Canada",
        d: "by politicians",
      },
      correctAnswer: "a"
    },
    {
      question: "The word \"subsequent\" in line 4 may most probably mean the following",
      answers: {
        a: "different",
        b: "expensive",
        c: "following",
        d: "literary",
      },
      correctAnswer: "c"
    },
    {
      question: "One can make a conclusion that Webster's changes",
      answers: {
        a: "simplified the language",
        b: "were of no importance",
        c: "made the language more difficult for understanding",
        d: "developed the language used in Great Britain",
      },
      correctAnswer: "a"
    },
    {
      question: "The word \"mirrored\" in middle of text in meaning to",
      answers: {
        a: "portrayed",
        b: "reflected",
        c: "generated",
        d: "prevented",
      },
      correctAnswer: "b"
    },
    {
      question: "It can be seen from the passage that the changes brought into American  English must have",
      answers: {
        a: "developed a completely new language",
        b: "stopped using dictionaries",
        c: "required spelling books",
        d: "influenced the original British English",
      },
      correctAnswer: "d"
    },
    {
      question: "The passage states that in Canada",
      answers: {
        a: "people use the only variety of the English language",
        b: "people live only in the east and the west of the country",
        c: "there may be language misunderstanding between people from different regions of the country",
        d: "people use different grammar rules compared to the US",
      },
      correctAnswer: "c"
    },
    {
      question: "The passage implies that of the two books mentioned in it",
      answers: {
        a: "neither was published",
        b: "both were printed at the same time",
        c: "the Spelling Book was published before the Dictionary",
        d: "the Dictionary was published before the Spelling Book",
      },
      correctAnswer: "c"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

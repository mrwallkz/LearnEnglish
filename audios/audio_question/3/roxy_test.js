
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
      question: "Chloe has always liked rats.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Dad called Martin’s parents to ask about Martin’s rats.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Martin gave Chloe the rats as a Christmas present.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Chloe’s dad likes jazz.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Chloe decided to do her homework as soon as she arrived home.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Roxy and Zena are not allowed to go outside Chloe’s room.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Roxy and Zena have very different personalities.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Chloe didn’t find Roxy in the washing machine.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Dad was angry when Chloe told him that Roxy was lost.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Mum found Roxy in one of her trainers when she arrived at the gym.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },






     {
      question: "Did Chloe’s parents like her idea to have pet rats?",
      answers: {
        a: "they allowed to take them at once",
        b: "they never allowed to take them",
        c: "they allowed to take them because of Chloe’s good marks",
        d: "they allowed for a time.",
      },
      correctAnswer: "c"
    },
    {
      question: "When parents allowed Chloe to take rats, she was …",
      answers: {
        a: "disappointed",
        b: "angry",
        c: "very pleased",
        d: "satisfied",
      },
      correctAnswer: "c"
    },

    {
      question: "Roxy loved to  …",
      answers: {
        a: "search",
        b: "run",
        c: "hide",
        d: "play",
      },
      correctAnswer: "a"
    },
    {
      question: "Chloe lost Roxy when her dad ...",
      answers: {
        a: "was going to his aerobics class",
        b: "was leaving home",
        c: "was making pasta",
        d: "was going home.",
      },
      correctAnswer: "d"
    },
    {
      question: "Zena was ...",
      answers: {
        a: "full of energy",
        b: "calm",
        c: "very active",
        d: "silent",
      },
      correctAnswer: "b"
    },

    {
      question: "Who did Chloe ask to help her to find Roxy?",
      answers: {
        a: "father",
        b: "mother",
        c: "father and mother",
        d: "nobody",
      },
      correctAnswer: "a"
    },
    {
      question: "Why did Chloe lose Roxy? ",
      answers: {
        a: "she had forgotten to close the cage",
        b: "she had forgotten to close the door",
        c: "her mother had opened the door ",
        d: "her mother had opened the cage",
      },
      correctAnswer: "c"
    },
    {
      question: "When did Chloe’s mother find the rat?",
      answers: {
        a: "when she was at home ",
        b: "when she left home",
        c: "when she was at the gym",
        d: "when she left the gym.",
      },
      correctAnswer: "c"
    },
    {
      question: "Chloe’s mother liked rats when she ... for the first time.",
      answers: {
        a: "looked at Roxy",
        b: "held Roxy in her hands",
        c: "found Roxy",
        d: "put Roxy into her bag.",
      },
      correctAnswer: "b"
    },
    {
      question: "Dad told Mum about Roxy because Chloe ...",
      answers: {
        a: "forgot",
        b: "was afraid",
        c: "was at her room",
        d: "was angry",
      },
      correctAnswer: "b"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

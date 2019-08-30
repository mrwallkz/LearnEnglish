
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
      question: "What do scientists believe?",
      answers: {
        a: "Only a few people possess the shyness gene",
        b: "Shyness depends on height",
        c: "Everybody is shy",
        d: "People can learn to manage shyness",
      },
      correctAnswer: "c"
    },
    {
      question: "What happens to shy people in a stressful situation?",
      answers: {
        a: "They keep talking for a long time",
        b: "Their heart rate increases",
        c: "Their legs can no longer support them",
        d: "They start talking about difficult subjects",
      },
      correctAnswer: "b"
    },
     {
      question: "What does “this” refer to?.",
      answers: {
        a: "shyness",
        b: "recognizing others’ shyness",
        c: "blushing",
        d: "judging others",
      },
      correctAnswer: "c"
    },
    {
      question: "Why do shy people become more reserved?",
      answers: {
        a: "Their social unease makes them more difficult to talk to",
        b: "They see that others are shy too",
        c: "Other people lack the patience to talk to them",
        d: "Other people judge them",
      },
      correctAnswer: "a"
    },
    {
      question: "What do experts believe is the answer to shyness?",
      answers: {
        a: "Studying others in social situations to see how they act",
        b: "Discovering shared interests with others",
        c: "Comparing yourself to other people",
        d: "Finding out what makes other people shy",
      },
      correctAnswer: "b"
    },
    
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();


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
      question: "The text probably came from",
      answers: {
        a: "a diary written by someone from California",
        b: "a book about the Salvation Army",
        c: "a newspaper article from another city",
        d: "a magazine article about where to go in an earthquake",
      },
      correctAnswer: "c"
    },
    {
      question: "In this passage “accommodation” is another way of saying",
      answers: {
        a: "a place to live",
        b: "a new job",
        c: "food and drinks",
        d: "an automobile",
      },
      correctAnswer: "a"
    },
     {
      question: "Where is the safest place to be during an earthquake?",
      answers: {
        a: "In the bathtub",
        b: "In the basement",
        c: "Under a table",
        d: "In a doorway",
      },
      correctAnswer: "d"
    },
    {
      question: "A synonym of “debris” is",
      answers: {
        a: "dirt",
        b: "rubble",
        c: "homes",
        d: "trees",
      },
      correctAnswer: "b"
    },
    {
      question: "There were problems with the rescue effort because",
      answers: {
        a: "there weren’t many sniffer dogs to help",
        b: "rescuers did not know exactly what to do",
        c: "there weren’t enough rescuers available",
        d: "there weren’t enough cameras to find victims",
      },
      correctAnswer: "c"
    },

  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

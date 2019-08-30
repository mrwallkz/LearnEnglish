
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
      question: "A Coca-Cola bottle is the most well-known object in the world.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Pemberton was the man who really invented the drink Coca-Cola.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Like any other famous commercial logo, it has not changed in 100 years!",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "At first Coca-Cola was sold as a medicine.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Coca nuts are the source of cocaine.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Pemberton sold his secret formula to another druggist, Asa Candler, as his syrup was very successful.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "At first Coca-Cola was sold only in Candler’s drugstore.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "The Coca-Cola company had to start bottling the drink in Europe, because it was popular among European citizens.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Today, Coca-Cola is the most popular drink!",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Today's Coca-Cola is not dangerous!",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },






     {
      question: "How do people recognise a Coke bottle?",
      answers: {
        a: "by its colour",
        b: "by its logo",
        c: "by its form",
        d: "by its size",
      },
      correctAnswer: "c"
    },
    {
      question: "The inventor of Coca-Cola was John Pemberton, ...",
      answers: {
        a: "the pharmacist ",
        b: "the doctor ",
        c: "the businessman",
        d: "the philosopher ",
      },
      correctAnswer: "a"
    },

    {
      question: "At first Coca-Cola was invented as a new type of ...",
      answers: {
        a: "drink ",
        b: "medicine",
        c: "injection",
        d: "alcohol",
      },
      correctAnswer: "b"
    },
    {
      question: "What Coca-Cola ingredient was the source of cocaine?",
      answers: {
        a: "coca nuts ",
        b: "coca leaves",
        c: "cola leaves.",
        d: "cola nuts",
      },
      correctAnswer: "b"
    },
    {
      question: "Coca-Cola has its secret ...",
      answers: {
        a: "shape",
        b: "buyers",
        c: "recipe",
        d: "producers",
      },
      correctAnswer: "c"
    },

    {
      question: "Coca Cola became popular when it was mixed with ….",
      answers: {
        a: "syrup ",
        b: "water ",
        c: "black tea",
        d: "bubbling water",
      },
      correctAnswer: "d"
    },
    {
      question: "The bottle became famous, because of its very ... shape.",
      answers: {
        a: "plain",
        b: "big",
        c: "memorable",
        d: "beautiful",
      },
      correctAnswer: "c"
    },
    {
      question: "Coca-Cola was exported to Europe by ...",
      answers: {
        a: "the company ",
        b: "Pemberton",
        c: "Candler",
        d: "the soldiers",
      },
      correctAnswer: "a"
    },
    {
      question: "The exact ingredients for making Coca-Cola are only known to ...",
      answers: {
        a: "a small number of people",
        b: "a lot of people",
        c: "the inventor",
        d: "all people",
      },
      correctAnswer: "a"
    },
    {
      question: "The ingredient \"coca\" was a drug and in 1903 it was ...",
      answers: {
        a: "added",
        b: "forbidden",
        c: "forgotten",
        d: "taken out",
      },
      correctAnswer: "d"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

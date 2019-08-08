
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
      question: "The article explains how human brains work.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Scientists understand child development very well.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Early experiences affect how babies feel.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Information received through different senses connects different parts of the child’s brain.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Babies’ brains recognise different sound patterns.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Experiments focusing on language have given researchers new information.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Experiments with sound patterns show that babies understand different words.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Grammar and meaning depend on word sequencing.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Babies can learn Mandarin Chinese easily. ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Interactive experiences are important in brain development.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },






     {
      question: "The purpose of the article is to ...",
      answers: {
        a: "compare the brains of adults and children.",
        b: "compare American and Chinese babies.",
        c: "explain new studies into the development of babies’ brains.",
        d: "describe how a new-born baby’s brain works.",
      },
      correctAnswer: "c"
    },
    {
      question: "The first paragraph states all of the following except:",
      answers: {
        a: "babies’ bodies change every week.",
        b: "babies’ development is fast.",
        c: "babies learn to do something new every week.",
        d: "it is easy to understand babies thoughts.",
      },
      correctAnswer: "d"
    },

    {
      question: "According to the second paragraph ...",
      answers: {
        a: "most aspects of child development are understood quite well.",
        b: "some five-year-olds have imaginary friends.",
        c: "by the age of 5 children have a fully-developed brain.",
        d: "children use technology more these days. ",
      },
      correctAnswer: "b"
    },
    {
      question: "New technology has revealed …",
      answers: {
        a: "information about child development.",
        b: "that babies see differently from young children.",
        c: "what a new-born child’s brain looks like.",
        d: "how babies learn grammar.",
      },
      correctAnswer: "a"
    },
    {
      question: "Which statement is supported by the third paragraph?",
      answers: {
        a: "Adult brains have more neurons than new-born babies’ brains.",
        b: "Babies and three-year-olds have the same number of neurons.",
        c: "Early experiences have an effect on brain development.",
        d: "The development of language is the easiest thing to study in babies.",
      },
      correctAnswer: "c"
    },

    {
      question: "What information is given about the baby’s IQ?",
      answers: {
        a: "Attention and IQ are connected. ",
        b: "It’s difficult to change a baby’s IQ.",
        c: "Some three-year-old children have a high IQ. ",
        d: "A child’s IQ depends on the senses of sight, hearing, smell, taste and touch.",
      },
      correctAnswer: "a"
    },
    {
      question: "The listening experiment has proven that:",
      answers: {
        a: "Babies’ brains can’t recognise different sound patterns. ",
        b: "The pattern ‘A-B-B’ is easier to understand than ‘A-B-C’. ",
        c: "The pattern ‘A-B-C’ is easier to understand than ‘A-B-B’.",
        d: "It’s not known which area of a baby’s brain processes speech.",
      },
      correctAnswer: "b"
    },
    {
      question: "Experiments with sound patterns...",
      answers: {
        a: "demonstrate that babies understand different words.",
        b: "show that babies can understand Mandarin Chinese.",
        c: "suggest that sequence is relevant to meaning.",
        d: "show that babies can begin to understand grammar.",
      },
      correctAnswer: "d"
    },
    {
      question: "What did the study described in the last paragraph do?",
      answers: {
        a: "compared the effects of different languages.",
        b: "proved that word order is part of grammar.",
        c: "investigated if babies can learn Chinese.",
        d: "divided babies into two groups with different treatment.",
      },
      correctAnswer: "d"
    },
    {
      question: "What is the main conclusion from the study?",
      answers: {
        a: "Different languages have different grammar.",
        b: "Babies can understand television at the age of nine months.",
        c: "Social interaction has a big influence on the brain.",
        d: "Watching videos is a good way to develop a child’s brain.",
      },
      correctAnswer: "c"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

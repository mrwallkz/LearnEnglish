
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
      question: "When Jenny opened her eyes she saw that it was too early for her to get up.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The girl was rather annoyed that she had to get up so early.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "The sounds Jenny heard were similar to those in her dreams",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The creak of a cupboard door meant that her father was in the kitchen already.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Jenny knew in advance, what her father was going to do",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "The girl respected her father for his determination to keep to his plans. ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Her father was constantly forgetting where he had put his hat and a water bottle.___",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "When Jenny got up her father was already heading to the birch trees. ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Father’s routine put the girl into the calm state of mind. ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "As usually, Jenny’s father was the only one on that road in the country. ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },






     {
      question: "Dark winter morning",
      answers: {
        a: "tempted Jenny to wake up",
        b: "led Jenny to a wrong conclusion",
        c: "attracted Jenny immediate attention",
        d: "distracted Jenny from the clock",
      },
      correctAnswer: "b"
    },
    {
      question: "What is suggested in the second paragraph about the noise Jenny heard?",
      answers: {
        a: "She could identify from it what was happening..",
        b: "She was unsure at first where it came from.",
        c: "She was annoyed because it had disturbed her sleep.",
        d: "She wondered if it meant she might still be dreaming..",
      },
      correctAnswer: "a"
    },

    {
      question: "What does ‘that’ in the second paragraph refer to?",
      answers: {
        a: "the fact that her father had already got up",
        b: "the part of the house her father was in",
        c: "what her father was going to do next",
        d: "where her father had sat down ",
      },
      correctAnswer: "c"
    },
    {
      question: "Jenny’s father was",
      answers: {
        a: "an early riser",
        b: "a late riser",
        c: "in his early age",
        d: "in his late age",
      },
      correctAnswer: "a"
    },
    {
      question: "How did Jenny feel about her father’s behaviour?",
      answers: {
        a: "She respected the fact that he always did what he intended.",
        b: "She found it irritating that he forgot where he had put things.",
        c: "She didn’t understand why things never went wrong for him.",
        d: "She thought it might be good for him to vary his routine.",
      },
      correctAnswer: "a"
    },

    {
      question: "Jenny’s father usually began moving faster",
      answers: {
        a: "on the country lane",
        b: "round the lake",
        c: "in the woods",
        d: "on the terrace",
      },
      correctAnswer: "c"
    },
    {
      question: "The father was ",
      answers: {
        a: "always grumpy in the mornings",
        b: "angry because he couldn’t find his things",
        c: "angry because he had to go jogging",
        d: "grumpy because she didn’t help him",
      },
      correctAnswer: "b"
    },
    {
      question: "Jenny put on an old jumper because",
      answers: {
        a: "she wanted to join her father",
        b: "she wanted to give him the key",
        c: "there was rather chilly in the room",
        d: "there was nothing else to put on",
      },
      correctAnswer: "c"
    },
    {
      question: "Jenny went to the window in order to",
      answers: {
        a: "A make sure her father had everything he needed.",
        b: "see if the weather was suitable for her father to go running",
        c: "check that nothing unusual was happening outside.",
        d: "confirm that her father was keeping to his usual habits.",
      },
      correctAnswer: "d"
    },
    {
      question: "Why did Mary Surratt become significant in history?",
      answers: {
        a: "didn’t want to be seen.",
        b: "was waiting for Jenny’s father to join him.",
        c: "was on the tree.",
        d: "didn’t make any movements.",
      },
      correctAnswer: "a"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

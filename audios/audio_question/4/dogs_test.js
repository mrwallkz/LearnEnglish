
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
      question: "There is a song about a loyal dog, which died near Gundagai waiting for the owner.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Dogs must be trained to be loyal and to do several jobs.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Collie sheep dogs must be able to count sheep.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Labradors are considered to be the good guide dogs.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "There are many guide dogs in the UK, America, and Australia now because of the government’s support.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "German shepherds often participate in rescue operations.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "The best German shepherds and their trainers are registered in the international database.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Detector dogs at an airport in Australia sniff out illegal food and goods.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "Unfortunately, detector dogs are sometimes wrong.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Huskies were all withdrawn from Antarctica because of the international regulations.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },






     {
      question: "According to the author, there is a statue built to praise",
      answers: {
        a: "a working dog",
        b: "a loyal dog",
        c: "dogs’ skills",
        d: "dogs’ characters",
      },
      correctAnswer: "b"
    },
    {
      question: "Herding sheep, collie sheep dogs ",
      answers: {
        a: "work side by side with their masters",
        b: "work independently of their masters",
        c: "count sheep",
        d: "transport sheep",
      },
      correctAnswer: "a"
    },
    {
      question: "To train a guide dog to work with the blind is",
      answers: {
        a: "cheap",
        b: "free",
        c: "easy",
        d: "expensive",
      },
      correctAnswer: "d"
    },
    {
      question: "Guide dogs need to be ... to lead their blind owners",
      answers: {
        a: "confident",
        b: "calm",
        c: "faithful",
        d: "tough",
      },
      correctAnswer: "a"
    },

    {
      question: "Excellent rescue dogs must be",
      answers: {
        a: "confident and risky",
        b: "loyal and obedient ",
        c: "skillful and gentle",
        d: "strong and brave",
      },
      correctAnswer: "d"
    },
    {
      question: "Detector dogs wear ... with the words 'Quarantine' ",
      answers: {
        a: "a red board",
        b: "a blue board",
        c: "a red coat",
        d: "a blue coat",
      },
      correctAnswer: "c"
    },
    {
      question: "Good detector dogs must really ",
      answers: {
        a: "be excellent guard dogs",
        b: "have gentle nature",
        c: "like their masters",
        d: "love their food",
      },
      correctAnswer: "d"
    },
     {
      question: "In the past huskies were used as ",
      answers: {
        a: "guard dogs",
        b: "guide dogs",
        c: "exploring dogs",
        d: "means of transportation",
      },
      correctAnswer: "d"
    },
    {
      question: "Huskies take pleasure in working ",
      answers: {
        a: "with different people ",
        b: "with other dogs",
        c: "in harsh conditions",
        d: "in Antarctica",
      },
      correctAnswer: "b"
    },
    {
      question: "Some dogs earned their place in history because they ",
      answers: {
        a: "can easily adapt",
        b: "have unusual skills",
        c: "participated in expeditionsn",
        d: "worked long hours",
      },
      correctAnswer: "c"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

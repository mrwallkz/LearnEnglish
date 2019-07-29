
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
      question: "John Wilkes Booth was once wandering through the rooms of White House hearing sobs and crying as he went.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "John Wilkes Booth abandoned his original plan to kidnap President Lincoln.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
     {
      question: "Both Mary Surratt and John Wilkes Booth were Confederate sympathizers.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "John Wilkes Booth intended to hide in a tavern.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Lincoln was fully protected in his presidential box.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Booth was seen to be hurt while escaping from the theater.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "All conspirators carried out their assignments.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Secretary of State William Seward tried to run away from the attackers.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "John Wilkes Booth was fatally wounded in the neck.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
     {
      question: "Mary Surratt was pardoned when several of the jurors signed a petition with the respective request.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },




     {
      question: "What did President Lincoln's dream foretell?",
      answers: {
        a: "An unknown person's death",
        b: "The East Room of the White House",
        c: "His own death",
        d: "The death of his son",
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following was NOT true about John Wilkes Booth?",
      answers: {
        a: "He was an actor.",
        b: "He sympathized with the South.",
        c: "He did not really want to kill Lincoln.",
        d: "He believed in slavery.",
      },
      correctAnswer: "c"
    },

    {
      question: "What does the word 'nefarious' mean in the following sentence: 'To help in his nefarious plot, Booth recruited George Atzerdot to kill Johnson and David Herold and Louis Powell to kill Seward'?",
      answers: {
        a: "old",
        b: "successful",
        c: "unlikely",
        d: "evil",
      },
      correctAnswer: "d"
    },
    {
      question: "Why was David Herold needed in Booth's Plan?",
      answers: {
        a: "To help George Atzerdot",
        b: "To kill Vice-president Johnson",
        c: "To help Louis Powell",
        d: "To kill General Grant",
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following words best describes John Wilkes Booth as he entered Lincoln's private box at Ford's Theater?",
      answers: {
        a: "Careless",
        b: "Sad",
        c: "Terrified",
        d: "Opportunistic",
      },
      correctAnswer: "d"
    },

    {
      question: "How did John Wilkes Booth break his leg?",
      answers: {
        a: "In the fight with Lincoln.",
        b: "The passage doesn't say.",
        c: "He caught the spur of his boot in a flag while leaping to the stage.",
        d: "He was shot in the leg during his escape.",
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following DID NOT occur at the Petersen Boarding House?",
      answers: {
        a: "Dr. Leale removed the blood clot.",
        b: "Lincoln died.",
        c: "Lincoln's son Robert arrived.",
        d: "Mary Todd was removed from the scene.",
      },
      correctAnswer: "a"
    },
    {
      question: "Who uttered the famous quote, \"Now he belongs to the Ages\" ",
      answers: {
        a: "Robert Lincoln",
        b: "Dr. Leale",
        c: "John Wilkes Booth",
        d: "Edwin M. Stanton",
      },
      correctAnswer: "d"
    },
    {
      question: "Why did John Wilkes Booth and David Herold visit the house of Dr. Mudd?",
      answers: {
        a: "To treat Booth's broken leg",
        b: "To cross the Potomac River",
        c: "To plan their escape",
        d: "To secure their weapons",
      },
      correctAnswer: "a"
    },
    {
      question: "Why did Mary Surratt become significant in history?",
      answers: {
        a: "Some believed she actually shot Lincoln.",
        b: "She helped tend to President Lincoln's wounds.",
        c: "She was the first woman to be executed in America.",
        d: "She was the first woman to vote.",
      },
      correctAnswer: "c"
    },
  ];


  buildQuiz();

  subButton.addEventListener("click", showResults);
})();

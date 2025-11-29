// ------------------------------------------
// WebDev Lab Assignment 4 - Prompt Quizzer
// A simple console-based Quiz Game
// ------------------------------------------

// 1. Array of quiz questions (minimum 5 required)
const quizQuestions = [
  {
    question: "What is the capital of India?",
    answer: "delhi"
  },
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "What is 5 + 7?",
    answer: "12"
  },
  {
    question: "Which language is used inside web browsers for logic?",
    answer: "javascript"
  },
  {
    question: "What is the color of the sky?",
    answer: "blue"
  }
];

// 2. Function to run the quiz
function runQuiz() {
  let score = 0; // Track score

  // Loop through all questions one by one
  for (let i = 0; i < quizQuestions.length; i++) {
    const userAnswer = prompt(quizQuestions[i].question);

    // Normalize user input
    const cleanedAnswer = userAnswer.toLowerCase().trim();

    // Check if correct
    if (cleanedAnswer === quizQuestions[i].answer) {
      alert("Correct Answer! 🎉");
      score++;
    } else {
      alert("Wrong! ❌ The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // Final score
  alert(
    "Quiz Completed!\nYou scored " +
      score +
      " out of " +
      quizQuestions.length +
      " 🏆"
  );
}

// 3. Run the quiz (paste this whole file in console & press Enter)
runQuiz();

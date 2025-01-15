import drawHangman from "./draw.js";
import choseWord from "./word.js";
import start from "./start.js";
var score = 0;
var staged = 0;
var word = "";
var underSGuessed = "";
var guess;
var allGuess = [];
var correctGuess = [];
var wrongGuess = [];
var scoreElement = document.getElementById("score");
var wordContent = document.getElementById("guessedWord");
var checkGuess = document.getElementById("inputId");
var scoreMinus = 0;

document.getElementById("firstg").addEventListener("click", function () {
  allGuess = [];
  correctGuess = [];
  wrongGuess = [];
  wordContent.innerHTML = "";
  staged = 0;
  score = 0;
  scoreMinus = 0;
  word = choseWord();
  underSGuessed = "-".repeat(word.word.length);
  wordContent.innerHTML = underSGuessed;
  console.log(word.word);
  document.getElementById("hint").classList.add("d-none");
  document.getElementById("hint1").innerHTML = ""
  word = choseWord();
  console.log(word.word);

  start(score, scoreElement);
  underSGuessed = "-".repeat(word.word.length);
  wordContent.innerHTML = underSGuessed;
  document.getElementById("firstShow").classList.toggle("d-none");
  document.getElementById("game").classList.toggle("d-none");
});

document.getElementById("btnId").addEventListener("click", function () {
  document.getElementById("hint").classList.remove("d-none");
  document.getElementById("hint").addEventListener("click", function () {
    document.getElementById("hint1").innerHTML = word.hint;
    wrongGuess.push(1);
    score += -10;
    score = (correctGuess.length * 10) + scoreMinus;
    scoreElement.innerHTML = `score <i class="fa-solid fa-star text-warning"></i>:${score}`;
  });
  guess = wordContent.innerHTML;
  if (!allGuess.includes(checkGuess.value)) {
    allGuess.push(checkGuess.value);

    if (word.word.includes(checkGuess.value)) {
      correctGuess = [];

      for (let i = 0; i < word.word.length; i++) {
        if (word.word.charAt(i) === checkGuess.value) {
          underSGuessed =
            underSGuessed.substring(0, i) +
            checkGuess.value +
            underSGuessed.substring(i + 1, underSGuessed.length);
          wordContent.innerHTML = underSGuessed;

          if (!underSGuessed.includes("-")) {
            document.getElementById("game").classList.toggle("d-none");
            document.getElementById("tryagain").classList.toggle("d-none");

            document.getElementById(
              "gamSt"
            ).innerHTML = `We have a wineer &#128526<br><br><p class="text-center">score <i class="fa-solid fa-star text-warning"></i>:${score}</p>`;
          }
        }
        if (underSGuessed.charAt(i) != "-") {
          correctGuess.push(underSGuessed.charAt(i));
        }

        if (document.getElementById("msg").classList.contains("d-none")) {
          document.getElementById("msg").classList.toggle("d-none");
        } else {
          document.getElementById("msg").innerText = "Good Job";
        }
      }
      
    } else {
      staged++;
      scoreMinus += -10;
      wrongGuess.push(checkGuess.value);

      drawHangman(staged);
      if (document.getElementById("msg").classList.contains("d-none")) {
        document.getElementById("msg").classList.toggle("d-none");
        document.getElementById("msg").innerText = "Guess Again";
      } else {
        document.getElementById("msg").innerText = "Guess Again";
      }
    }
    checkGuess.value = "";
    if (staged > 7) {
      document.getElementById("game").classList.toggle("d-none");
      document.getElementById("tryagain").classList.toggle("d-none");
      score = 10 + (correctGuess.length - wrongGuess.length) * 10;
      document.getElementById(
        "gamSt"
      ).innerHTML = `Try Again &#128549<br><br><p class="text-center">score <i class="fa-solid fa-star text-warning"></i>:${score}</p>`;
    }
  } else {
    checkGuess.value = "";
    

    if (document.getElementById("msg").classList.contains("d-none")) {
      document.getElementById("msg").classList.toggle("d-none");
      document.getElementById("msg").innerText = "You Entered This Value";
    } else {
      document.getElementById("msg").innerText = "You Entered This Value";
    }
    score = (correctGuess.length * 10) + scoreMinus;
    scoreElement.innerHTML = `score <i class="fa-solid fa-star text-warning"></i>:${score}`;
  }
  score = (correctGuess.length * 10) + scoreMinus;
  scoreElement.innerHTML = `score <i class="fa-solid fa-star text-warning"></i>:${score}`;
});

document.getElementById("newgame").addEventListener("click", function () {
  allGuess = [];
  correctGuess = [];
  wrongGuess = [];
  wordContent.innerHTML = "";
  staged = 0;
  score = 0;
  scoreMinus = 0;
  word = choseWord();
  underSGuessed = "-".repeat(word.word.length);
  wordContent.innerHTML = underSGuessed;
  console.log(word.word);
  document.getElementById("hint").classList.add("d-none");
  document.getElementById("hint1").innerHTML = ""
  // start(score, scoreElement);
  document.getElementById("firstShow").classList.toggle("d-none");
  document.getElementById("game").classList.toggle("d-none");
});

import choseWord from "./word.js";
import drawHangman from "./draw.js";
function start(score,scoreElement) {
    document.getElementById("game").classList.toggle("d-none");
    document.getElementById("tryagain").classList.toggle("d-none");
    document.getElementById("msg").classList.toggle("d-none");
    scoreElement.innerHTML = `score <i class="fa-solid fa-star text-warning"></i>:${score}`;
    drawHangman(0);
  }
  
  export default start;


  // function start() {
//   document.getElementById("game").classList.toggle("d-none");
//   document.getElementById("tryagain").classList.toggle("d-none");
//   document.getElementById("msg").classList.toggle("d-none");
//   scoreElement.innerHTML = `score <i class="fa-solid fa-star text-warning"></i>:${score}`;
//   drawHangman(0);
//   word = choseWord();
//   underSGuessed = "-".repeat(word.length);
//   wordContent.innerHTML = underSGuessed;
//   console.log(word);
// }
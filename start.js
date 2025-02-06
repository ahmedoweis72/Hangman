import choseWord from "./word.js";
import drawHangman from "./draw.js";
function start(score,scoreElement) {
    document.getElementById("firstShow").classList.replace("d-flex","d-none");
    document.getElementById("game").classList.replace("d-none","d-flex");
    scoreElement.innerHTML = `score <i class="fa-solid fa-star text-warning"></i>:${score}`;
    drawHangman(0);
    
  }
  
  export default start;



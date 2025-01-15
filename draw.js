const canvas = document.getElementById("hangmanCanvas");
const ctx = canvas.getContext("2d");
  function drawHangman(stage) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.lineWidth = 5;
  ctx.strokeStyle = "#444";
  ctx.beginPath();
  ctx.moveTo(100, 450);
  ctx.lineTo(400, 450);
  ctx.moveTo(150, 450);
  ctx.lineTo(150, 50);
  ctx.lineTo(300, 50);
  ctx.lineTo(300, 100);
  ctx.stroke();

  if (stage > 0) {
    const headGradient = ctx.createRadialGradient(300, 140, 10, 300, 140, 30);
    headGradient.addColorStop(0, "#FFDDC1");
    headGradient.addColorStop(1, "#D9A687");
    ctx.fillStyle = headGradient;
    ctx.beginPath();
    ctx.arc(300, 140, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  if (stage > 1) {
    ctx.strokeStyle = "#444";
    ctx.beginPath();
    ctx.moveTo(300, 170);
    ctx.lineTo(300, 280);
    ctx.stroke();
  }
  if (stage > 2) {
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(250, 240);
    ctx.stroke();
  }
  if (stage > 3) {
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(350, 240);
    ctx.stroke();
  }
  if (stage > 4) {
    ctx.beginPath();
    ctx.moveTo(300, 280);
    ctx.lineTo(260, 350);
    ctx.stroke();
  }
  if (stage > 5) {
    ctx.beginPath();
    ctx.moveTo(300, 280);
    ctx.lineTo(340, 350);
    ctx.stroke();
  }
  if (stage > 6) {
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(290, 130, 3, 0, Math.PI * 2);
    ctx.arc(310, 130, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(300, 150, 10, 0, Math.PI, false);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();

    setTimeout(() => {
      ctx.fillStyle = "#FFDDC1";
      ctx.beginPath();
      ctx.arc(290, 130, 3, 0, Math.PI * 2);
      ctx.arc(310, 130, 3, 0, Math.PI * 2);
      ctx.fill();
    }, 500);
  }
}
export default drawHangman;
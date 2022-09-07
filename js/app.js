const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210, 200, 15, 150);
ctx.fillRect(350, 200, 15, 150);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(290, 150, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(310, 130 +10, 8, Math.PI, 2 * Math.PI);
ctx.arc(270, 130 +10, 8, Math.PI, 2 * Math.PI);
ctx.fill();
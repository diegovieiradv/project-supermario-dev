const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const pumpkin = document.querySelector(".pumpkin");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./assets/game-over.png";
    mario.style.width = "80px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
}, 10);

const loop2 = setInterval(() => {
  const pumpkinPosition = pumpkin.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pumpkinPosition <= 120 && pumpkinPosition > 0 && marioPosition < 80) {
    pumpkin.style.animation = "none";
    pumpkin.style.left = `${pumpkinPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./assets/game-over.png";
    mario.style.width = "80px";
    mario.style.marginLeft = "50px";

    clearInterval(loop2);
  }
}, 10);
window.addEventListener("keydown", jump);
window.addEventListener("touchstart", jump);

const touchArea = document.getElementById("touchArea");

touchArea.addEventListener("pointerdown", jump);

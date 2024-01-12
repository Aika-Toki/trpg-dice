document.querySelector("#diceA").addEventListener("click", addDiceA, false);
document.querySelector("#diceB").addEventListener("click", addDiceB, false);
document.querySelector("#diceC").addEventListener("click", addDiceC, false);
document.querySelector("#diceD").addEventListener("click", addDiceD, false);
document.querySelector("#roll").addEventListener("click", roll, false);
function playDiceSound() {
  let whichSound = Math.floor(Math.random() * 2);
  let audio;
  if (whichSound == 0) {
    audio = new Audio("./sounds/dice1.mp3");
  } else {
    audio = new Audio("./sounds/dice2.mp3");
  }
  audio.play();
}

function addDiceA() {
  addDice(6);
}
function addDiceB() {
  addDice(8);
}
function addDiceC() {
  addDice(10);
}
function addDiceD() {
  addDice(100);
}
function addDice(face) {
  document.querySelector(".display").append(generateDice(face));
}
function generateDice(face) {
  let dice = document.createElement("div");
  dice.classList.add("dice");
  dice.addEventListener(
    "click",
    () => {
      dice.remove();
    },
    false
  );
  dice.dataset.min = 1;
  dice.dataset.max = face;
  let span = document.createElement("span");
  dice.appendChild(span);
  span.classList.add("face");
  return dice;
}
function roll() {
  let dice = [...document.querySelectorAll("div.dice")];
  let maxRollTime = 15;
  let rollTime = 0;
  let soundCount = 0;
  let wait = 80;
  let soundInterval = setInterval(() => {
    soundCount++;
    playDiceSound();
    if (soundCount > Math.min(Math.floor(dice.length / 2), 8)) {
      clearInterval(soundInterval);
    }
  }, 120);
  document.querySelector(".total>span").textContent = "";
  document.querySelector(".roll-btn").classList.add("hidden");
  let interval = setInterval(() => {
    rollTime++;
    dice.forEach((e) => {
      e.querySelector(".face").textContent = Math.ceil(Math.random() * Number(e.dataset.max));
    });
    if (rollTime > maxRollTime) {
      clearInterval(interval);
    }
  }, wait);
  setTimeout(() => {
    document.querySelector(".total>span").textContent = eval([...document.querySelectorAll(".face")].map((e) => Number(e.textContent)).join("+"));
    document.querySelector(".roll-btn").classList.remove("hidden");
  }, wait * (maxRollTime + 1));
}

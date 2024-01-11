document.querySelector("#diceA").addEventListener("click", addDiceA, false);
document.querySelector("#diceB").addEventListener("click", addDiceB, false);
document.querySelector("#diceC").addEventListener("click", addDiceC, false);
document.querySelector("#diceD").addEventListener("click", addDiceD, false);
document.querySelector("#roll").addEventListener("click", roll, false);

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
  dice.forEach((e) => {
    e.querySelector(".face").textContent = Math.ceil(Math.random() * Number(e.dataset.max));
  });
  document.querySelector(".total>span").textContent = eval([...document.querySelectorAll(".face")].map((e) => Number(e.textContent)).join("+"));
}

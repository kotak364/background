// js variable

const color = ["red", "green", "blue", "yellow"];
const a = document.querySelector(".number");
const b = document.querySelector("#btn1");
const c = document.querySelector("#btn2");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// simple button event

b.addEventListener("click", function () {
  const d = getRandomNumber();
  a.textContent = color[d];
  document.body.style.backgroundColor = color[d];
  console.log(d);
});

function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

// hex button event

c.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber2()];
  }

  console.log(hexColor);

  a.textContent = hexColor;

  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber2() {
  return Math.floor(Math.random() * hex.length);
}

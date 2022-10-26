
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = document.querySelector('body');
const changeColor = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  nameOfColor.textContent = randomColor;
  bodyColor.style.backgroundColor = randomColor;
});
const spanElement = document.querySelector('#value');
const btnLeft = document.querySelector('button[data-action="decrement"]');
const btnRight = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
btnLeft.addEventListener("click", () => {
    counterValue -=1
    spanElement.textContent = counterValue;
});
btnRight.addEventListener("click", () => {
    counterValue +=1
    spanElement.textContent = counterValue;
});

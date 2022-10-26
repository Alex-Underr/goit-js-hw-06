const ChangeFontSize = document.querySelector("#font-size-control");
const textString = document.querySelector('#text');
ChangeFontSize.addEventListener('input', (event) => {
    textString.style.fontSize = event.currentTarget.value + 'px'
})
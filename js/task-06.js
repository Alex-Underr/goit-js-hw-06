const symbolInput = document.querySelector('#validation-input');
const symbolLength = Number(symbolInput.dataset.length);
console.log(symbolLength);
symbolInput.addEventListener('blur',(event)=> {
    event.target.classList.remove('valid','invalid');
    if (event.target.value.length === symbolLength) {
        event.target.classList.add("valid")}
        else { event.target.classList.add("invalid")}
    })
const wordInput = document.querySelector("#name-input");
const wordOutput = document.querySelector("#name-output");
wordInput.addEventListener('input', (event) => {
    !event.currentTarget.value ? (wordOutput.textContent = "Anonymous") : (wordOutput.textContent = event.currentTarget.value)});        
    

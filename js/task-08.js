const dataObj = {};
const sendForm = document.querySelector(".login-form");

sendForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
      elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
     return alert("Заповніть, будь-ласка, всі поля!");
    } else {
      console.log(email.value, password.value);
     }   
        dataObj.email = email.value;
        dataObj.password = password.value;  
    event.currentTarget.reset();
});
const input = document.querySelector("input[name='name']");
const btn = document.querySelector("button");
input.addEventListener("keyup", (evt) => {
    if (input.value.length >= 2) {btn.disabled = false;}
    
     });
const input = document.querySelector("input");
const calculate = document.querySelector("button");
const output = document.querySelector(".output");
const value = input.value;

calculate.addEventListener('click' , ()=>{
    output.innerHTML = ''
    for( a = 1 ; a <=10 ; a++){
        output.innerHTML += `<tr><td>${input.value} x ${a}</td><td>=</td><td>${input.value * a}</td></tr>`
    }
})
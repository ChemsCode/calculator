function operate(operator, b, a){
    switch(operator)
    {
        case "+":
            calculatorDisplayBot.textContent = a + b;
            return a+b;
        break;
        case "-":
            calculatorDisplayBot.textContent = a - b;
            return a-b;
        break;
        case "/":
            calculatorDisplayBot.textContent = a / b;
            return a/b;
        break;
        case "*":
            calculatorDisplayBot.textContent = a * b;
            return a*b;
        break;
        default:
            return a;
        break;
    }
}


let x = 0;
let y = 0;
let calculatorBtn;
let operator;
let keepEvent = false;

const calculatorDisplay = document.getElementById("Display-top");
const calculatorDisplayBot = document.getElementById("Display-bot");
const clearBtn = document.getElementById("clear");
const plusBtn = document.getElementById("addition");
const minusBtn = document.getElementById("substraction");
const multBtn = document.getElementById("multiplication");
const divBtn = document.getElementById("division");
const equalBtn = document.getElementById("equal");
calculatorDisplay.textContent = x;


//For loop to add event listener to write numbers on calculator

for(let i = 0; i < 10; i++){
    calculatorBtn = document.getElementById(`${i}`);
    calculatorBtn.addEventListener("click", () => {
        x = 10*x + i;
        keepEvent ? calculatorDisplay.textContent = `${y} ${operator} ${x}`: 
        (calculatorDisplay.textContent = x);
    });

}

//clear button

clearBtn.addEventListener("click", () => {
    x = 0;
    y = 0;
    calculatorDisplay.textContent = x;
    calculatorDisplayBot.textContent = '';
});

//operator buttons

plusBtn.addEventListener("click", ()=> {  
    if(keepEvent){
        keepEvent = false;
        x = operate(operator, x, y)
    }
    operator = "+";
    y = x;
    x = 0;
    keepEvent = true;
    calculatorDisplay.textContent = `${y} ${operator} ${x}`
});
minusBtn.addEventListener("click", ()=> {  
    if(keepEvent){
        keepEvent = false;
        x = operate(operator, x, y)
    }
    operator = "-";
    y = x;
    x = 0;
    keepEvent = true;
    calculatorDisplay.textContent = `${y} ${operator} ${x}`
});
multBtn.addEventListener("click", ()=> {  
    if(keepEvent){
        keepEvent = false;
        x = operate(operator, x, y)
    }
    operator = "*";
    y = x;
    x = 0;
    keepEvent = true;
    calculatorDisplay.textContent = `${y} ${operator} ${x}`
});
divBtn.addEventListener("click", ()=> {  
    if(keepEvent){
        keepEvent = false;
        x = operate(operator, x, y)
    }
    operator = "/";
    y = x;
    x = 0;
    keepEvent = true;
    calculatorDisplay.textContent = `${y} ${operator} ${x}`
});

equalBtn.addEventListener("click", ()=> {  
    keepEvent = false;
    x = operate(operator, x, y)
});
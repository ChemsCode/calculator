function operate(operator, a, b){
    switch(operator)
    {
        case "+":
            calculatorDisplay.textContent = a + b;
        break;
        case "-":
            calculatorDisplay.textContent = a - b;
        break;
        case "/":
            calculatorDisplay.textContent = a / b;
        break;
        case "*":
            calculatorDisplay.textContent = a * b;
        break;
    }
}


let x = 0;
let y = 0;
let calculatorBtn;

const calculatorDisplay = document.getElementById("Calculator-Display");
const clearBtn = document.getElementById("clear");
const plusBtn = document.getElementById("addition");
const minusBtn = document.getElementById("substraction");
const multBtn = document.getElementById("multiplication");
const divBtn = document.getElementById("division");
calculatorDisplay.textContent = x;


//For loop to add event listener to write numbers on calculator

for(let i = 0; i < 10; i++){
    calculatorBtn = document.getElementById(`${i}`);
    calculatorBtn.addEventListener("click", () => {
        x = 10*x + i;
        calculatorDisplay.textContent = x;
        console.log(i);
    });

}

//clear button

clearBtn.addEventListener("click", () => {
    x = 0;
    calculatorDisplay.textContent = x;
});

//operator buttons

// plusBtn.addEventListener("click", ()=> {
    
//     operate("+", x, y);
// });
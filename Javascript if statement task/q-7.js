// Simple Calculator

let a = parseInt(prompt("choice a numbers :1"));
let b = parseInt(prompt("choice a numbers :2"));
let Option = prompt("choice a values : + , - , * , / ")

switch (Option) {
    case '+':
        {
            console.log(a + b);
            break;

        }
    case '-':
        {
            console.log(a - b);
            break;

        }
    case '*':
        {
            console.log(a * b);
            break;

        }
    case '/':
        {
            console.log(a / b);
            break;

        }
    default:
        {
            console.log("invalid");
            break;
        }


}
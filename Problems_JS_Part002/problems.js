"use strict"
//Code Below


//Problem 1. Happy Number Checker /////


function happyNumberCheck(number){
    let result = number;
    let notHappy = true;
    let iteration = 1
    while (notHappy){
        if (result === "1" || result === "10" || result === "100"){
            return "This is a happy number!";
        }
        else{
            result = (Math.pow(result[0], 2) + Math.pow(result[1], 2)).toString();
            console.log(result);
        }
        iteration += 1;
        if(iteration === 100){
            return "Not a happy number."
        }    
    }
}

let userNumber = prompt("Please pick a positive whole number.");
let output = happyNumberCheck(userNumber);
console.log(output);


//Problem 2. Prime Numbers /////


function primeNumberCheck (number){
    for(let i = 2; i < number; i++)
        if (number % i === 0)
            return "This is not a Prime Number!";
    return "This is a prime number!";        
}
let userNumber = prompt("Pick a number to check if it is prime!")
let primeResult = primeNumberCheck(userNumber);
console.log(primeResult);


//Problem 3. Fibonacci Sequence /////


function fibonacciSequence(startNumber, endNumber){
    let beforeEnd = true;
    let currentNumber = 0;
    let fibonacci = startNumber + ", ";
    let priorNumber = 0;
    while(beforeEnd){
        if(startNumber >= endNumber){
            return "Your start number must be below your ending number!";
        }
        else if(currentNumber < startNumber){
            currentNumber = startNumber;
        }
        else if(currentNumber >= endNumber){
            return fibonacci;
        }
        else{
            let nextNumber = currentNumber + priorNumber;
            priorNumber = currentNumber;
            currentNumber = nextNumber;
            fibonacci += nextNumber.toString() + ", ";

        }
    }
}
let startNumber = Number(prompt("Pick a number to start with!"));
let endNumber = Number(prompt("Pick a number to end with!"));
let fibonacci = fibonacciSequence(startNumber, endNumber);
console.log(fibonacci);
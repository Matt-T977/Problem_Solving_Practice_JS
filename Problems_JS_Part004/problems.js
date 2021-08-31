//Problem 1 Leap Year Counter /////


function leapYearCheck(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return `${year} is a Leap Year!`;
            }
            else{
                return `${year} not a Leap Year!`;
            }
        }
        else{
            return `${year} is a Leap Year!`;
        }
    }
    else{
        return `${year} not a Leap Year!`;
    }    
}
let year = prompt("What year would you like to check for a Leap Year?");
console.log(leapYearCheck(year));


//Problem 2 Longest Palindromic in a Phrase /////////Not Finished\\\\\\\\\\\\\


function reverseString(stringInput){
    let stringOutput = "";
    for(let i = stringInput.length - 1; i >= 0; i--){
        stringOutput += stringInput[i];
    }
    return stringOutput;
}
function palindromeCheck(normalString, reversedString){
    if(normalString === reversedString){
        return `The phrase ${normalString} is indeed a palindrome!` 
    }
    else{
        return `The phrase ${normalString} is not a palindrome!` 
    }
}
let userString = prompt("Please enter a word or phrase to check!");
let userStringReversed = reverseString(userString);
let palindromeAnswer = palindromeCheck(userString, userStringReversed);
console.log(palindromeAnswer);
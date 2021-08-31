"use strict"
//code below//

// Problem 1.Reverse a string /////


function reverseString(stringInput){
    let stringOutput = "";
    for(let i = stringInput.length - 1; i >= 0; i--){
        stringOutput += stringInput[i];
    }
    return stringOutput;
}
let userString = prompt("Please enter a word or phrase to reverse!");
let userStringReversed = reverseString(userString)
console.log(userStringReversed)


// Problem 2.Capitalize Letter AKA Title Format /////


function stringTitleFormat(userString){
    let titleFormatString = ""
    for(let i = 0; i < userString.length; i++)
        if(userString[i] === " "){
            let letterToCapitalize = userString[i + 1]
            let capitalLetter = letterToCapitalize.toUpperCase()
            titleFormatString += " ";
            titleFormatString += capitalLetter;
            i++;
        }
        else if(i === 0){
            let letterToCapitalize = userString[i]
            let capitalLetter = letterToCapitalize.toUpperCase()
            titleFormatString += capitalLetter;     
        }
        else{
            titleFormatString += userString[i];
        } 
    return titleFormatString;   
}
let userString = prompt("Please enter a word or phrase!");
let titleFormatOutput = stringTitleFormat(userString);
console.log(titleFormatOutput);


// Problem 3. Compress a string of characters. /////


function stringCompressor(stringInput){
    let letterCount = 1;
    let stringCompressed = "";
    for(let i = 0; i < stringInput.length; i++){
        if(stringInput[i] === stringInput [i + 1]){
            letterCount += 1;
        }
        else if(stringInput[i] !== stringInput[i + 1]){
            stringCompressed += letterCount.toString();
            letterCount = 1;
            stringCompressed += stringInput[i];
        }
    }
    return stringCompressed;
}
let uncompressedString = "aaabbbbbccccaacccbbbaaabbbaaa"
let compressedStringOutput = stringCompressor(uncompressedString);
console.log(compressedStringOutput);


//Palindrome Checker


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
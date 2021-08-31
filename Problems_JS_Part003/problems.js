//Problem 1


//Problem 2 Palindrome Checker /////


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


//Problem 3 number Sequence Check /////


function numberSorter(numberList){
    let sortedList = numberList.sort(function(a, b){return a - b});
    return sortedList;
}
function numberSequenceCheck(sortedList){
    let numberSequence = true;
    for(i = 0; i < sortedList.length; i++){
        if(sortedList[i] >= sortedList[i - 1]){
            numberSequence = true;
        }
        else{
            numberSequence = false;
        }
    }
    return numberSequence;
}    
let numberList = [17, 15, 20, 19, 21, 16, 18]
sortedList = numberSorter(numberList);
isNumberSequence = numberSequenceCheck(sortedList);
console.log(isNumberSequence);


//Problem 4 /////


function positiveNumberCounter(numberList){
    let positiveCounter = 0;
    for(let i = 0; i < numberList.length; i++){
        if(numberList[i] >= 0){
            positiveCounter++;
        }
    }
    return positiveCounter;
}
function negativeNumberSum(numberList){
    let negativeSum = 0;
    for(let i = 0; i < numberList.length; i++){
        if(numberList[i] <= 0){
            negativeSum += numberList[i];
        }
    }
    return negativeSum;
}
let numberList = [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21] 
positiveOutput = positiveNumberCounter(numberList);
negativeOutput = negativeNumberSum(numberList);
console.log(positiveOutput + " " + negativeOutput);


//Problem 5 highLowNumberCheck /////


function highLowNumberCheck(numberList){
    let highNumber = 0;
    let lowNumber = 100;
    let newNumberList = numberList.split(" ").sort();
    for(let i = 0; i < newNumberList.length; i++){
        newNumberList[i] = Number(newNumberList[i]);
    }
    for(let i = 0; i < newNumberList.length; i++){
        if(newNumberList[i] > highNumber){
            highNumber = newNumberList[i];
        }
        else if(newNumberList[i] < lowNumber){
            lowNumber = newNumberList[i];
        }
    }
    let highLowNumber = lowNumber.toString() + " " + highNumber.toString();
    return highLowNumber;
}
let numberList = "3 9 0 1 4 8 10 2";
let highLowNumber = highLowNumberCheck(numberList);
console.log(highLowNumber);


//Problem 6 Valid Email Check //basic iteration /////


function validEmailCheck(userEmail){
    let addressArray = ["com","org","edu","gov","mil"];
    let validEmail = false;
    let splitEmail = userEmail.split("@");
    let nameEmail = splitEmail[0];
    let endEmail = splitEmail[1];
    let endSplitEmail = endEmail.split(".") 
    if(nameEmail.length > 4 && endSplitEmail[0].length >= 3 && endSplitEmail[1].length === 3){
        for(let i = 0; i < addressArray.length; i++){
            if(endSplitEmail[1] === addressArray[i]){
                return validEmail = true
            }
        }
        return validEmail;
    }
    else{
        return validEmail;
    }
}
console.log(validEmailCheck("mike1@gmail.edu"));


//Problem 7 Alphabet Position Generator /////


function alphabetPositionGenerator(wordInput){
    const alphabetObject = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,
        n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26};
    let alphabetPositionString = "";
    let objectLetterPosition;
    for(let i = 0; i < wordInput.length; i++){
        objectLetterPosition = wordInput[i];
        alphabetPositionString += alphabetObject[wordInput[i]] + " ";
    }
    return alphabetPositionString;
}

let wordInput = prompt("Please pick a word to generate the alphabet positions.");
let output = alphabetPositionGenerator(wordInput);
console.log(output);


//Problem 8 Combination Lock Tumbler Tracker /////


function combinationLockTumberTracker(currentCombinationNumber, targetCombinationNumber){
    let combinationNumberPositionOne = Math.abs(currentCombinationNumber[0] - targetCombinationNumber[0]);
    let combinationNumberPositionTwo = Math.abs(currentCombinationNumber[1] - targetCombinationNumber[1]);
    let combinationNumberPositionThree = Math.abs(currentCombinationNumber[2] - targetCombinationNumber[2]);
    let combinationNumberPositionFour = Math.abs(currentCombinationNumber[3] - targetCombinationNumber[3]);
    let rotationCounterArray = []
    rotationCounterArray.push(combinationNumberPositionOne,combinationNumberPositionTwo,combinationNumberPositionThree,combinationNumberPositionFour);
    return rotationCounterArray;
}
console.log(combinationLockTumberTracker("3893","5296"));


//Problem 9 Happy Number Checker /////


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


//Problem 10 Reverse Reciprocal ///// 


function reverseReciprocal(number){
    let stringNumber = number.toString();
    let reverseNumber = Number(stringNumber[1] + stringNumber[0]);
    let result = 1 / reverseNumber;
    return `${result} = 1/${reverseNumber}`;
}
console.log(reverseReciprocal(17)); // 0.014084507042253521 = 1/71
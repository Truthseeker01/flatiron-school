/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

/**
 * Developer note
 
 */
// ~ Variables
// -> constants, variables, logging, annotations
const schoolName = "flatiron school";
console.log(schoolName);
let firstName = "Ali";
firstName = "Ahmed";
console.log(firstName);
// ~ Types ctrl + / to comment a line
// -> undefined, null*, boolean, number, string
let lastName;
lastName = "Basamad"
console.log(typeof(lastName));

const day = true;
console.log(typeof(day));
const x = 3;
console.log(typeof(x));
const sentence = `We have ${x} books`;
console.log(sentence + " Yahoooo!");
// ~ Objects
// -> definition, bracket/dot notation, stringify
const cube = {
    volume: 8,
    height:2,
    width:2,
    color:"blue",
    "full-name" : "Ahmed" // -dash is not allowed so to use such nmaes we use quotes. here comes the use of using square brackets to call values.
}
console.log(cube.volume);
cube.volume = 10
console.log(cube.volume);
console.log(cube["full-name"]);
// ~ Arrays
// -> definition, access, modification
const numbers = [1, 2, 3, 5];
console.log(numbers[3]);
console.log(numbers);
console.log(numbers.length);
numbers[2] = 9 ;
console.log(numbers);
// ~ Conditionals
// if, if-else, if-else-if-else, ternary
const isItSunny =false;
const isItRainy = true;
if (isItSunny) {
    console.log("It is sunny today");
} else if (isItRainy) {
    console.log("It is rainy.");
}
else {
    console.log("It isn't sunny today");
}
//ternary
isItSunny ? console.log("It is sunny!") : console.log("It's not sunny");
const greeting = isItSunny ? "It's sunny!" : "It's not sunny!";
console.log(greeting);
// ~ Functions
// -> name, parameters, body, return, annotations
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
sayHello("AHMED");
/**
 * Greets someone and their mood
 * @param {string} name The person to greet
 * @param {string} mood The mood I'm in
 * @returns 
 */
function sayHi(name, mood){
    return `Hi, ${name}, I'm ${mood}` // any code that comes after return is unreachable.
};
console.log(sayHi("Ahmed", "sad"));
//This fuunction adds one too a number
function addOne(number){
    return number + 1;
}
console.log(addOne(5), addOne(6));
// -> methods, forEach, callback functions, anonymous functions
console.log("Hello");
const names = ["Ahmed","Lina","Junjie","Yuhan"]
//The function in the forEach is called the callback function
names.forEach(name => console.log("Hello,"+ name + "!"));
names.forEach((name, i) => console.log("Hello,"+ name + "at the index" + i + "!"));

names.forEach(sayHello);
// ~ Scope
// -> global, local, closures, function hoisting
// the closure for localScope us localVariable and all global vars
function localScope() {
    const localVariable = "Hi, I'm local";
    console.log(localVariable);
    console.log(firstName)
}
localScope();
// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
function sumUpArray(arr){
    //const arr = [1,2,3,4]
    let sum = 0;
    for (i=0; i< arr.length; i++){
        sum += arr[i];
    };
    return sum;
};
console.log(sumUpArray([1,2,4]));
// Another sulotion with forEach array method
function sumArray(theArray){
    //const theArray = [1,2,3,4];
    let result = 0;
    theArray.forEach(element => result += element);
    return result;
}
console.log(sumArray([1,2,4]));


// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
function doubleArray(toBeDoubledArr){
//const num = [2,3,4,5];
let newArray = [];
toBeDoubledArr.forEach(i => newArray.push(i*i))
return newArray;
};
console.log(doubleArray([4,5]));

//Another sulotion with for loop
function doubleArray2(toBeDoubledArr){
    //const toBeDoubledArr = [4,5];
    let newArray = [];
    for (i=0; i< toBeDoubledArr.length; i++){
        newArray.push(toBeDoubledArr[i]*toBeDoubledArr[i]);
    };
    return newArray
};
console.log(doubleArray2([4,5]));
// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.
function lowerCase(upArr){
    //const upArr = ["AhMeD"];
    let lowerCaseArr = [];
    upArr.forEach(i => lowerCaseArr.push(i.toLowerCase()));
    return lowerCaseArr;
}
console.log(lowerCase(["AHMED"]));

//Another sulotion with for loop
function lowerCase2(upArr){
    let lowerCaseArr = [];
    for (i=0; i < upArr.length; i++) {
        lowerCaseArr.push(upArr[i].toLowerCase())
    }
    return lowerCaseArr;
}
console.log(lowerCase2(["AHMED"]));

//practice
function isAhmed(name){
    if (name === "Ahmed") {
        return "Hi Ahmed, nice to meet you!"
    } else if (typeof(name) === "string") {
        return `Hi ${name}!`
    } else {
        return "please pass in a name!"
    }
}
console.log(isAhmed(99));

//ternary
function isLina(name){
    return name === "Lina" ? "Hi, Lina. You're gorgeous!" : `Hi, ${name}!`
}
console.log(isLina("Ahmed"));

//switch
function isLina2(name){
    switch(name){
        case "Lina" :
            return "Hi Lina! You're gorgeous!"
        case "Ahmed" :
            return "Hi Ahmed! Where is Lina?"
    };
    switch (typeof name) {  
            case 'string' :
            return `Hi ${name}!`
        default:
            return "Please pass in a name"
    };
};
console.log(isLina2("Frank"));

// API Application Program Interface. a communication bridge between two systems. document(object model) or DOM(document object model) is the API for JS to access HTML
// head and body tags are children of document
//tags in html are called elements but in JS they're called nodes.
// C R U D create read update delete are operations of the DOM.

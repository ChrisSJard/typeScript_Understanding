/*
* Types examples
* Practicing declaring types
*/

// function to add to number -- declare var has to be numbers

function add(n1:number ,n2:number): number{
    return (n1+n2);
}

() :string=> "Test";

const number1 = 5;
const number2 = 2.8;
const result = add(number1, number2);
console.log(result);


// Object understanding

const person :{name:string; age:number;} ={
    name: 'John',
    age:23
};

// typescript can infer and better practice to use
const person2 ={
    name: 'John',
    age:23
};

// array typescript
let stringArray :string[];
stringArray = ['this', 'is', 'a', 'string'];

for (const word of stringArray){
    console.log(word.toUpperCase);
}

//tuple typescript -- fixed length array
let role: [number, string];

role = [0, 'user'];
// role = ["12", 'user2']

// Enum ---> automatically enumerate your object and can access using strings to get a number
enum Career {
    ADMIN, READ_ONLY, AUTHOR
};

console.log(Career.ADMIN);

// Union types
// allow variable to accept more than one type
function combine (input1: number | string , input2: number | string){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
};

// literal type
function resultConverter (num1: number | string, num2: number | string, resultConverter: 'as-number' | 'as-text')  {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    if (resultConverter === 'as-number'){
        // return parseFloat(result)
        return +result;
    }else{
        return result.toString();
    }
}

const combineValues = resultConverter(30,26, 'as-number');

// Alias typescript 
type Combinable = number | string;
type JobRoles = 'user' | 'admin' | 'developer';

// function Return types
function testme(n1,n2) : string{
    return n1.toString() + n2.toString();
};

// declare variable to hold a function of a type 
// only accepts functions that accept two arguments and returns a number type
let combinervalues : (a:number, b:number) => number;
// combinervalues = combine;

//function callback added as parameter
function addAndhandle(n1:number, n2: number, cb: (num:number) => void){
    const result = n1 + n2;
    cb(result);
}

//unknown is used as a good check for value not declared but you know what it needs to be at some point
let userInput: unknown;  // adds slight typechecking
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string'){
    userName = userInput;
}

// Never should be used when you throw a error 
// should be used with error functions
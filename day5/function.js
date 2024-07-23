// Day-5 Functions

// function declaration
function isOddOrEven(num) {
    if (!num) throw new Error("Please Provide a number")

    const res = num % 2 === 0 ? "Even" : "Odd"
    console.log(`${num} is ${res}`)
}

function sqr(num) {
    if (!num) throw new Error("Please Provide a number")

    return num * num;
    // return Math.pow(num, 2);   
}
// isOddOrEven(5)
// console.log(sqr(2))

// function Expression
function findMaxFromTwo(num1,num2) {
    if (!num1 || !num2) throw new Error("Please Provide a number")

    return num1 > num2 ? num1 : num2    
}
// console.log(findMaxFromTwo(4,25))

function joinTwoStr(str1, str2) {
    if (!str1 || !str2) throw new Error("Strings are required");
    if (typeof str1 !== 'string' || typeof str2 !== 'string') throw new Error("Please provide only strings");
    return str1 + str2;
}

// console.log(joinTwoStr("helloo", 12))

// Arrow Functions
const addTwoNumbers = (num1, num2) => {
    if (!num1 || !num2) throw new Error("Please Provide a number")
    return num1+num2    
}

// console.log(addTwoNumbers(2,2))
const searchInStr = (str, searchText) => {
    if (!str || !searchText) throw new Error("Please provide string and searchtext")

    for (const search of str) {
        if (search === searchText) return true
        return false
    }
}

// console.log(searchInStr("hello", "x"))

// function parameters and default values
const product = (num1, num2 = 2) => {
    if (!num1) throw new Error("Please Provide atleast one number")
        
    return num1*num2
}

// console.log(product(2))
const greet = (personName, personAge = 18) => {
    if (!personName) throw new Error("Please Provide your name")

    return `Hello ${personName} of Age ${personAge}`
}
// console.log(greet("test"))

// Higher Order Functions
const callFunction = (fn, numOfIterations) => {
    for (let index = 0; index < numOfIterations; index++) {
        fn()
    }
}

// callFunction(() => console.log("hello"), 3)

const higherOrderFunc = (fn1, fn2, value) => {
    const resOfFn1 = fn1(value)
    fn2(resOfFn1)
}

// higherOrderFunc((num) => num*2 , (num) => console.log(num+2), 5)
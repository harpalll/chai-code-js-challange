// Understanding Closures
// const fn = () => {
//     let a = 2
//     return () => {
//         console.log(a);
//     }
// }


// const closure1 = fn()
// closure1()

// create a closure that maintains a private counter, Implement functions to increment and get the current value of a counter.

// const createCounter = () => {
//     let counter = 0;
//     return {
//         increment: () => counter++,
//         getCurrValue: () => counter 
//     }
// }

// const counter = createCounter()

// counter.increment()
// counter.increment()
// counter.increment()

// console.log(counter.getCurrValue());

// Practical Closures
// write a  function that generates unique ids, Use a closure to keep track of previously generated ID and increment it with each call.
// const generateUniqueId = () => {

//     let currentId =  0;

//     return () => {
//         currentId++;
//         return currentId
//     }
// }

// const idGenerator = generateUniqueId();

// console.log(idGenerator());
// console.log(idGenerator());
// console.log(idGenerator());

// const createUser = (name) => {
//     let user = {
//         name
//     }

//     return () => `Hello, ${user.name}`
// }

// const user = createUser("harpalsinh")
// console.log(user());

// closures in loops
// let functions = []
// const createFunction = (fnIdx) => {
//     return () => {
//         console.log(fnIdx);
//     }
// }
// for (let index = 1; index <=10; index++) {
//     functions.push(createFunction(index))
// }

// functions.forEach((fn) => fn())

// Module Pattern
// import { book } from "./book.js";

// const books = book()

// books.add({
//     id: 1,
//     name: "test",
//     author: "test"
// })
// books.add({
//     id: 2,
//     name: "test2",
//     author: "test2"
// })
// books.listBooks()
// books.remove(2)
// books.listBooks()

// Memoization
// write a function that memoizes the results of another function.Use a closure to store the results of previous computations
// const memoize = (fn) => {
//     const cache = {}
//     return function (...args) {
//         const key = JSON.stringify(args)
//         if (cache[key]) {
//             return cache[key]
//         }
//         const res = fn(...args)
//         cache[key] = res
//         return res
//     }
// }

// const add = () => {
//     return 2+2
// }

// const memo = memoize(add)
// console.log(memo());
// console.log(memo());

// create a  memoized version of a function that calculates the factorial of a number.
// const factorial = (number) => {
//     let fact = 1;
//     for (let index = 1; index <= number; index++) {
//         fact*=index
//     }
//     return fact
// }
// console.log(factorial(5));
// const memoize = (fn) => {
//     const cache = {};
//     return function (...args) {
//         const key = JSON.stringify(args)
//         if (cache[key]) {
//             console.log("result from cache");
//             return cache[key]
//         }
//         const result = fn(...args)
//         cache[key] = result;
//         console.log("Not in cache");
//         return result;
//     }
// }

// const factorial = (n) => {
//     if (n <= 1) return 1;
//     return n * factorial(n - 1)
// }



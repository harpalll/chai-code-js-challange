import { addTwoNumbers } from "./utils/addTwoNumbers.js";
import { person } from "./utils/person.js";
import {add,subtract,multiply,divide} from './utils/Mathemetics.js'
import printonetoten from "./utils/printonetoten.js";
import { book } from "./utils/book.js";
import axios from "axios";
// creating and exporting modules
// try {
//     console.log(addTwoNumbers(5,2))
// } catch (error) {
//     console.log(error)
// }

// console.log(`Person's FirstName : `,person.getFirstName())
// console.log(`Person `,person)

// Named And Default exports
// console.log(add(1,2))
// console.log(subtract(2,1))
// console.log(multiply(2,5))
// console.log(divide(10,2))

// printonetoten()

// importing entire modules
// console.log(book.BOOK_NAME);
// console.log(book.getBookName());

// using third party modules
// const data = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
// console.log(data.data)

// module bundling
// use a module bundler like webpack or parcel to bundle multiple js files into a single file.Write a script to demonstrate the building process.
// i used parcel 
// here is the command : 
// "build": "parcel build src/index.js --out-dir dist"

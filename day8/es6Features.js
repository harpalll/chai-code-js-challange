// template literals

const person = {
    name: "test",
    age: 18
}

// console.log(`${person.name} ${person.age}`)
const longStr = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`
// console.log(longStr)

// destructuring 
// const nums = [1,2,3]
// const [first,second] = nums;
// console.log(first,second)

// const book = {
//     title: "test",
//     author: "test",
//     year: 2006
// }
// const {title, author} = book

// console.log(title,author)

// spread and rest operator

// const nums = [1,2,3]
// const newArr = [...nums, 4,5,6]
// console.log(newArr)

const total = (...nums) => nums.reduce((acc, curr) => acc+=curr, 0)
// console.log(total(1,2,3,4))

// default parameters
const product = (num1, num2 = 1) => num1*num2

// console.log(product(5,2))
// console.log(product(5))

// Object literals
const book = {
    title: "test",
    author: "test",
    year: 2006
}
book.printTitleAndAuthor = function () {
    return `Title: ${this.title} - Author : ${this.author}`
}

// console.log(book.printTitleAndAuthor())

// create an object with computed property names based on variables and log the object to the console.
const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

const person2 = {
    [propName1]: "John",
    [propName2]: "Doe",
    [propName3]: 30,
};

// console.log(person2);

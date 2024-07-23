// object creation and access
const book = {
    title: "test",
    author: "test",
    year: 2006
}
// console.log(book)
// console.log(book.title,book.author)

// object methods
book.printTitleAndAuthor = function () {
    return `Title: ${this.title} - Author : ${this.author}`
}

// console.log(book.printTitleAndAuthor())
book.updateYear = function(year) {
    this.year = year
}
// book.updateYear(2008)
// console.log(book)

// nested objects
const library = {
    name: 'The Library',
    books: [
        {
            title: "test",
            author: "test",
            year: 2006
        },
        {
            title: "test2",
            author: "test2",
            year: 2008
        },
    ]
}
// console.log(library)
// console.log(library.name)
// library.books.forEach((book) => console.log(book.title))

// the this keyword
book.printTitleAndYear = function () {
    return `${this.title} - ${this.year}`
}
// console.log(book.printTitleAndYear())

// object iteration
// for (const [key,value] of Object.entries(book)) {
//     console.log(`${key} - ${value}`)
// }
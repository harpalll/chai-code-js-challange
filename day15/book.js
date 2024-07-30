export const book = () => {
    let books = []
    return {
        add: (book) => books.push(book)
        ,
        remove: (bookId) => {
            const newBooks = books.filter((book) => book.id !== bookId)
            books = newBooks
        },
        listBooks: () => console.log(books)
    }
}
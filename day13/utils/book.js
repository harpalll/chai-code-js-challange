export const book = {
    BOOK_NAME: "test",
    BOOK_AUTHOR: "test",
    BOOK_PUBLISHING_YEAR: 1990,
}

book.getBookName = function () {
    console.log(this.BOOK_NAME)
}

book.getBookPublishingYear = function () {
    console.log(this.BOOK_PUBLISHING_YEAR)
}


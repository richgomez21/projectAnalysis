// Create some book instances
let book1 = new Book('Moby Dick', 'Herman Melville', 704, new Date(2023, 6, 5));
let book2 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 200, new Date(2023, 7, 8));
let book3 = new Book('1984', 'George Orwell', 328, new Date(2023, 6, 16));
// Create a library instance and add the books to it
let library = new Library("Main Library");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library);
// Test removing a book
console.log('Removing a book...');
library.removeBook(book1);
console.log(library)
//Test finding book by title
console.log('Finding a book');
let foundBook1 = library.findBookByTitle('1984');
// Test finding a book by author
console.log('Finding a book by author...');
let foundBook2 = library.findBooksByAuthor('George Orwell');
console.log(foundBook); // Should return book3




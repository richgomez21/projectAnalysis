// Create some book instances
let basicBook1 = new Book('Moby Dick', 'Herman Melville', 704, false, new Date(2023, 6, 5));
let basicBook2 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 200, false, new Date(2023, 7, 8));
let basicBook3 = new Book('1984', 'George Orwell', 328, false, new Date(2023, 6, 16));

// Create a library instance and add the books to it
let basicLibrary = new Library("Main Library");
basicLibrary.addBook(basicBook1);
basicLibrary.addBook(basicBook2);

// Test adding a book
console.log('Adding a book...');
basicLibrary.addBook(basicBook3);
console.log(basicLibrary.getBooks()); // Should now include basicBook3

// Test removing a book
console.log('Removing a book...');
basicLibrary.removeBook(basicBook1.title);
console.log(basicLibrary.getBooks()); // Should no longer include basicBook1

// Test finding a book
console.log('Finding a book...');
let foundBook = basicLibrary.findBookByTitle('1984');
console.log(foundBook); // Should return basicBook3

// Test updating a book
console.log('Updating a book...');
basicLibrary.updateBook(foundBook.title, 
  { title: 'Nineteen Eighty-Four', 
    author: 'George Orwell', 
    numPages: 328, 
    isCheckedOut: false, 
    dueDate: new Date(2023, 6, 16)});
console.log(basicLibrary.getBooks()); // basicBook3's title should now be 'Nineteen Eighty-Four'

// Test saving to localStorage
console.log('Saving to localStorage...');
basicLibrary.saveToLocalStorage();

// Test loading from localStorage
console.log('Loading from localStorage...');
let newLibrary = new Library();
newLibrary.loadFromLocalStorage();
console.log(newLibrary.getBooks()); // Should be the same books as the old library (minus basicBook1)





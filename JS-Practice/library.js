
class Library{
    constructor(libraryName){
        this.name = libraryName;
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }

    removeBook(book){
        this.books = this.books.filter(indivBook => indivBook !== book);
    }

    checkOutBook(book){
       book.checkOutBook();
    }

    checkInBook(book){
       book.checkInBook();
    }

    findBookByTitle(title){
        
    }

    findBooksByAuthor(name){
        return this.books.filter(book => {return book.author == this.name});
    }
}

class Library{
    constructor(libraryName){
        this.name = libraryName;
        this.books = [];
    }

    getBooks(){
        return this.books;
    }


    addBook(book){
        this.books.push(book);
    }

    removeBook(title){
        this.books = this.books.filter(indivBook => indivBook.title !== title);
    }

    checkOutBook(book){
       if(book.isCheckedOut){
        console.log("books already checked out")
       }else{
        book.checkOut();
       }
    }

    checkInBook(book){
       if(!book.isCheckedOut){
        console.log("book already checked in")
       }else{
        book.checkIn();
       }
    }

    findBookByTitle(title){
       return this.books.find(book => book.title === title);
    }

    findBooksByAuthor(name){
        return this.books.filter(book =>  book.author == this.name);
    }

    getAllCheckedOutBooks(){
       return this.books.filter(book => book.isCheckedOut === true);

    }

    getALlOverdueBooks(){
    //   return this.book.filter(book => book.dueDate < new Date());
        const overdueBooks = [];
        const currentDate = new Date();
    
        for (const book of this.books) {
        if (book.isCheckedOut && book.dueDate < currentDate) {
            overdueBooks.push(book);
        }
        }
  
        return overdueBooks;
        
    };

    updateBook(title, bookDataObj){
        const book = this.findBookByTitle(title);
        if (book) {
          Object.assign(book, bookDataObj);
          console.log(`book has been updated.`);
        } else {
          console.log(`book was not found in the library.`);
        }
    }

    findMostPopularAuthor(){
       const authorCount = {};

       for(const book in this.books){
            const author = book.author;
            if(authorCount.hasOwnProperty(author)){
                authorCount[author]++;
            }else{
                authorCount[author] = 1;
            }
            let popularAuthor = null
            let maxCount = 0;

            for (const author in authorCount){
                if(authorCount[author] > maxCount){
                    maxCount = authorCount[author];
                    popularAuthor = author;
                }
            }
       }
    }

    compareTwoBooks(bookOne, bookTwo){
        if(bookOne.pages > bookTwo.pages){
            return bookOne;
        }else{
            return bookTwo;
        }
    }

    addMultipleBooks(booksArr){
        this.books.push(...booksArr);
    }

    saveToLocalStorage(){
        localStorage.setItem('libraryBooks', JSON.stringify(this.books));
    }

    loadFromLocalStorage(){
        this.books = JSON.parse(localStorage.getItem('libraryBooks')) || [];
    }
}

class Book{
    constructor(title, author, pages, isCheckedOut, dueDate){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isCheckedOut = isCheckedOut;
        this.dueDate = dueDate;
    }

    checkOut(){
        this.isCheckedOut = true;
    }
    
    checkIn(){
        this.isCheckedOut = false;
    }
}



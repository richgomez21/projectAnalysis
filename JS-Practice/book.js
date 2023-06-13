
class Book{
    constructor(title, author, pages, dueDate, isCheckedOut){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.dueDate = null
        this.isCheckedOut = false;
    }

    checkOut(){
        if(this.isCheckedOut){
            console.log("book is checked out");
        }else{
            this.isCheckedOut = true;
            this.dueDate = new Date();
            this.dueDate.setDate(this.dueDate.getDate() + 14);
            // console.log("book  has been checked out.");
        }
    }
    
    checkIn(){
        if(!this.isCheckedOut){
            console.log("books already checked in")
        }else{
            this.isCheckedOut = false;
            this.dueDate = null;
            console.log("book checked in");
        }
    }
}



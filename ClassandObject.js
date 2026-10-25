"use strict";
class Book {
    bookid;
    title;
    author;
    isavailable;
    constructor(bookid, title, author, isavailable) {
        this.bookid = bookid;
        this.title = title;
        this.author = author;
        this.isavailable = true;
    }
    dispalyBookdetails() {
        console.log("BookId" + this.bookid);
        console.log("Title" + this.title);
        console.log("Author" + this.author);
        console.log("isavailable" + this.isavailable);
    }
    issueBook() {
        if (this.isavailable) {
            this.isavailable = false;
            console.log("Book issue successfully.");
        }
        else {
            console.log("book is not available");
        }
    }
    returnbook() {
        this.isavailable = true;
        console.log("book return successfully");
    }
}
const book1 = new Book(101, "Wings of Fire", "A. P. J. Abdul Kalam", true);
book1.dispalyBookdetails();
book1.issueBook();
book1.returnbook();
book1.dispalyBookdetails();

class Libraryitem {

    itemid : number;
    title :string;

    constructor(itemid : number,title :string){

        this.itemid=itemid;
        this.title=title;
    }

    displayInfo(): void {
        console.log("Item ID:", this.itemid);
        console.log("Title:", this.title);
    }
}

class books extends Libraryitem{

author :string

constructor(itemid : number,title :string ,author :string){

       super(itemid,title)
        this.author=author;
    }

    displayInfo(): void {
         console.log(" book ItemID:", this.itemid);
        console.log(" book Title:", this.title);
        console.log("author"+this.author);
        
    }

}

class magazine extends Libraryitem{


    issuenumber:number;

    constructor(itemid : number,title :string , issuenumber:number){

        super(itemid,title)

        this.issuenumber=issuenumber;
    }

    displayInfo(): void {
        console.log("magazine Item ID:", this.itemid);
        console.log(" magazineTitle:", this.title);
        console.log("issuenumber"+this.issuenumber);
        
    }

}


const book = new books(101,"java","james")
const mag = new magazine(102,"tech today",5)

book.displayInfo()
mag.displayInfo()
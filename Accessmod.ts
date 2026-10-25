class LibraryMember {
    public memberID: number;
    private borrowedBooks: string[];
    protected membershipType: string;

    constructor(memberID: number, membershipType: string) {
        this.memberID = memberID;
        this.borrowedBooks = [];
        this.membershipType = membershipType;
    }

    borrowBook(book: string): void {
        this.borrowedBooks.push(book);
    }

    displayMember(): void {
        console.log("Member ID:", this.memberID);
        console.log("Borrowed Books:", this.borrowedBooks);
        console.log("Membership:", this.membershipType);
    }
}

class PremiumMember extends LibraryMember {
    showMembership(): void {
        console.log("Membership:", this.membershipType);
    }
}

const member = new PremiumMember(1, "Premium");

console.log(member.memberID);
member.borrowBook("JavaScript Basics");
member.displayMember();
member.showMembership();
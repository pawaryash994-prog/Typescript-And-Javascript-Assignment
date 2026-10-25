function searchItem<T>(
    items: T[],
    condition: (item: T) => boolean
): T[] {
    return items.filter(condition);
}

const Books=[
    { title: "Java Basics", author: "James" },
    { title: "Python Guide", author: "John" },
    { title: "JavaScript", author: "David" }
]

const members=[
     { memberID: 101, name: "Rahul" },
    { memberID: 102, name: "Priya" },
    { memberID: 103, name: "Amit" }
]

const foundbook=searchItem(Books,book=>
    book.title==="Python Guide"
)

const foundmember = searchItem(members,member=>
    member.memberID===103
)

console.log(foundbook);
console.log(foundmember);


let student=[
    {name:"om", marks:75},
    {name:"tom",marks:90},
    {name:"priya",marks:45},
    {name:" sneha",marks:80}
];


let passed = student.filter(student => student.marks>=60)

let names = passed.map(student=>student.name);

let total = student.reduce((sum ,student)=> sum+student.marks,0)

let average = total/student.length;

console.log("Passed Students:", passed);
console.log("Names:", names);
console.log("Average Marks:", average);
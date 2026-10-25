let number =[2,5,8,10,12,20];

let square = number.map(n => n*n)

let greater = number.filter(n =>n>15)

let sum = number.reduce((total,sum)=>{
    return total+sum
});

console.log("Squares:", square);
console.log("Greater than 20:", greater);
console.log("Sum:", sum);
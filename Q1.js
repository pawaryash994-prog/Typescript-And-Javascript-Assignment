let numbers = [10, 20, 30, 40, 50, 60];

let [first, second, , fourth, ...remaining] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Fourth:", fourth);
console.log("Remaining:", remaining);
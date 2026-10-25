let student={
    name:"rahul",
    age:21,
    city:"mumbai"

}

let { 

    name,
    age,
    city:studentcity,
    course ="unknown"
} =student;


console.log(name);
console.log(age);
console.log(studentcity);
console.log(course);


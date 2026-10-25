class person{

    constructor(name ,age){
        this.name=name;
        this.age=age
    }

}

class Employee extends person{

    constructor(name ,age, empid,salary){
    super(name,age);

    this.empid=empid
    this.salary=salary

    }
    displayDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Employee ID:", this.empid);
        console.log("Salary:", this.salary);
    }
}

const emp = new Employee("Yash", 22, 101, 30000);

emp.displayDetails()
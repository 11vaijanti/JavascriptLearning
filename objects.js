let student = {
    name: "Rahmaya",
    age: 22,
    course: "Computer Engineering",
    marks: 85
};
console.log(student);

let employee = {
    id : 101,
    name1 : "maya",
    salary : 30000
}
console.log(employee)

let employee1 = new Object();
    employee.id = 101;
    employee.name1 = "maya";;
    employee.salary = 30000
console.log(employee1)
//access using . notation
console.log(student.name)
//access using bracket notation
console.log(student["name"])

//update 
student.age = 20
//delete
delete student.marks
console.log(student)

//in operator : gives boolean output
console.log("age" in student)
console.log("city" in student)

//hasOwnProperty :  gives boolean output
console.log( student.hasOwnProperty("age"))
console.log(student.hasOwnProperty("marks"))

//object methods
let functions = {
    id:1,
    name2: "maya",
    age2:22,
    
    greet:function(){
        console.log("Hello! My name is maya")
    },
    display(){
        console.log(this.name2)
        console.log(this.age2)
    }
    //this keyword will not work with arrow function
}
functions.greet()
functions.display()

//nested objects
let student1 = {
    name3: "Yash",
    age3: 22,

    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
};
let result = Object.keys(student1);
console.log(result);

console.log(student1.name3);
console.log(student1.address.city);
console.log(student1.address.state);

for (let [key, value] of Object.entries(student1)) {
    console.log(key, value);
}
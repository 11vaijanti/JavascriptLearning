//Javascript Object Notation : store and exchange data between applications
//not a programming language, it is a data-interchange fromat
let student = { 
    name: "Rahul",
    age: 22,
    city: "Pune"
};  //an object

//JSON.stringify()
let jsonData = JSON.stringify(student); //converts object into string

console.log(jsonData);
console.log(typeof jsonData);

//To convert json object into javascript object: json.parse()
let jsonData1 = '{ "name1": "Maya",  "age": 22 }'
let student1 = JSON.parse(jsonData1)
console.log(student1)
console.log(typeof student1)

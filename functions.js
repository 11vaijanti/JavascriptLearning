/*
Function declaration.
Function expression.
Arrow functions.
Parameters and arguments.
Return statement.
Default parameters.
Rest parameters.
Callback functions.
Local and global scope.
Block scope.
Hoisting.
Closures.
*/
function onePlusAvg(x,y){
    return 1+(x+y)/2
    //return Math.round(1+(x+y)/2)
    
}
let a = 1;
let b = 2;
let c = 3;
console.log("Average of a and b is",onePlusAvg(a,b))
console.log("Average of a and b is",onePlusAvg(c,b))
console.log("Average of a and b is",onePlusAvg(a,c))

let marks = {
    maya:80,
    vaijanti:100,
    lovish:40,
    yash:70
}
for(let i =0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]])
    //Object.keys will return every single element, like an array.
}

function greet(name = "Vaijo"){
    console.log("Hello" + name)
}
greet("Maya")

//REST parameters
//Acceptp multiple arguments
function add(...numbers){
    let sum = 0
    for(let num of numbers){
        sum += num
    }
    return sum
}
console.log(add(19,39))
console.log(add(10,20,30))

function student(name,...marks){
    console.log("Name " + name)
    console.log("Marks "+marks)
}
student("maya", 90,86,100)


//CALLBACK function
function greet(name){
    console.log("Hello "+name)
}
function processUser(callback){
    let username = "Maya"
    callback(username)
}
processUser(greet) //Passing one functiona as an argument to another function

function createBankAccount() {

    let balance = 1000;

    return {

        deposit: function(amount) {
            balance = balance + amount;
            console.log("Balance:", balance);
        },

        withdraw: function(amount) {
            balance = balance - amount;
            console.log("Balance:", balance);
        }

    };

}

const account = createBankAccount();

account.deposit(500);
account.withdraw(200);
//Add elements to array
let arr = [1, 2, 3, 4, 5, 6, 7];

const prompt = require('readline-sync')
let a = prompt.question("Enter a number: ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

//filter ele that are divisible by 10
let divisiblebyten = arr.filter(elements =>{
    return elements % 10==0
})
console.log(divisiblebyten)

//square of given numbers
//const prompt = require('readline-sync')
let array = [];
let n = prompt.questionInt("How many numbers do you want to enter? ");

for (let i = 0; i < n; i++) {
    let a = prompt.questionInt("Enter number: ");

    array.push(a * a);
}

console.log("Squares of numbers:", array);
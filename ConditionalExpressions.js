const prompt = require('prompt-sync')();
let a = prompt('hey whats your age?');
a = Number.parseInt(a) //string to number
console.log(typeof a)
if(a>0){
    alert("valid age")
}
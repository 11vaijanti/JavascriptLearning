let num = [3,5,1,2,4]
for(let i =0;i<num.length;i++){
    console.log(num[i])
}
//forEach loop
num.forEach((element)=>{
    console.log(element+element)
})

//for...of
for (let variable of num) {
    console.log(variable)
}
let name1 = "JavaScript";

for (let character of name1) {
    console.log(character);
}

//array.from:Convert a string into an array
let greet = "hello"
let arr1 = Array.from(greet)
console.log(arr1)

//for...in
for (let index in num) {
    console.log(index);
}
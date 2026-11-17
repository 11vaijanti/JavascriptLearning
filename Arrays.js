//In js type of array is object 
//Arrays are immutable
let namearray = ["vaijo","maya","yash"]
let marks = [100,95,80,"not present"]
console.log(namearray)
console.log(marks.length)
console.log(namearray.length)
marks[5] = 91
console.log(marks)

//Array methods
let num = [1,2,3,34,4]
let b = num.toString()
console.log(b)
let c = num.join("_")
console.log(c)
num.pop()
console.log(num)
num.push(35)
console.log(num)
let r = num.shift()
console.log(r,num) // Remove first element from original array. It modifies original array
let s = num.unshift()
console.log(s,num)// add first element from original array. It modifies original array

//map() method creates a new array by performing an operation on every element of the original array.
let newarray = num.map(element =>{
    return element*2
})
console.log(newarray)

let newarray1 = num.map((elements,index) =>{
    return elements+index
})
console.log(newarray1)

//The filter() method creates a new array containing only those elements that satisfy a particular condition.
let result = num.filter((element) => {
    return element % 2 == 0;
});

console.log(result);

//The reduce() method reduces all elements of an array into a single value.
let sum = num.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    //accumulator – Stores the accumulated (previous operation's) result. if addition then addn , if multiplication then multiplication
    //currentValue – Represents the current element being processed.
}, 0);

console.log(sum);

//splice used add new elements...(Add, remove, replace)
num.splice(1,3)//remove elements from index 1 to 3
//console.log(num)
num.splice(2,0,50)//add 50 at index 2
//console.log(num)
num.splice(1,1,99)//replace element at index 1
console.log(num)
//flat() removes that nested level and brings its elements into the main array.
let num1 = [1, 2, [3, 4, [5, 6]]];
let result1 = num.flat(Infinity);
console.log(result);

/*The flatMap() method performs two operations:
1. Applies map() to every element.
2. Flattens the resulting array by one level.*/
let nums = [1, 2, 3];

let result2 = num.flatMap(element => {
    return [element, element * 2];
});
console.log(result2);
let namee = "Maya"
console.log(namee.length)
let friend = "Yash"
console.log(friend + " is a friend of Maya")

//*Template Literals
let boy1 = "Danish"
let boy2 = "Mrunknown"
//Mrunknown is a friend of Danish
let sentence = `${boy2} is a friend of ${boy1}`
//it will return boy1 instead of boy2 and at place of boy1 it will print boy2
console.log(sentence)

//Escape Sequence character
let fruit = 'Bana\na'
console.log(fruit.length)
console.log(fruit)

let str = 'Hello\nWorld';
console.log(str);

let str1 = "Hello\World";
console.log(str1);

let str3 = " Hello World "
console.log(str3[0])
console.log(str3.at(-1))
console.log(str3.trim())//Remove unwanted space
console.log(str3.toUpperCase())
console.log(str3.indexOf("o"))
console.log(str3.slice(1,3))
console.log(str3.replace("World", "Maya"));
console.log(str3.endsWith(" this is maya "));//Gives boolean value
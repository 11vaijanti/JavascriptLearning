/*element.addEventListener("event", function() {
    // Code to execute
});*/
let button = document.getElementById("btn");
let heading = document.getElementById("heading");

button.addEventListener("click", function() {
    alert("Button was clicked!");
});
//dbclick, mouseover, mouseout

button.addEventListener("dblclick",function(){
    console.log("double clicked")
})

heading.addEventListener("mouseover", function() {
    heading.style.color = "red";
});

heading.addEventListener("mouseout", function(){
    heading.style.color = "black"
})

//keydown : executes when you press a
// keyup : executes when you release a
document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        console.log("Enter key pressed");
    }

    if (event.ctrlKey && event.key === "s") {
        console.log("Ctrl + S pressed");
    }

});
/*event.key
event.code
event.ctrlKey
event.shiftKey
event.altKey*/

//input and change
let username = document.getElementById("username");
let output = document.getElementById("output");

username.addEventListener("input", function() {

    output.textContent = username.value;

});
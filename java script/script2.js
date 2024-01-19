// JavaScript Display Possibilities -----------
//1.innerHTML
//2.document.write()
//3.window.alert()
//4.console.log()

document.getElementById("demo").innerHTML = "Hello JavaScript";
document.write(5+6); // after an HTML document is loaded, will delete all existing HTML
//window.alert(5+6); // after an HTML document is loaded, will delete all existing HTML we can skip window word
console.log(5+6);

// JavaScript Print -----------
// <button onclick="window.print()">print the page</button> print the current page 

//JavaScript Statements -----------

let x,y,z; // cannot be redeclare
x = 5;
y = 6;
z = x + y;

{
    var t =2; // we can use outside the block but we can redeclare again
}
var t = 3;
//alert(t)

//so we will use only let and const

//JavaScript Const ------------
//can not resigned
//array
const cars = ["toyota","bmw","honda"];
cars[0] = "ford"; //can change an element:
cars.push("audi") //can add an element:
// alert(cars);

//object
const car = {type:"toyota", model:"500", color:"black"};
car.color = "white" //can change a property:
car.owner = "john" //can add a property:

//Hoisting ------------
//can use the variable before it is declared
carName = "Volvo";
var carName;


//JavaScript Comparison Operators
/* ==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator */

let text1 = "aski"
let text2 = "anaan"
let text3 = text1 + "" + text3


//JavaScript Arithmetic Operators
// &&	logical and
// ||	logical or
// !	logical not
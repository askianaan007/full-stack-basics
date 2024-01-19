// let name = "aski";
// let age = 24;
// let hasHobby = true;

// function displayUser(userName, userAge, userHasHobby) {
//   return (
//     "User name is " +
//     userName +
//     "\n" +
//     "age is " +
//     userAge +
//     "\n" +
//     "has hobby? " +
//     userHasHobby
//   );
// }

// console.log(displayUser(name, age, hasHobby)); //we cant use the local scope variable outside the function

// //arrow function

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));

// //same as the function

// const sum1 = (a, b) => {
//   return a + b;
// };
// console.log(sum1(1, 2));

// const hasOne = (a) => a + 1;
// console.log(hasOne(1));

// //object

// const person = {
//   name: "aski",
//   age: 24,
//   greet: function () {
//     console.log("hi i am " + this.name); //this use to access the object
//   },
// };

// person.greet();

// //array

// const hobbies = ["sports", "cooking", 2, 1];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// hobbies.map((hobby) => {
//   return "Hobby is" + hobby;
// });

// hobbies.push("programming"); //add the element in the array
// console.log(hobbies.map((hobby) => "Hobby is " + hobby)); //map use to change in to the array

// const persons = { name: "aski" };
// persons.name = "anaan"; //we can change the value of the object
// console.log(persons);

// const hobbies1 = ["sports", "cooking", 2, 1];
// const hobbies2 = hobbies1.slice(); //copy the array or we can use the spread operator [...hobbies1]
// hobbies2.push("programming");
// console.log(hobbies1);
// console.log(hobbies2);

// const student = {...persons}
// console.log(student)

//jvl code

// const person1 = {name:"aski007"}
// const person2 ={...person1,age:26} //spread operator

// const array1 = (...arg)=>{ //rest operator
//   return arg;
// }

// console.log(array1(1,2,3,4,5));

//destructioring

// const person = {name:"aski"};
// // const name = person.name;
// console.log(name);

// const  {name,age} = person;
// console.log(name,age);

//using w3 school

// document.getElementById("demo").innerHTML = "Hello JavaScript"; //we can use the id to change the html element
// document.getElementById('myImage').src='bulbon.jpb' //we can use the id to change the image
// document.getElementById("demo").style.fontSize = "35px"; //we can use the id to change the css element

// ----------jvl code----------------

// Asynchronous JavaScript

// setTimeout(() => { //setTimeout is a function in the window object show the output after the 2 sec
//     console.log('timer is done');
// }, 2000)

// const fetchData = (callback)=>{
//     callback("data is fetched");
// }

// setTimeout(() => {
//     fetchData((result)=>{
//         console.log(result);
//     })
// }, 2000);

// console.log('hello');

//promise

// let myPromise = new Promise((myResolve, myReject) => {
//   myResolve("aski");
// });

// myPromise
//   .then((name) => {
//     return "Name is " + name;
//   })
//   .then((name) => {
//     console.log(name);
//   })
//   .catch(() => {
//     console.log("Failed");
//   });




 
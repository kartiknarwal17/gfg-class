//global scobe 
// var a = 10 ;
// function print() {
//     console.log(a);
// }
// print();
// console.log(a); // 10

//function scope 


// function print() {
//     var a = 10 ;
//     console.log(a);
// }
// print();

//block scope
// {
//     let a = 10;
//     const b = 20;
//     var c = 30;
//    // console.log(a); // 10
//    // console.log(b); // 20
//    // console.log(c); // 30
// }
//  console.log(c); // 30
//   console.log(a); 
//  function print() {
//     var a = 10;
//  }
//  print();
 
// function outer() {
   
//     function inner() {
//         console.log(a);
//     }
//     inner();
// }
// outer(); // 10

// function parents() {
//     var a = 10;
//     function child() {
//         console.log(a);
//         function grandChild() {
//             console.log(a);
//             function greatGrandChild() {
//                 console.log(a);
//             }
//             greatGrandChild();
//         }
//         grandChild();
//     }
//     child();
// }
// parents(); // 10
    
// function sum(...args) {
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum = sum + args[i];
//     }

// console.log(args)}

// sum(1,2, 3, 4, 5); 

// function outer() {
//     let value = "kartik";
//     function inner() {
//         console.log(value);
//     }
//    inner();
// }
// outer(); // "kartik"

// function outer() {
//     let value = "kartik";
//     function inner() {
//         console.log(value);
//     }
//     return inner;
// }
// let result = outer();
// console.log(result); // [Function: inner]
// result(); // "kartik"

// const original = {
//   name:  {name: "Kartik"},
//   address: { city: "Dehradun" }
// };

// const shallow = { ...original }; // using spread operator

// shallow.name.name = "Narwal";          // OK - independent
// shallow.address.city = "Delhi";   // Changes original too!

// console.log(original.address.city); // Output: "Delhi"
// console.log(shallow.address.city); // Output: "Delhi"
// console.log(original.name.name ); // Output: "Kartik"
// console.log(shallow.name.name); // Output: "Narwal"

// function sayHello(name, callback , callback2) {
//     console.log("Hello, " + name);
// callback();
// callback2();
// }
// //sayHello("Kartik"); // Output: Hello Kartik
// function greet () {
//     console.log("good morning !");
// }
// function saybye(){
//     console.log("good bye !");
// }
// function ask() {
//     console.log("How are you ?");
// }
// sayHello("Kartik" , ask, saybye ); // Output: Hello Kartik

// //its drwaback of callback 
// // 1- ioc Inversion of Control
// // 2- callback hell - puramid of droom 

// function makesandwich(bread , cb ) {
//     console.log("Making a sandwich with " + bread);
//     cb();
// }
// function addFilling(filling,cb) {
//     console.log("Adding " + filling + " to the sandwich");
//     cb();
// }
// function addVegetables(vegetables, cb) {
//     console.log("Adding " + vegetables + " to the sandwich");
//     cb();
// }
// function addSauce(sauce ,cb) {
//     console.log("Adding " + sauce + " to the sandwich");
//     cb();
// }
// function addCondiments(condiment, cb) {
//     console.log("Adding " + condiment + " to the sandwich");
//     cb();
// }
// function serveSandwich(cb) {
//     console.log("Serving the sandwich");
//     cb();
// }
// makesandwich("Whole Wheat Bread", function()  {
//     addFilling("Chicken", function() {
//         addVegetables("Lettuce and Tomato", function() {
//             addSauce("Mayonnaise", function() {
//                 addCondiments("Salt and Pepper", function() {
//                     serveSandwich(function() {
//                         console.log("Sandwich is ready to eat!");
//                     });
//                 });
//             });
//         });
//     });
// });


// let amount = [200,400 , 500 , 600, 700 , 800] ;
// {

// let amount = [200, 400, 500, 600, 700, 800];

// function demopercentage() { 

//   for (let i = 0; i < amount.length; i++) {
//     let demopercentage = amount[i] * 0.10;
//     console.log("10% of", amount[i], "is", demopercentage);
//   }
// }

// demopercentage();
// }
// {
// let amount = [200, 400, 500, 600, 700, 800];

// function getTenPercent(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let tenPercent = arr[i] * 0.10;
//         result.push(tenPercent);
//     }
//     return result;
// }

// let tenPercentAmounts = getTenPercent(amount);
// console.log(tenPercentAmounts);
// }
// {
// let amount = [200, 400, 500, 600, 700, 800];

// function gettwentyPercent(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let tenPercent = arr[i] * 0.20;
//         result.push(tenPercent);
//     }
// //     return result;
// // }

// // let twentypercentAmounts = gettwentyPercent(amount);
// // console.log(twentyPercentAmounts);
// // }
// // let amount = [200, 400, 500, 600, 700, 800];
// // function gettwentyPercent(arr) {
// //     let result = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         let twentyPercent = arr[i] * 0.20;
// //         result.push(twentyPercent);
// //     }
// //     return result;
// // }
// // let twentyPercentAmounts = gettwentyPercent(amount);
// // console.log(twentyPercentAmounts);

// //calculate all percentages using callback functions

// let amount = [200, 400, 500, 600, 700, 800];
// function calculatetenPercent(amount) {
//     return amount * 0.10;


// }
// function calculatetwentyPercent(amount) {
//     return amount * 0.20;
// }
// function calculateThirtyPercent(amount) {
//     return amount * 0.30;
// }
// function calculateFortyPercent(amount) {
//     return amount * 0.40;
// }
// function calculateallPercentages(amount,cb) {
//     let result = [];
//     for (let i = 0; i < amount.length; i++) {
//         let percentage = cb(amount[i]);
//         result.push(percentage);
//     }
//     return result;
// }
// console.log(calculateallPercentages(amount, calculatetenPercent));
// console.log(calculateallPercentages(amount, calculatetwentyPercent));
// console.log(calculateallPercentages(amount, calculateThirtyPercent));
// console.log(calculateallPercentages(amount, calculateFortyPercent));

// //map  making a highorder function as map array prototypes 
// Array.prototype.myMap = function (cb) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(cb(this[i], i, this));
//     }
//     return result;
// };
// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.myMap(function (num) {
//     return num * num;
// });
// console.log("answer of this squares " + squares); // Output: [1, 4, 9, 16
// //, 25]
// //filter making a highorder function as filter array prototypes



// let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function addtwo(num) {
//     return num + 2;
// }
// function isEven(num) {
//     return num % 2 === 0;
// }
// Array.prototype.numbers = function (cb) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i])) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// }
// console.log(numbers1.numbers(isEven)); 
// console.log(numbers1.numbers(addtwo)); 


// map high order function

//  let numbers2 = [1, 2, 3, 4, 5];
//  numbers2.map((Element) => {
//    // return Element * 2;
//     console.log(Element * 2);
//  });

//  //filter high order function

//  numbers2.filter((Element) => {
//     // return Element > 2;
//      console.log(Element > 2);
//      }
//     );
   
// // reduce high order function


// //let numbers = [1, 2, 3, 4, 5];

// let sum = numbers2.reduce(function (total, current) {
//     return total + current;
// }, 0);

// console.log(sum); // Output: 15

// // reduce high order function with arrow function

let arr5 = [1, 2, 3, 4, 5]
    .map((Element) => {
        return Element * 2;
    })
    .filter((Element) => {
        return Element > 2;
    })
    .reduce((total, current) => {
        return total + current;
    }, 0);
console.log(arr5);
console.log(arr5);
console.log(arr5); // 
 // Output: 30

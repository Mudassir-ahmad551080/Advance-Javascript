// // This apply call and Bind in javascript 

// let user = {
//     name:'mudassir',
//     age: 25,
// }

// let getDetails= function(city, country){
//         console.log(`User name is ${this.name} age is ${this.age}`);
        
//     }

// getDetails.call(user)

// // let user2 = {
// //     name:'ali',
// //     age: 30,
// // }   

// // let user3 = {
// //     name:'ahmed',
// //     age: 35,
// // }

// // // Using call to borrow the getDetails method from user object
// // user.getDetails.call(user2); // Output: ali
// // user.getDetails.call(user3); // Output: ahmed

// let user = {
//     name:'mudassir',
//     age: 25,
// }

// let user2 = {
//     name:'ali',
//     age: 30,
// }

// let greet = function(){
//     console.log(`Hello ${this.name}, welcome to the world of JavaScript!`);
// }

// const boundGreet = greet.bind(user2);
// boundGreet(); // Output: Hello mudassir, welcome to the world of JavaScript!
// const timer = {
//   name: "Ali",
//   start: function() {
//     setTimeout(function() {
//       console.log(this.name); // kya aayega?
//     }, 1000);
//   }
// };

// timer.start();


// const timer = {
//   name: "Ali",
//   start: function() {
//     setTimeout(() => {
//       console.log(this.name); // "Ali" ✅
//       // arrow function ka apna this nahi
//       // bahar wala this liya = timer object
//     }, 1000);
//   }
// };

// timer.start();

// const obj = {
//   value: 42,
//   getValue: function() {
//     return this.value;
//   },
//   getValueArrow: () => {
//     return this.value;
//   }
// };

// console.log(obj.getValue());      // ?
// console.log(obj.getValueArrow()); // ?
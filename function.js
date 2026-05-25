// // clsure

// let clsure = function  clsure(a) {
//     console.log(`Total Views: ${a}`);
//     let c = 10;
//     return function (b) {
//         return a + b + c;
//     }
// }

// let f1 = clsure(10);
// console.log(f1(10)); // 25  
// console.log(f1(20)); // 35
// console.log(f1(30)); // 45


// let clsure = function(a,b,c) {
   
//     return {
//         getTwoSum : function() {
//             return a + b;
//         },
//         getThreeSum : function() {
//             return a + b + c;
//         }
//     }
// }

// const obj = clsure(10,20,30);
// console.log(obj.getTwoSum()); // 30
// console.log(obj.getThreeSum()); // 60
// function bankAccount() {
//   let balance = 1000; // private — bahar se access nahi

//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log("Balance:", balance);
//     },
//     withdraw(amount) {
//       balance -= amount;
//       console.log("Balance:", balance);
//     }
//   };
// }

// const myAccount = bankAccount();
// myAccount.deposit(500);  // Balance: 1500
// myAccount.withdraw(200); // Balance: 1300
// // console.log(balance);    // ❌ Error — direct access nahi
// function multiply(x) {
//   return function(y) {
//     return x * y; // x yaad hai closure ki wajah se
//   };
// }

// const double = multiply(2);
// const triple = multiply(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15

// const user = {
//   name: "Ali",
//   greet: function() {
//     console.log(this.name);
//   }
// };

// const great1 = user.greet
// great()
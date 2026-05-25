// // const datas = [
// //     {name: 'Alice', age: 30},
// //     {name: 'Bob', age: 25},
// //     {name: 'Charlie', age: 35},
// //     {name: 'David', age: 28}
// // ]

// // function getData (){
// //     let output = ''
// //     setTimeout(() => {
// //         datas.forEach((value,index)=>{
// //            output = output+`<li>${value.name}</li>`
// //         })
// //        document.body.innerHTML = output
// //     }, 1000);
// // }



// // function creatData(newData){
// //     return  new Promise((resolve,reject)=>{
// //     setTimeout(() => {
// //         datas.push(newData);
// //         let error = false;
// //         if(!error){
// //             resolve();
// //         }
// //         else{
// //             reject("Someting went wrong")
// //         }
// //     }, 500);
// //     })
// // }

// // // creatData({name:"mudassir",age:20}).then(getData)

// // async function start(){
// //    await creatData({name:"mudassir",age:20})
// //    getData();
// // }

// // start();

// // const p1 = Promise.resolve("User ✅");
// // const p2 = Promise.resolve("Server Error ✔");
// // const p3 = Promise.resolve("Orders ✅");

// // Promise.all([p1, p2, p3])
// //   .then(results => {
// //     console.log(results); // kabhi nahi aayega
// //   })
// //   .catch(error => {
// //     console.log(error); // "Server Error ❌"
// //     // p2 fail hua — poora Promise.all fail!
// //     // p1 aur p3 ka result bhi nahi mila
// //   });

// // Teen nested callbacks chahiye
// // Socho — pehle user lo
// // phir us user ke orders lo
// // phir us order ki detail lo

// // getUser(function(user) {
// //     getOrder(function(order){
// //       getOrderDetails(function(details){
// //         console.log("Programm is finish");
        
// //       })
// //     })
// // });

// // Hint:
// // async function loadData() {
// //   try {
// //     const user = await getUser();
// //     const order = await getOrder(user);
// //     const details = await getOrderDetails(order);
// //     console.log("Programm is finish");
// //   } catch(err) {
// //     console.error("Error occurred:", err);
// //   }
// // }
// // Yeh functions already bane hue hain — tumhe sirf use karna hai

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId === 1) {
//         resolve({ id: 1, name: "Ali Khan", email: "ali@gmail.com" });
//       } else {
//         reject("User not found!");
//       }
//     }, 1000);
//   });
// }

// function getOrders(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId === 1) {
//         resolve([
//           { orderId: 101, item: "Laptop", price: 85000 },
//           { orderId: 102, item: "Mouse", price: 1500 },
//         ]);
//       } else {
//         reject("No orders found!");
//       }
//     }, 1000);
//   });
// }

// function getOrderDetail(orderId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (orderId === 101) {
//         resolve({
//           orderId: 101,
//           item: "Laptop",
//           price: 85000,
//           status: "Delivered ✅",
//           address: "Karachi, Pakistan"
//         });
//       } else {
//         reject("Order detail not found!");
//       }
//     }, 1000);
//   });
// }

// let a = 100;
// let z  = a++;

// console.log(a+z)
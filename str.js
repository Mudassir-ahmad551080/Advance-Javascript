// function palchecker(str){
//     let another = str.split('').reverse().join('');
//     if(str === another){
//         console.log('It is a palindrome');
//         return true;
//     }
//     else{
//         console.log('It is not a palindrome');
//         return false;
//     }
// }

// console.log(palchecker('loop'))

// write a javascript function that takes a string as input and returns the string into alphabitical order

// function alphabetOrder(str){
//     return str.split('').sort().join('')
// }

// console.log(alphabetOrder('cba'))

// function  reverseNumner(num) {
//     let rev = 0;
//     while (num>0) {
//         rem = num%10;
//         rev = rev*10+rem
//         num = Math.floor(num/10)
//     }
//     return rev
// }

// console.log(reverseNumner(123));

// let string = "hello what is your name"

// let anotherstr = string.split(" ").map((str)=>{
      
//    let newStr = str.charAt(0).toUpperCase()+str.substring(1);
//    return newStr
    
// });

// console.log(anotherstr.join(" "));


// function StrChecker(str){
//     let obj = {}
//   str.split("").forEach((ele)=>{
//      if(obj.hasOwnProperty(ele)){
//         obj[ele]++;
//      }
//      else{
//         obj[ele] = 1
//      }
//   });
//   console.log(obj)
// }

// StrChecker('apple')


// Yeh teeno functions PEHLE likho file mein
function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: "Ali Khan", email: "ali@gmail.com" });
      } else {
        reject("User not found!");
      }
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve([
          { orderId: 101, item: "Laptop", price: 85000 },
          { orderId: 102, item: "Mouse", price: 1500 },
        ]);
      } else {
        reject("No orders found!");
      }
    }, 1000);
  });
}

function getOrderDetail(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderId === 101) {
        resolve({
          orderId: 101,
          item: "Laptop",
          price: 85000,
          status: "Delivered ✅",
          address: "Karachi, Pakistan"
        });
      } else {
        reject("Order detail not found!");
      }
    }, 1000);
  });
}

// Phir apna function likho
async function loadUserDashboard(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id); // ← user.id pass karo
    const orderDetail = await getOrderDetail(orders[0].orderId); // ← yeh fix karo
    
    console.log("User:", user);
    console.log("Orders:", orders);
    console.log("Latest Order:", orderDetail);
    
  } catch(err) {
    console.error("Error:", err);
  }
}

loadUserDashboard(1);
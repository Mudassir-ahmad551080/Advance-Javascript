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
// let arr = [1,2,3,4,5,6,7,8]

// let sum = 0;

// for (let i = 0; i <arr.length; i++) {
 
//      sum = sum+arr[i]
    
// }

// console.log(sum)

// let array =  [1,2,3,4,5,9];

// for(let i = 0;i<array.length; i++){
//     if(array.length === array.length){
//         console.log(array[i])
//     }
// }

// write a javascript function which find the most frequent element in array

function freqElement(arr){
    let freq = {}
    arr.forEach((val)=>{
        if(freq.hasOwnProperty(val)){
            freq[val]++;
        }
        else{
            freq[val] = 1;
        }
    });
    Object.keys(freq).forEach((val,index)=>{
        console.log(val,index)
    })
}

freqElement([1,2,3,4,5,5,5,6,7,7,7,1,1,2,2,2,2,2]);
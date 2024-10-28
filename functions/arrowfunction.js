// let result=(c)=>{
//     console.log(c);
// }
// result("naresh");

// //convert array into String 

// let array=[1,2,3];
// let n=array.length;

// function array_to_String(array,n){
//     let result="";
//     for (let i = 0; i <n; i++) {
//         result=result+array[i];
//     };
//     return result;
// }
// console.log(array_to_String(array,n));


//reverse String

function reverse(str,n){
    let bag="";
    for (let i = n-1; i>=0;i--) {
        bag=bag+str[i];   
    }
    return bag;
}
let array=["goku","gohan","vegita","mom","dad"];

// for (let i = 0; i < array.length; i++) {
//     let result=reverse(array[i],array.length);
//     if(result===array[i]){
//         console.log(array[i],"is palindrome")
//     }
//     else{
//         console.log(array[i],"is not palindrome");
//     }
// }

let reversearray=[];
for (let i = 0; i < array.length; i++) {
    let result=reverse(array[i],array[i].length);
    reversearray.push(result);
};
console.log(reversearray);
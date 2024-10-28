function sum(a,b){
return a+b;
}
// //its return something its return to the function call
// }
// //console.log(sum(1,2));

// let result=sum(1,2);

// function mul(c,res){
//     console.log(c*res);
// }
// mul(2,result);



function mul(a,b,c){
    let sumresult=sum(a,b)/* it will store the value 1,2 here */
    console.log(c*sumresult);
}
mul(1,2,3);
// let factor=0;
// let number=4;
// for(let i=2;i<=number;i++){
//     if(number%i==0){
//         factor++;
//     }
// }
// (factor>1)?console.log("not a prime"):console.log("prime");


function check_prime(number){
    let factor=0;
//let number=4;
for(let i=2;i<=number;i++){
    if(number%i==0){
        factor++;
    }
}
(factor>1)
      ?console.log(number,"not a prime")
      :console.log(number,"prime");
}


for (let i = 3; i <=10; i++) {
    check_prime(i);   
}
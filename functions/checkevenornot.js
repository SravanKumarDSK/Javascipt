function check_even_or_odd(number){
    if(number%2==0){
        return true;
    }else{
        return false;
        }
}
let array=[1,2,3,4,5,6,7,8,9,10]
let count=0;
for (let i = 0; i < array.length; i++) {
    let result=check_even_or_odd(array[i]);
    if(result){
        count++;
    }
}
console.log(count);
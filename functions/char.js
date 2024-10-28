let a="c";

function check_small_character(char){
    let result=false;
    let lower="abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < lower.length; i++) {
        if(char===lower[i]){
            result=true;
            break;
        }  
    }
    return result;
}
let output=check_small_character(a);
console.log(output);

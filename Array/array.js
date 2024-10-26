let array=[1,,3,44,2,3,4,5,6,7,8];

let object={};
for(let i=0;i<array.length;i++){
    if(object[array[i]]===undefined){
        object[array[i]]= 1;
    }else{
        object[array[i]]++;
    }
}
console.log(object);
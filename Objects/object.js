let students=["goku","gohan","piccalo","chichi"];
let score=[40,34,32,67];
let result=[];

for(let i=0;i<students.length;i++){
    let obj={};
    obj.name=students[i];
    obj.score=score[i];
    result.push(obj);
}
console.log(result);

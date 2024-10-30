function data(callback){
    setTimeout(()=>{
        console.log("data");
        callback();
    },2000);
}//hof
function processData(){
    console.log("Processing the data");
}
 data(processData);//this is the call back function 
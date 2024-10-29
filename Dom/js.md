javascript through out interaction with html by dom 

remote control is dom

allows us interact with html
dom is mediator 
translator is javascript and html 

internally its object of html


id always be unique


internally its look like object dom will convert it into dom 

innerText
innerHtml both are same given output but silde differnt be there

without html we can not target on them 


class is give us return as array 

even can get index based also here 
class[0];

we can print as data here in for loop

class means multiple classes we can give same name

tag name also we can give here document.getElementbytagName

accumulated form of array all the tagname

we can get it all the array in the for loop

query selector matches with a css selector 

queryselectorAll - in the form of array will give us 


query selector will gives only one element


improvised we are usong event handler it will take two argument 

first arg will take it event name we will not using name on term instead for onclick for only click 

second arg is function u have to declare just give the name of function how many time u have click on that submit button then it will shows number of times in console


any function u can write in the pass as argument like arraow function and anonymous function normal function also we can do it but we can call directly here 

in addeventListener u must be declare only 
 execute only one function

 u can store thevalue into the variable then u can take ref as call the method add event listener 

 directly we can call it in one line


hof we can write the logic here

mouseenter 

multiple events we can write here

you can not use outside div in the inside div 


if have div and container then target is all then #container>div 

boxes is array right so we can get the method in forEach()in the method we can pass function

every addevent listener need to be trigger then go for the another function in the second argument

event.target.innerText


eval()-it will calculate given us result 



advanced javascrpt 

asynchronous programming

js will read each line and execute it will only handle at the time one line -- synchrnous its follow the order

top to bottom execute 

single threaded execution


asynchronous programming-

execution context
   left sode creation phase or memory phase
   right side execution phase

creation phase: all the variable function declaration will be stored here 

let a;

by default is in js -undefined 

execution phase
a=10;


hoising:

global scope
block scope

a=10;
console.log(a);
let a;

it will give us error reference error because variable is not declare here


let a;
console.log(a);
a=10;

it will give us undefined value then assign the value 

if u assign the variable then only will get default value if assign the value give directly then it will get error reference error


let,const are block scope 
they will create the values but we ca not access the values 

in creation phase have another zone here temperal dead zone-adding the values here 

var is global scope anywhere we can get it 

print();

function print(){
    console.log("print");
}

always default happening function declaration move to the top of the scope 

interpreter is compiler

hoising is the default behaviour 

again it will create the execution context in function and varaible declaration 

internally we have stack scenerio

overcome from synchronous mode  
web api:to make asnyc programming possible js online is not enough.

webapi async programming possible we also need the we api 

local storage from browser

local storage
setTimeout
setInterval
fetch


js is not enough us we have also web brower api 

web browser have multiple methods we are use using such methods here avoiding the synchronous programming so we are use 

setTimeout- it is given by browser 
it takes two arguments will be a function which we want to execute
second arg is duration delay after whuch you want to execute this function after have consumed time then only come into the javascript you must be in seconds only 
in js it will give to the web browser after two seconds it will give us output 
setInterval-it will continuosly execute after 2000ms of time give us to number it will store into the variable
fetch
Local storage


why we are getting error can not read properties and values because spelling mistakes here 

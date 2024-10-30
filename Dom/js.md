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


queue is first in first out 

stack order
queue order
web api 


first click on event loop then
go to call stack
then output give us 
again setTimeout will call then it will go to task queue
then go to logB then anonymous
logD execute then go to Output D
after time queue over then go to again task queue come to call stack again give us to output next element execute here anonymous into call stack and give us to output empty stack is here 


data types:
primituve  pass by value
number
boolean
string
null
undefined

non primitive  pass by reference to array will get memory allocation memory will never change here during adding moment

let a=[10,20,30,40];
let b=a;
b[0]=21;
console.log(a);

point to the same address pass to the same address
let str="str";
let str2=str;
str2[0]="1";
console.log(str);
get error- cannot assign to read only properties here targeting to exact the value 
object 
array
function


promises

we dont know about what will happen to the browser that y overcome this problem promise is resolve here

we call it object or method 


javascript object this keeps tack of the eventual completion or failure of any asynchronous task.

two properties

state ,result

state-pending
rejected(failure)
resolved (fulfilled==completed)

promise can be created using promise contructor
it will take two arguments 
contructor

new Promise(function(resolve,reject)){

}

handling promise
2 methods promiseOutput.then.catch();--chaining 
.then()
.catch()

in resolve state we can pass the then()

microtask queue is keep track of promises 

even then catch also have micro task queue 

promise will handle the reject part 

first priority of microtask queue
after task queue execute 
finally 
promise all:
to handle multiple promise together
the promise will be resolved if all the promises inside it are resolved else it will be rejected 
promise.allsettled
promise.any
promise.race
promise.reject
promise.resoleve
call back hell-chaining

which output is given to us we dont know that is call back hell
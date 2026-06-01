
/*// named function
let a =10;
let b = 20;
function greet1(){
    console.log(a+b);
}
greet1();
function greet(a,b){
    console.log(a+b);
}
greet(10,20);

// anonymous function-> function without name
//function (){
//  console.log("hello world");
//}

//function expression-> function without name assigned to a variable
const greet2=function(){
    console.log("hello world");
}
greet2();

// arrow function-> function without name assigned to a variable
const greet3=()=>{
    console.log("this is an arrow function")
}
greet3();

//immediately invoked function expression-> function without name that is immediately invoked -> not useful in realtime . moemory losses and performance issues
function greet4(a,b){
    console.log(a+b);
}(10,20);

//difference between immediately invoked function expression and named function.
//1. named function can be called multiple times but immediately invoked function expression can be called only once.
//2. named function can be used to create reusable code but immediately invoked function expression cannot be used to create reusable code.
//3. named function can be used to create a function that can be called later but immediately invoked function expression cannot be used to create a function that can be called later.

const arr=[1,"string",true,undefined,null];
//can store different types of data in an array but not in an object
console.log(arr);
console.log(arr[0]);
// array methods -> push, pop, shift, unshift, splice, slice, indexOf, includes, forEach, map, filter, reduce
arr.push(10);                   // adds an element to the end of the array
console.log(arr);
arr.pop();                      // removes the last element of the array
console.log(arr);
arr.shift();                    // removes the first element of the array
console.log(arr);
arr.unshift(10);                // adds an element to the beginning of the array
console.log(arr);
console.log(arr.slice(0,3));          // returns a new array containing the elements from index 0 to index 2
console.log(arr.slice(1,4,"hello"));
//for each , map , filter , reduce -> important array methods used in real time projects
// API- conenction between two servers
//create aray consiting of 10 elements  and print array elements
*/


/*
foreach :
returns output in same array
medium level data
map =
returns output in new array

filter=


 let a=[1,2,3,4,5,6,7,8,9,10];
 a.forEach(()=>{})
a.forEach(function(element){
    console.log(element);
});

a.map(()=>{})
//() = placeholders 
const arr1=[1,2,3,4]
arr1.forEach((data)=>{
    console.log(data);
})

const even=arr1.filter((data)=>{
    return data%2===0;
})
console.log(even);

const arr7=[1,2,3,4]
//syntax -> array.reduce((accumulator,currentValue)=>{})
const sum=arr7.reduce((acc,cur)=>{return acc+cur},0);
console.log(sum);
*/

/*
DOM(Documented object Model)
it serves as a programming interface that allows scripts like javascrip to access,update and modify the structure , style and content of web
Tree
DOM
    html
head     body

CSSOM(CSS Object Model)
it serves as a programming interface that allows scripts like javascrip to access,update and modify the structure , style and content of web
        HTMl
    head     body
style
*/ 


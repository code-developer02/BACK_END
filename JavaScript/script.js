// Fundamentals of JavaScript:
// arrays and objects
// functions return
// async js coding

// var arr = [1,2,3,4];

// foreach, map ,filter, find, indexof

// forEach: run for each array..
// arr.forEach(function(val){
//     console.log(val + " Hello");  
// })

// map: run for each array and give output in new array..
// var newarr = arr.map(function(val){
//     return val*3;
// })
// console.log(newarr);

// filter: create a new array that is to small or equal to array at that time we will use FILTER..
// var newarr = arr.filter(function(val){
//     if(val >= 2){return true;}
//     else return false;
// })
// console.log(newarr);

// find: find the array which is located in Array part that is FIND...
// var newarr = arr.find(function(val){
//     if(val===2)return val;
// })
// console.log(newarr);

// indexof: It returns the position of the first occurance of value string method return -1 if the value is not found. Case sensitive
//we will write in console--->   arr.indexOf(2)


// OBJECT 

// var obj={
//     name:"Mann",
//     age:12
// }
// Object.freeze(obj); // Show all data whioch is present in var obj...
// Any one we will write for object output
// obj['name']
// obj.name

// Function

// var arr =[1,2,3,4];
// function abcd(a,b,c){
//     return 12;
// }
// var ans = abcd();

// line by line code chale isey kahte hai synchronous
// jo bhi code async nature ka ho, usey side stack mein bhej do and
// agle code ko chalao jo bhi sync nature ka ho, jab bhi saara syn code
// chal jaaye, tab check karo ki async code complete hua ya nahi and
// agar wo complete hua ho to usey main stack mein laao and chala doo

// Async js coding

async function abcd(){
    var blob = await fetch('https://randomuser-me/api/');
    var ans = await blob. json();
    console. log (ans. results[0].name);
}

abcd () ;


// 1. Что выведится в консоль ?
console.log('*** Task 1 ***');

var a = 5;
function f() {
    if(a) {
        console.log(a);
        var a = 10;
    }
}
f();
console.log('');


// 2. Что выведится в консоль ?
console.log('*** Task 2 ***');

let value = 100;
function worker() {
    value = 10;
    return;
    function value() {}
}
worker();
console.log(value);
console.log('');


// 3. Что выведится в консоль ?
console.log('*** Task 3 ***');

function outer() {
    function inner() {
        return 3;
    }
   
    return inner();
   
    function inner() {
        return 8;
    }
}
let result = outer();
console.log(result);
console.log('');


// 4. Что выведится в консоль ?
console.log('*** Task 4 ***');

function parent() {
    var hoisted = "I'm a variable";
   
    function hoisted() {
        return "I'm a function";
    }
   
    return hoisted();
}
let res = parent();
console.log(res);   
console.log('');


// 5. Что выведится в консоль ?
console.log('*** Task 5 ***');

function parent() {
    let hoisted = "I'm a variable";
   
    function hoisted() {
        return "I'm a function";
    }
   
    return hoisted();
}
let result = parent();
console.log(result);    
console.log('');


// 6. Что выведится в консоль ?
console.log('*** Task 6 ***');

let result1 = outer();
console.log(result1);    

function outer() {
 var inner = function() {
  return 3;
 };

 return inner();

 var inner = function() {
  return 8;
 };
}
console.log('');


// 7. Что выведится в консоль ?
console.log('*** Task 7 ***');

var value1 = 10;

let func = function() {
 console.log("Первое значение: " + value1);
 var value1 = 20;
 console.log("Второе значение: " + value1);
};

func();
console.log("Третье значение: " + value1);
console.log('');


// 8. Что выведится в консоль ?
console.log('*** Task 8 ***');

console.log(a);
var a = 5;

console.log(b);
let b = 6;

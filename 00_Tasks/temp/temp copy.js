// var arr = []
// for(var i = 0; i <= 3; i++){
//     console.log(i);
//     arr.push(i)
//     setTimeout(() => {
//         console.log('timeout ', i);
//     }, i*1000)
// }
// console.log(arr);


// const inc = (function() {
//     let count = 0;
//     return function() {
//         return ++count
//     }
// })()
// console.log(inc());
// console.log(inc());


// const obj = {
//     a: 42,
//     say: function() {
//         setTimeout(() => {
//             console.log(this.a);
//         }, 1000);
//     }
// }

// obj.say()

// const obj = {
//     a: 42,
//     say: function() {
//         function helper() {
//             console.log(this.a);
//         };
//         setTimeout(helper.bind(this), 1000);
//     }
// }
// obj.say()



// const fruit = ['banana', 'lemon', 'apple', 'banana', 'lemon', 'banana', 'apple', 'apple', 'apple'];

// function sort(arr) {
//     const unique = [...new Set(arr)];
//     let res = []

//     // Цикл фор можно заменить на reducer и в аккамулятор складывать фрукт с числом повторо в массиве 
//     for(let i = 0; i < unique.length; i++) {
//         let count = 0;
//         for(let j = 0; j< arr.length; j++) {
//             if(unique[i] === arr[j]) {
//                 ++count;
//             }
//         }
//         res.push({'fruit': unique[i], count})
//     }

//     res.sort((a, b) => {
//         return b.count - a.count;
//     });

//     const result = [];
//     res.forEach((el, i) => {
//         result[i] = el.fruit;
//     });
    
//     return result
// }
// sort(fruit);


// const objFruit = {
//     "banana": 1,
//     "lemon": 3,
//     "apple": 2,
// }
// const keys = Object.keys(objFruit)
// const keysSort = keys.sort((a, b) => objFruit[b] - objFruit[a])
// console.log(keys);
// console.log(keysSort);



// function multyplyByTwo() {
//     let args = [];
//     for (let i = 0; i < arguments.length; i++) {
//         args[i] = arguments[i];
//     }
//     return args.map(arg => arg * 2)
// }
// console.log(multyplyByTwo(1,2,3,4,5,6))

// function multyplyByTwo(...args) {
//     return args.map(arg => arg * 2)
// }
// console.log(multyplyByTwo(1,2,3,4,5,6))



// function sumNumbers(firstValue) {
//     let sum = firstValue;

//     return function fn (secondValue) {
//         if (arguments.length === 0) {
//             return sum;
//         } else {
//             sum += secondValue;
//             return fn;
//         }
//     }
// }
// console.log(sumNumbers(2)(3)(10)());

function sum(a, b) {
    return a + b;
} 
const mul = (a, b) => a * b;

function calculate(cb) {
    return function(a) {
        return function(b) {
            return cb(a, b)
        }
    }
}

console.log(calculate(sum)(3)(2));
console.log(calculate(mul)(5)(2));



// 1. Task

// Function declaration
const increment = (function() {
    let count = 0;
    return function() {
        return ++count;
    }
})();
console.log(increment());
console.log(increment());

// Arrow function
const increment1 = (function() {
    let count = 0;
    return () => ++count
})();
console.log(increment1());
console.log(increment1());

// 1. Что будет выведено в консоль ?
console.log(1);
setTimeout(function() { console.log(2) }, 1000);
setTimeout(function() { console.log(3) }, 0);
console.log(4);
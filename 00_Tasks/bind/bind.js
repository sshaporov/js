// 1. Что выведется в консоль ?
const ex = function (value, sum) { console.log(sum + value) };
const fx = ex.bind(null, 10);

ex(12, 7);
fx(7, 12)

// 2. Что выведется в консоль ?
const ex1 = (value, sum) => console.log(sum + value);
const fx1 = ex1.bind(null, 10);

ex1(12, 7);
fx1(7, 12)
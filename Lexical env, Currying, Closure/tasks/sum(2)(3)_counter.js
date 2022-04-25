// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(a) {
    return function (b) {
        return a + b
    }
}

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0
    return function () {
        return ++count
    }
}

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function Counter(startNumber = 0) {
    let count = startNumber
    return {
      increase: () => ++count,
      decrease: () => --count,
      set: (setNumber) => count = setNumber,
      reset: () => count = 0,
    }
}

let c = Counter()
console.log(c.increase())
console.log(c.increase())
console.log(c.decrease())
console.log(c.decrease())
console.log(c.set(10))
console.log(c.reset(0))









export default () => {
}
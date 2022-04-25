// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

let someObj = {
    name: 'Sergey',
    age: 35,
}
function greeting() {
    return `My name is ${this.name}. I am ${this.age}`
}
someObj.greeting = greeting;
console.log('*** Task 01 ***');
console.log(someObj.greeting());

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// reset current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

const counter = {
    count: 0,
    getCurrentCount() {
        return this.count
    },
    increment() {
        ++this.count
    },
    decrement() {
        --this.count
    },
    setCurrentCount(value) {
        this.count = value
    },
    resetCurrentCount() {
        this.count = 0
    }
}

console.log('');
console.log('*** Task 02 ***');
counter.increment();
console.log(counter.getCurrentCount());
counter.decrement();
console.log(counter.getCurrentCount());
counter.setCurrentCount(10);
console.log(counter.getCurrentCount());
counter.resetCurrentCount();
console.log(counter.getCurrentCount());

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12
// console.log(counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())

const counterThis = {
    count: 0,
    getCurrentCount() {
        return this.count;
    },
    increment() {
        ++this.count;
        return this;
    },
    decrement() {
        --this.count;
        return this;
    },
    setCurrentCount(value) {
        this.count = value;
        return this;
    },
    resetCurrentCount() {
        this.count = 0;
    }
}

console.log('');
console.log('*** Task 03 ***');
console.log(counterThis.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())
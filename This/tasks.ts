// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
    greeting?: () => void
}

let someObj:someObjType = {
    name: 'Eugene',
    age: 32
}

function greeting () {
    //@ts-ignore
    return `My name is ${this.name}. I am ${this.age}`
}

someObj.greeting = greeting

console.log(someObj.greeting())

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

let counter = {
    currentCount: 0,
    getCurrentCount() {
        return this.currentCount
    },
    increment() {
        ++this.currentCount
    },
    decrement() {
        --this.currentCount
    },
    setCurrentCount(value: number) {
        this.currentCount = value
    },
    resetCurrentCount() {
        this.currentCount = 0
    }
}

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12
// console.log(counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())

export default () => {}
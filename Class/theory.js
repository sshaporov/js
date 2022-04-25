console.log('Class - теория')

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Классы - это основа ООП
// в ДЖС ООП и Наследование основаны на протопитах объектов а не на классах
// В новом ЕС6 были добавлены классы и удобный синтаксис для них, н опод копотом это по прежнему
// Классы - это функции которые создают объекты или конструктор
// constructor - особый метод кторый создается в момент создания класса исам созадет свойтсва, те подгатавливает объект
// для дальнейшего использования
// в классы можно добавлять статические свойства и методы
// а также геттеры и сеттеры

class Task {
    constructor(title = Task.getDefaultTitle(), isCompleted = false) {
        this.title = title
        this._isCompleted = isCompleted
        Task.counter += 1
    }
    // статические методы в самом классе
    static getDefaultTitle() {
        return 'Test title'
    }
    complete() {
        this.isCompleted = true
    }
    get isCompleted() {
        return this._isCompleted ? 'task is  completed' : 'task is not completed'
    }
    set setTitle(newTitle) {
        this.title = newTitle
    }
}
// статические свойства необходимо объявлять до создания экземпляров классаб те сразу после создания класса
Task.counter = 0

let task1 = new Task('Test title', true)
let task2 = new Task('React JS', false)
task1.isCompleted()


// **************************************************************************

class Animal {
    constructor(name = 'Animal') {
        this.name = name
    }
    walk() {
        console.log(`${this.name} walk`)
    }
    eat() {
        console.log(`${this.name} eat`)
    }
    sleep() {
        console.log(`${this.name} sleep`)
    }
}

class Monkey extends Animal{
    constructor(name = 'Monkey'){
    // constructor(options){
        // super(options) - супер это объект в котором лежат методы родительского класса
        super(name) // вызываем родительский constructor перед тем как добавлять свойтсва в дочернем конструкторе
        // родтельский метод также можно вызвать как super.name
        // this.prop = 'something'
    }
    roar() {
        console.log(`${this.name} roar`)
    }
    climb() {
        console.log(`${this.name} climb`)
    }
}


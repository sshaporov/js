//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают
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

//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают
class Monkey extends Animal{
    constructor(name = 'Monkey'){
        super(name)
    }
    roar() {
        console.log(`${this.name} roar`)
    }
    climb() {
        console.log(`${this.name} climb`)
    }
}

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают
class Human extends Monkey{
    constructor(name = 'Human'){
        super(name)
    }
    speak() {
        console.log(`${this.name} speak`)
    }
    think() {
        console.log(`${this.name} think`)
    }
}

// Task 04
// Реализовать таску 01 и 02 через функцию конструктор, реализовать наследование
function AnimalC(name = 'Animal') {
    this.name = name
}
AnimalC.prototype.walk =  function () {
    console.log(`${this.name} walk`)
}
AnimalC.prototype.eat =  function () {
    console.log(`${this.name} eat`)
}
AnimalC.prototype.sleep =  function () {
    console.log(`${this.name} sleep`)
}

function MonkeyC(name = 'Monkey') {
    this.name = name
}
// наследуемся от Animal чтобы появился доступ к его методам
// но здесь проблема - что все методы Animal и методы Monkey находятся на одном уровне
MonkeyC.prototype = AnimalC.prototype
MonkeyC.prototype.constructor = Animal.prototype

// MonkeyC.prototype = Object.assign(Animal.prototype, {constructor: MonkeyC}) // ES5 способ

MonkeyC.prototype.roar = function () {
    console.log(`${this.name} roar`)
}
MonkeyC.prototype.climb = function () {
    console.log(`${this.name} climb`)
}

let animalConstr = new AnimalC('Animal constr')
let animalClass = new Animal('Animal class')
console.log('animalConstr', animalConstr)
console.log('animalClass', animalClass)

let monkeyConstr = new MonkeyC('Monkey constr')
let monkeyClass = new Monkey('Monkey class')
console.log('monkeyConstr', monkeyConstr)
console.log('monkeyClass', monkeyClass)


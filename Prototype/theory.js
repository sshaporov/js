console.log('Prototype - теория')


// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


// 1. __proto__ - это свойство которое есть у каждого объекта
// чтобы понимать, что это за __proto__, нужно ТОЧНО знать с помощью какой функции-конструктора (класса) создан данный
// объект (new XXX())

// Встроенные классы: Function, Object, Promise, Boolean, Number, String, Array
// Кастомные классы: class Samurai {}

// 2. __proto__ любого объекта ссылается на prototype класса (функции-конструктора) с помощью которой этот объект
// был создан (сконструирован) !!!

// 3. prototype есть только у class или function
class Building {}
function Component() {}
const API = function () {}

// Чему равно __proto__ ?
let promise = new Promise(() => {}) // promise.__proto__ = Promise.prototype
let man = {} // man.__proto__ = Object.prototype
let users = [] // users.__proto__ = Array.prototype
let age = 18 // age.__proto__ = Number.prototype
let youtube = 'chanel' // youtube.__proto__ = String.prototype
function add() {} // add.__proto__ = Function.prototype
let edit = function() {} // edit.__proto__ = Function.prototype
let del = () => {} // del.__proto__ = Function.prototype
class Animal {} // Animal.__proto__ = Function.prototype
let dog = new Animal() // dog.__proto__ = Animal.prototype
let isOk = true // isOk.__proto__ = Boolean.prototype

// Зачем каждому классу нужен prototype?
// Зачем объектам созданным с помощью этого класса, свойство __proto__ ссылающее на этот класс?
// --> Чтобы объект полез искать свойство/метод которое мы хотим прочитать/вызвать через ссылку __proto__ в объекте
// prototype класса, с помощью которого он был создан


// ************** Описание при помощи функции-конструктор
function Samurai_constructor(name) {
    this.name = name
}
Samurai_constructor.prototype.hello = function() {
    alert(this.name)
}
// *********************************** Описание при class
class Samurai_class {
    constructor(name) {
        this.name = name
    }
    hello() { alert(this.name) }
}
// *******************************************************

let samuraichik1 = new Samurai_constructor('Sam constructor')
let samuraichik2 = new Samurai_class('Sam class')

samuraichik1.hello() // samuraichik1.__proto__ = Samurai_constructor.prototype где и находится hello()
samuraichik2.hello() // samuraichik2.__proto__ = Samurai_class.prototype где и находится hello()













export default () => {}
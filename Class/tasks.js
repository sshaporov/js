class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    hide() {
        this.$el.style.display = 'none'
    }
    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.stayle.hight = options.size + 'px'
        this.$el.style.color = options.color
    }
}

class Circle extends Box() {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }

}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red',
})
const cyrcle1 = new Circle({
    selector: '#circle1',
    size: 90,
    color: 'green',
})

// HTML
// <div id='#box1'></div>
// затем из кода можно обращаться к объекту чтобы скрывать блок или показывать его box1.hide() / box1.show() или circle

console.log('Class - задачи')

// Task 01
// Дан интерфейс класса транспортное средство. На его основе реализуйте класс vehicle.
// - максимальная скорость по умолчанию ограничена в 150
// - необходимо предусмотреть: нельзя завести рабочий двигатель, как и остановить не рабочий.
// - нельзя остановить стоящее транспортное средство и т.д. Чем больше тем лучше)
// - метод startMoving должен раз в секунду выводить текущую скорость, при это увеличивать ее на произвольное число
// скорость не должна увеличиться больше чем максимальная скорость. Выводить в консоль предупреждение о большой скорости,
// выводить в консоль сообщение о достижении максимальной скорости.
// - метод stopMoving должен раз в секунду выводить текущую скорость, при это уменьшать ее на произвольное число
// (можно на тоже что и метод startMoving), скорость не может быть меньше 0. Выводить сообщение о остановки.
// создайте экземпляр класса и проверьте что все работает

// interface IVehicle {
//     isStartEngine: boolean;
//     isMoving: boolean;
//     speed: number;
//     startEngine: () => void;
//     stopEngine: () => void;
//     startMoving: (maxSpeed?: number) => void;
//     stopMoving: () => void;
// }

// Task 02
// на базе класса Vehicle реализовать класс Motorbike у которого максимальная скорость 200 и
// есть свой метод burnOut который выводит в консоль 'Zoom zoom zoom zoom zoom...'

// Task 03
// на базе класса Vehicle реализовать класс Car у которого максимальная скорость 180 и
// есть свой метод beep который выводит в консоль 'Beeeeeeeeeeeep...'
// Приведите в движение мотоцикл и автомобиль одновременно


// Task 04
// Создать класс Warrior который реализует интерфейс IWarrior.
// метод attack возвращает значение damage
// метод attackWithBonus оставить пустым
// у класса должен быть статический метод battle который принимает 2 аргумента (объекты с интерфейсом IWarrior)
// метод battle должен реализовывать поочередные ходы до тех пор пока не останется в живых только один.
// выбор кто ходит первым должен быть случайным.
// на каждом ходе должна выводиться информация о нанесенном уроне и остатке здоровья у противника
// в конце написать кто победил

// interface IWarrior {
//     health: number;
//     damage: number;
//     defence: number;
//     attack: () => number;
//     attackWithBonus: Function
// }


// Task 05
// На базе класса из // Task 04 создать 2 класса Solder и Wizard
// реализовать обоим классам метод attackWithBonus
// у класса Solder есть вероятность (10%) нанести двойной урон
// у класса Wizard есть вероятность (50%) нанести тройной урон

// Task 06
// Устройте несколько драк. Подумайте о сложности нахождения баланса

export default () => {}
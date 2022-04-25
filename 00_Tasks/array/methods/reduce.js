// Применение метода reduce()

// 1. Сложение всех елементов массива

// 1.1 ES6 (Arrow function)

const euros = [30, 40, 50];
const result = euros.reduce((acc, current) => {
    return acc + current;
});
console.log(result);

// 1.2 ES5 (Function declaration and var)

var euros1 = [30, 40, 50];
var sum1 = euros1.reduce( function(acc, current){
  return acc + current
});
console.log(sum1);

// 1.3 Можно задать первоначальное значение acc = 0, тогда при первой итерации в массиве асс будет 
//     равно 0 (нулю), а не первому элементу в массиве (тогда будет на одну итерацию больше чем в 
//     примерах 1.1 или 1.2)

const euros2 = [30, 40, 50];
const result2 = euros2.reduce((acc, current) => {
    return acc + current;
}, 0);
console.log(result);

// Как это работает:
// - reduce() принимает два параметра, 'acc' и текущее число.
// - Метод проходится по каждому числу в массиве, как бы это было с циклом for.
// - Когда цикл только начинается, 'acc' имеет значение первого числа с начала массива (29.76), 
//   а текущим числом становится следующее по этому же массиву число (41.85).
// - Нам надо прибавить текущее число к acc.
// - Такое вычисление повторяется для каждого числа в массиве и каждый раз текущее число меняется на следующее число в массиве справ, 
//   а асс будет равно сумме предыдущих элементов в массиве
// - Когда уже нет чисел в массиве, метод отдаёт значение acc.


// 2. Найти среднее число среди элементов массива

// 2.1
var euros3 = [30, 40, 50];
const average = euros3.reduce((acc, current, index, arr) => {
    acc = acc + current; 
   
    if(arr.length - 1 === index) {
        return acc / arr.length
    } else {
        return acc   // нужно возвращать асс на каждой итерации для суммирования всех элементов массива
    }
}, 0)
console.log(average);

// 2.2 
var euros4 = [30, 40, 50];
const average1 = euros4.reduce((acc, current, index, arr) => {
    return acc += current / arr.length;
  }, 0);
console.log(average1);


// 3. Превратить массив значений в ещё один массив, в котором каждое значение будет умножено на два
var euros5 = [30, 40, 50];
const twoTimes = euros5.reduce((acc, current, index, arr) => {
    acc.push(current * 2);
    return acc
}, [])
console.log(twoTimes);


// 4. Отфильтровать числа, которые нам не нужны (< 40) - меньше 39
//    В общем, это как методы map() и filter(), только переписанные в reduce().
//    Преимущество метода reduce становится очевидным, когда вам надо сделать map и filter вместе, 
//    и при этом у вас довольно большие объемы данных для обработки
var euros6 = [30, 40, 50];
const lessMore40 = euros5.reduce((acc, current, index, arr) => {
    if(current < 39) {
        acc.push(current);
    } 

    return acc
}, [])
console.log(lessMore40);


// 5. Сколько типов каждого элемента находится в этом массиве
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce((acc, currentFruit) => {
  acc[currentFruit] = (acc[currentFruit] || 0) + 1 ;
  return acc;
} , {})
console.log(count);

// 5.1 Сколько типов каждого элемента находится в этом массиве и отсортировать его по кол-ву использования
function sort() {
    const objFruit = fruitBasket.reduce((acc, currentFruit) => {
        acc[currentFruit] = (acc[currentFruit] || 0) + 1 ;
        return acc;
    } , {})
    
    const keys = Object.keys(objFruit)
    return keys.sort((a, b) => {
        return objFruit[b] - objFruit[a]
    })
}
console.log(sort());


// 6. Слить массив воедино
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((acc, current) => {
  return acc.concat(current);
}, []);
console.log(flat);


// 7. Pipline
function increment(input) { return input + 1;}
function decrement(input) { return input - 1; }
function double(input) { return input * 2; }
function halve(input) { return input / 2; }

var pipeline = [
    increment,
    increment,
    increment,
    double,
    decrement,
    halve
  ];
  const res = pipeline.reduce(function(total, func) {
    return func(total);
  }, 0);

  console.log(res);


  // Частенько забывают отдавать total. Вы должны возвращать какое-нибудь значение, что reduce() 
  // продолжал работать. Всегда проверяйте дважды и убеждайтесь в том, что вы отдаёте нужное вам значение.


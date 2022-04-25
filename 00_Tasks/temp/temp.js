const inc = (function() {
    let count = 0;
    return function() {
        return ++count;
    }
})();
console.log(inc());
console.log(inc());
console.log(inc());


const inc1 = (counter => () => ++counter)(0);
console.log(inc1());
console.log(inc1());


const fruits = ['banana', 'lemon', 'lemon', 'lime', 'lime', 'lemon', 'lime', 'lime', 'lime']
function sortArr(arr) {
    const temp = arr.reduce((acc, el) => {
       acc[el] = (acc[el] || 0) + 1
       return acc
    }, {})
    const keys = Object.keys(temp)

    return keys.sort((a ,b) => {
        return temp[b] - temp[a]
    })
};
console.log(sortArr(fruits));


function mult(...args) {
    return args.map((el) => el*2)
}
console.log(mult(1,2,3,4,5));


function sum1(a) {
    return function(b) {
        return a + b;
    }
}
console.log(sum1(2)(5));

function sum2(a) {
    let resSum = a;

    return function fn (b) {
        if (arguments.length === 0) {
            return resSum;
        } else {
            resSum += b;
            return fn;
        }
    }
}
console.log(sum2(2)(5)(10)(100)());


function summ(a, b) {
    return a + b;
}
function mult(a, b) {
    return a * b;
}
function fn1(cb) {
    return function(a) {
        return function(b) {
            return cb(a, b)
        }
    }
}
console.log( fn1(summ)(10)(9) );
console.log( fn1(mult)(10)(9) );


const arrNumber = [1,2,3,4,67,5,9,0,3,4,5,6,7,9];
const sortArr1 = arrNumber.sort((a,b) => a-b)
console.log(sortArr1);

class Bike {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
    getDetails() {
        return this.model + ' bike has' + this.color + ' color'
    }
}


function cap(str) {
    return str[0].toUpperCase() + str.substr(1, str.length -1);
}
console.log(cap('stroka'));


function min(arr) {
    let min = arr[0];
    arr.forEach(element => {
        if (element < min) {
            min = element
        }
    });

    return min
}

function min1(arr) {
    return Math.min(...arr)
}

console.log(min([1,5,2,5,7,8,9,0,43,45]));
console.log(min1([1,5,2,5,-7,8,9,0,43,45]));

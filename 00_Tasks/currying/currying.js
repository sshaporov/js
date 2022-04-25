// 1. Создать функцию которая бы суммировала 2 числа
//    sum(a)(b)

function sum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sum(10)(3));

// 2. Написать функцию суммирования которая принимает неограниченное количество аргументов,
//    чтобы закончить суммирование нужно вызвать функцию без аргумента
//    sum(10)(3)(1)(23)(100)()

// THINKING

function sumElements(a) {
    let sum = a;
    function localSum(b) {
        sum = sum + b;
        return localSum
    }

return localSum
}

console.log(sumElements(100)(13)(100)(100)());
console.log(sumElements(100)(13)(100)(100));


// 3. Написать функцию calculate которая в первом вызове будет принимать функцию колбэк, а в двух других 
//    вызовах - числа, которые будут использоваться как аргументы
// calculate(sum)(1)(1) // 2
// calculate(mult)(2)(2) // 4

function sum3(a, b) {
    return a + b
}
function mult3(a, b) {
    return a * b
}

function calculate(cb) {
    return function(a) {
        return function(b) {
            return cb(a, b)
        }
    }
}

console.log(calculate(sum3)(1)(1))
console.log(calculate(mult3)(2)(2))

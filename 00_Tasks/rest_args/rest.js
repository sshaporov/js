// 1. Реализовать функцию которая будет перемножать на 2 свои аргументы
//    multiplyByTwo(1,2,3,4,5) // 2,4,6,8,10

function multiplyByTwo(...restArgs) {
    return restArgs.map((item) => item * 2)
}

console.log(multiplyByTwo(1,2,3,4))

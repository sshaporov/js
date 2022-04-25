console.log('Promise - tasks')

// 1. Асинхронность на callback

// console.log('Request data...')
//
// setTimeout(() => {
//     console.log('Preparing data...')
//
//     const serverData = {
//         server: 'aws',
//         port: 3000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         serverData.modified = true
//         console.log('Data recived...', serverData)
//     }, 2000)
//
// },2000)

// 2. Синхронность на промисах

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')
//
//         const serverData = {
//             server: 'aws',
//             port: 3000,
//             status: 'working'
//         }
//
//         resolve(serverData) // резолвим промис и передаем в него данные
//     }, 2000)
// })

// promise1.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//             // reject(data)
//         }, 2000)
//     })
// })
//     .then(clientData => {
//         console.log('Data recived...', clientData)
//         clientData.fromPromise = true // можно модифицировать приходящие в then данные
//         return clientData // и возвращать их дальше по цепочке
//     })
//     .then(modifiedClientData => {
//         console.log('Modified data', modifiedClientData)
//     })
//     .catch(err => console.error('Error: ', err))
//     .finally(() => console.log('Finally!'))
//
//
// // 3. Примеры от Владилена
// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }
// sleep(2000).then(() => console.log('after 2 sec'))
// sleep(3000).then(() => console.log('after 3 sec'))


// Promise.all([sleep(2000), sleep(5000)])
//     .then(() => console.log('All promises')) // все промисы выполнились
//
// Promise.race([sleep(2000), sleep(5000)])
//     .then(() => console.log('Race promises')) // первый промис выполнился
//
// // 4. Какая очередь вывода в консоль:
// setTimeout(() => console.log(1), 0) // браузерная АПИ макротаска
// // ниже микротаски
// console.log(2)
// (() => console.log(3))()
// Promise.resolve(console.log(4)) // синхронно отрисовывается 4 а потом по цепочке примисов идет undefined
// 2 3 4 1

// 5. Какая очередь вывода в консоль:
// (function () {
//    setTimeout(() => console.log(1), 100)
// })()
// console.log(2)
// new Promise((res, rej) => {
//     setTimeout(() => console.log(3), 50)
// })
// function f() {
//     console.log(4)
// }
// Promise.resolve(console.log(5))
// 2 5 3 1

// 6. Какая очередь вывода в консоль:
// function f1(num){
//     console.log(num)
// }
// Promise.resolve(1).then(f) // 1 пойдет в аргумент функции колбэк f() после than num=1
// (function() {
//     console.log(2)
// })()
// console.log(3)
// new Promise(() => {
//     console.log(4)
// })
// setTimeout(f, 0, 5, 6, 7) // 5 пойдет в аргумент функции колбэк f() см. 99 строка num=5, остальные аргументы 6 и 7 будут проигнорированы
// 2 3 4 1 5


// 7. Очередь выполения async / await
// async function sleep(ms) { // функция которая помечена как async всегда возращает промис
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(ms)
//             resolve()
//         }, ms * 100)
//     })
// }

// функция без async возвращает undefined так как нет return
// функция помеченная как async у которой нет return вернет зарезолвленный промис со значением undefined
// async function show() {
//     await sleep(3) // await всегда ждет resolve() зарезовленный промис
//     await sleep(2)
//     await sleep(1)
// }

// show()

// 8. Очередь вывода
// let pr1 = new Promise((res) => {
//     res(10)
// })
// let pr2 = new Promise((res) => {
//     res(0)
// })
//   pr1
//     .then((res) => {
//         console.log(res)
//         return res + 2
//     })
//     .then((res) => {
//         console.log(res)
//         return res + 2
//     })
//     .then(console.log) // пришло 14
//
//   pr2
//     .then((res) => {
//         console.log(res)
//         return res + 1
//     })
//     .then((res) => {
//         console.log(res)
//         return res + 1
//     })
//     .then(console.log) // пришло 2

// 10 0 12 1 14 2

// 8. Промис резолвиться через 3 сек
// const pr = new Promise((res, rej) =>{
//     setTimeout(() => {
//         console.log('data')
//     }, 3000)
// })
//
// const pr = new Promise((res, rej) => {
//     setTimeout(res, 3000, 'Data')
// })
//
// pr.then(console.log)


// 9.
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// const handlePromise = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess: function (paramName) {
//         console.log(`Promise is resolved with data: ${paramName}`)
//     },
//     onError: function (paramName) {
//         console.log(`Promise is rejected with error: ${paramName}`)
//     },
// }
//
// export const createPromise = () => {
//     const somePromise = new Promise((res, rej) => {
//         handlePromise.resolve = res
//         handlePromise.reject = rej
//     })
//     handlePromise.promise = somePromise
//     handlePromise.promise
//         .then(res => handlePromise.onSuccess(res))
//         .catch(err => handlePromise.onError(err))
// }
//
// export const resolvePromise = () => {
//     handlePromise.resolve()
// }
//
// export const rejectPromise = () => {
//     handlePromise.reject()
// }


// 10.
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

function print(value) {
    console.log(value)
}

function onSuccess(value) {
    return `${value} Sergey`
}

const promise = new Promise((res, rej) => {
    setTimeout(res, 1000, 'My name is')
})

promise.then(onSuccess).then(print)
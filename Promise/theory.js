console.log('Promise - теория')


// Promise
// Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем –
// одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).

// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU
// https://docs.google.com/document/d/1oOK8LBQ2fBT983FeOn_yYoSollzohbY72Dl3Y2F_WhY/edit

// Смотреть теорию здесь https://youtu.be/mTh-_VUPwo4?t=3537


const promise = new Promise((resolve, reject) => {
    // syncing code
    // asyncing code (pending)
    resolve('data') // pending -> fullfield
    reject('data') // pending -> rejected
})
    .then((res) => {
            //...
            return 10 // ретурнит промис со значение 10
        },
        (rej) => { // перехват реджекта со строки 19
            //...
            return 0
        })
    .catch(rej => {
        //...
        return 0
    })
    .finally()
//
//
(async function f() { // важно! эта функция помеченая асинком возвращает промис
    try { // блок кода когда у нас выполняется все хорошо
        const result = await new Promise((res, rej) => { // здесь мы ждем чтото что возвращает промис
            // ajax
            res(10)
        })
        //... - после того как мы дождались промиса дальше синхронно выполняем команды

    } catch (e) {

    }
})()
.then()
.catch()
//
// // Написать промис и сразу зарезолвить его
const task = new Promise((res, rej) => {
    res('Promise data')
})
task.then(res => console.log(res))
task.then(console.log)

const task1 = Promise.resolve('Promise data')
task.then(res => console.log(res))

async function task2() { // асинхронная функция возвращает промис
    return 'Promise data'
}
task2().then(console.log)
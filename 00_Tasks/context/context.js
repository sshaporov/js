// 1. Что будет выведено ?

const obj = {
    a: 42,
    say: function() {
        setTimeout(function() {
            console.log(this.a);
        }, 1000);
    }
}

obj.say();

// 2. Изменить объект из задания 1 так, чтобы в консоль вывело 42
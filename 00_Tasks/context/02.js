// 2. Task

// ES6. Arrow function (тк не имеет своего контекста)
const obj1 = {
    a: 42,
    say: function() {
        setTimeout(() => {
            console.log(this.a);
        }, 1000);
    }
}
obj1.say();

// Oldshcool. Function declaratio + bind()
const obj2 = {
    a: 42,
    say: function() {
        function func() {
            console.log(this.a);
        };
        setTimeout(func.bind(this), 1000);
    }
}
obj2.say();
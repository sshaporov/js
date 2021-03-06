console.log('This - теория')


// Ранее говорилось о том, что при создании Лексического Окружения,
// например если была вызвана функция, формируется соответствующая Запись Окружения.
// И эта Запись Окружения содержит в себе не только информацию о переменных текущей области видимости,
// но и ключевое слово this, к которому можно обратиться напрямую из кода.
// Значение this динамически устанавливается JavaScript-движком на этапе создания контекста выполнения
// и указывает на объект, связанный с этим контекстом.

// Ключевое слово «this» в методах
// Как правило, методу объекта необходим доступ к информации, которая хранится в объекте, чтобы выполнить с ней
// какие-либо действия (в соответствии с назначением метода).
// Например, коду внутри user.sayHi() может понадобиться имя пользователя, которое хранится в объекте user.
//     Для доступа к информации внутри объекта метод может использовать ключевое слово this.
//     Значение this – это объект «перед точкой», который использовался для вызова метода.

// This может использоваться в любой функции
// Значение this вычисляется во время выполнения кода и зависит от контекста.

// Правило простое: при вызове obj.f() значение this внутри f равно obj.

// this является "свободным" его значение вычисляется в момент вызова метода и не зависит от того,
// где этот метод был объявлен, а зависит от того, какой объект вызывает метод (какой объект стоит «перед точкой»)
// Достоинство: функция может использоваться повторно в качестве метода у различных объектов.

// Стрелочные функции особенные: у них нет своего «собственного» this.
// Если мы используем this внутри стрелочной функции, то его значение берётся из внешней «нормальной» функции.
// Например, здесь arrow() использует значение this из внешнего метода user.sayHi():
let user = {
    firstName: "Илья",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};
user.sayHi(); // Илья
// Это является особенностью стрелочных функций. Они полезны, когда мы на самом деле не хотим
// иметь отдельное значение this, а хотим брать его из внешнего контекста.


// ИТОГО
// Функции, которые находятся в объекте в качестве его свойств, называются «методами».
// Методы позволяют объектам «действовать»: object.doSomething().
//     Методы могут ссылаться на объект через this.
//     Значение this определяется во время исполнения кода.
//
//     При объявлении любой функции в ней можно использовать this, но этот this не имеет значения до тех пор, пока функция не будет вызвана.
//     Эта функция может быть скопирована между объектами (из одного объекта в другой).
// Когда функция вызывается синтаксисом «метода» – object.method(), значением this во время вызова является объект перед точкой.

export default () => {}
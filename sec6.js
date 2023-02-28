// Lexical Environment
let apple = "apple";
let banana = "banana";

let outerFunc = (a) => {
    let mango = "mango";

    let innerFunc = () => {
        let orange = "orange";
        console.log(apple, banana, mango, orange)
    };

    innerFunc()
};
outerFunc("hello")



// クロージャ Closure : 外部の変数の情報を持った関数のこと

let outerFunc2 = () => {
    let mango = "mango";

    return () => {
        let orange = "orange";
        console.log(apple, banana, mango, orange)
    };
};

let innerFunc2 = outerFunc2();
innerFunc2();


// Lexical Environmentの注意点
let fruit = "apple";
let sayFruit = () => {
    console.log(fruit);
};
fruit = "banana";
sayFruit();

let createCounter = () => {
    let count = 0;
    return  () => {
        count += 1;
        console.log(count);
    };
};

let counter = createCounter();
counter();
counter();


// プライベート変数　関数を通してのみ変更可能

let generatePerson = (name) => {
    let age = 0;
    return {
        getName: (name) => name,
        getAge: () => age,
        incrementAge: () => age += 1,
    };
};

const tom = generatePerson("Tom");
console.log(tom)
tom.incrementAge()
tom.incrementAge()
console.log(tom.getAge())

const ryu = generatePerson("Ryu");
console.log(ryu)
ryu.incrementAge()
ryu.incrementAge()
ryu.incrementAge()
ryu.incrementAge()
console.log(ryu.getAge())


// 即時実行関数式
const sayHello = (() => {
    console.log("Hello!");
})();


// 再帰関数
let factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};
console.log(factorial(3));


// 実行コンテキストスタック
const c = () => {
    return "hello";
};
const b = () => {
    return c();
};
const a = () => {
    return b();
};
a();
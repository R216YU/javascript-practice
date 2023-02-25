// 関数はオブジェクト(辞書のようなもの key: value)にすぎない
function add(a, b) {
    return a + b;
};
console.log(add);
console.log(add.name);
console.log(add.length);


// 関数を定義する方法は2通りある => 関数宣言文(巻き上げられる)　関数式(巻き上げられない)　　結論：好きな方を使えばいい(統一する)
let sayHello = function () {
    return "hello!";
};
console.log(sayHello());


console.log(sayGoodbye());
function sayGoodbye() {
    return "Good bye!";
}
console.log(sayGoodbye());


// 関数とメソッド オブジェクト(pythonの辞書のような形)のものに入れる関数をメソッドという
const person = {
    name: "R216YU",
    sayHi: function () {
        return "Hi";
    },
    age: 23
};
console.log(person.sayHi());


// アロー関数(無名関数に書き換えられる)
sayHi = function (name) {
    return `Hi ${name}!`;
};
console.log(sayHi("R216YU"));


sayHi = (name) => {
    return `Hi ${name}!`;
};

sayHi = name => `Hi ${name}!`;

console.log(sayHi("R216YU"));


// デフォルトパラメーター(引数)
sayHi = (name, msg="I like chocolate.") => `Hi ${name}. ${msg}.`;
console.log(sayHi("SR"));


// レストパラメーター(無限に引数をとれる)
let sum = (list) => {
    let total = 0;
    for (num of list) {
        total += num;
    }
    return total;
};
console.log(sum([1,2,3,4,5]));


let sum1 = (...list) => {
    let total = 0;
    for (num of list) {
        total += num;
    };
    return total;
}
console.log(sum1(1,2,3,4,5));

sum = function() {
    console.log(arguments);
}
sum(1,2,3,4,5)


// コールバック関数
let subtract = (a, b, callback) => {
    let result = a - b;
    callback(result);
};

subtract(100, 50, (result) => {
    console.log(result);
});


// 関数式：無名関数(アロー関数) vs. 名前付き関数 => デバッグの時は名前付き関数の方が分かりやすい
function exFunc () {
    console.log("start exFunc");
    throw "Error by exFunc";
};

exampleFunc = function () {
    console.log("start exampleFunc");
    throw "Error by exampleFunc";
};


// 関数とオブジェクトの見分け方
console.log(typeof(exampleFunc));
console.log(typeof({}));
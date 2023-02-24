// 変数の宣言　let 変数名 = 値;

let count;
console.log(count);
count = 30;
console.log(count);

let newCount = 0;
console.log(newCount);


// 定数の宣言 const 変数名 = 値;

const daysInWeek = 7;
console.log(daysInWeek);


// 変数、定数の命名規則 $_は使える 数字は最初以外なら使える 日本語使える 大文字、小文字は区別される
let tomatoCount;
let $tomato$Count;
let _tomato_count;
let tomatoCount7;
let トマトカウント;
let TomatoCount;


// 演算子
let addResult = 2 + 5;
console.log(addResult)

let result = 0;
console.log(result)
result += 5;
console.log(result)
result ++;
console.log(result)
++ result;
console.log(result)


// データの型　数値型　文字列型
let num = 5;
num = -4;
num = 32.5;

let str = "hello";
str = "こんにちわ";


// 文字列 "" '' `` 
const userName = "Ray";
let string = "hello " + userName + "!";
console.log(string);
string = `hello ${userName}!`;
console.log(string);
string = " umm'mmm ";
console.log(string);
string = "Hello\nray!";
console.log(string)


// 型の自動変換
console.log("10" + "10");
console.log("10" + 10);
console.log("10" - 10);


// 型の明示的変換
const userInput = "10";
let calcResult;
calcResult = Number(userInput) + 10.9;
console.log(calcResult);

calcResult = parseInt(userInput) + 10;
console.log(calcResult);

calcResult = parseFloat(userInput) + 10;
console.log(calcResult);

const tenNumber = 10;
calcResult = "10" * String(tenNumber);
console.log(calcResult);


// 真偽値
let boolean = true;
boolean = false;


// 配列 (リスト)
let array = ["apple", "banana", "orange"];
array = [1, 2, 3];
array = ["apple", 1, "100", true, boolean];
console.log(array[0]);
array = [];
array.push("apple");
console.log(array);


// オブジェクト(辞書) キーとバリューを合わせてプロパティという
const coffee = {
    name: "Chocolate Mocha",
    size: 350,
    isHot: true,
    toppings: ["Cinnamon", "caramel", "popcorn"],
    nutritions : {
        calories: 450,
        sugar: 53,
        caffeine: 100,
    }
};
console.log(coffee);
console.log(coffee.size);
coffee.isHot = false;
console.log(coffee.isHot);
coffee.barista = "R216YU!";
console.log(coffee.barista);


// nullとundefinedの違い どちらも「何もない」を表す
let userInfo = null; // 明示的に記述しない限り出てこない わざと何もないことを表す
userInfo = undefined; // 暗黙のうちに使われる　エラーのようなものを表す


// type of 演算子
console.log(typeof {a: "b"});
console.log(typeof [1, 2]);
console.log(typeof undefined);
console.log(typeof null);


// 関数 複雑な処理を何度も使うときに利用するもの
function addFunc() {
    console.log(1 + 2);
};
addFunc();
addFunc();
addFunc();


// 関数の引数(3, 5, 100, -500)とパラメーター(n1, n2)
function calcFunc(n1, n2) {
    console.log(n1 + n2);
};
calcFunc(3, 5);
calcFunc(100, -500);
calcFunc(100);


// 関数のreturn ; 関数の位置=>関数はどの位置でも問題ない
const returnedValue = add(100, 1);
console.log(returnedValue);
function add(n1, n2) {
    return n1 + n2
};


// スコープ(範囲) スコープ外：グローバル変数　スコープ内：ローカル変数
const newValue = "HEllo"
function scopeFunc(num1, num2) {
    console.log(newValue)
    const value = num1 + num2;
    console.log(value);
    return value;
}
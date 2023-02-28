'use strict';

// グローバルオブジェクト
console.log("---------------------------");

let num = parseInt("205");
console.log(num);

console.log(globalThis);
console.log(window);
console.log(self);
console.log(frames);


// var(古い) 再宣言可能・関数スコープ・巻き上げられる・ホスティング /// let,const(新しい) ブロックスコープ
console.log("---------------------------");

var hello = "hello";
console.log(hello);
var hello = "こんにちわ"
console.log(hello);



// 関数宣言文とvarは似ている　性質が似ている
console.log("---------------------------");

function sayTomato() {
    console.log("start sayTomato");
}


// use strict 開発者に強制的に良いコードを書かせる scriptの先頭に 'use strict' を記載　HTML等ではすべてのscriptファイルにつけないとダメ
console.log("---------------------------");
function sayHello() {
    console.log("hello");
};
sayHello();

try {
    grape = "grape";
} catch(error) {
    console.log(`エラー発生 : ${error}`);
};



// primitive(イミュータブル　不可変) と　object(ミュータブル　可変)
console.log("---------------------------");
let x = "X";
let y = "Y";

let z = {z: "z"};

const coffee = {
    name: "Choco Latte",
}
const coffee2 = coffee;
coffee2.name = "Cafe Latte";
console.log(coffee)

// 
console.log("---------------------------");
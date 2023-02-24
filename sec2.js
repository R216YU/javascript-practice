// if文
let ok = false;
let maybeOk = true;

if (ok) {
    console.log("ok")
} else if(maybeOk) {
    console.log("maybe ok")
} else {
    console.log("no")
};

console.log("--------------------------");


// ==(等値　ゆるめ)と===(同値　きびしい)
ok = 1 === 1;
console.log(ok);
ok = "hello" === "hell";
console.log(ok);
ok = 1 !== 1;
console.log(ok);
ok = 1 !== 2;
console.log(ok);

let haven;
haven = 1 === "1";
console.log(haven);
haven = 1 === 1;
console.log(haven);

console.log("--------------------------");


// ===はオブジェクトと使用するときには注意しないといけない
const coffee1 = {name: "Cafe Latte"};
const coffee2 = {name: "Cafe Latte"};
ok = coffee1 === coffee2;
console.log(ok);
ok = coffee2.name === coffee1.name;
console.log(ok);

console.log("--------------------------");


// 比較演算子 数値の大小/文字の大小
ok = 1 > 0;
console.log(ok);
ok = "a" < "b";
console.log(ok);
ok = "A" < "a";
console.log(ok);

console.log("--------------------------");


//truthy(trueとして扱われる値) falsy(falseとして扱われる値 => false, 0, -0, 0n, "", null, undefined, NaN)
ok = "hello";
if (ok) {
    console.log("ok");
} else {
    console.log("no");
};

console.log("--------------------------");


// 論理演算子
ok = true && true; //かつ
ok = true || false; //または
ok = "hello" && "hi"; //「AがtrueであればBを返す」というのが
ok = "" || "hello"; // 「AがtrueだったらAを返す。AがfalseだったらBを返す」

if (ok) {
    console.log(ok);
    console.log("it is true");
} else {
    console.log(ok);
    console.log("it is false");
}

const userInput = "";
const userName = userInput || "User"; //もしuserInputがtrueだったらuserInputを使う。userInputがfalseだったら"User"にする
console.log(userName)

console.log("--------------------------");


//演算子の優先順位
const x = 15;
ok = x > 10 && x < 20;
ok = (x === 10) || (x > 12 && userName);
if (ok) {
    console.log(ok);
    console.log("it is true");
} else {
    console.log(ok);
    console.log("it is false");
}

console.log("--------------------------");


// null合体演算子 A??B Aがnull undefinedだったらBを返す
let username1 = "" || "User";
console.log(username1);
username = "" ?? "User";
console.log(username)

console.log("--------------------------");


// 論理否定演算子 !
ok = !true;
console.log(ok);
ok = !!x;
console.log(ok); //!!は型を審議地にしたいときに使える

console.log("--------------------------");


// 式(x = ここにかけるものを式という)
// 文(実行すると何かをするもの: function, if, const, let, var など)


// ブロック文(if (条件) {ブロック}) ブロック文内にもスコープが存在 / functionのデッドゾーン
{
    const hello = "Hello";
    if (true) {
        console.log("hey!");
    } else {
        console.log("goodbye");
    };
}

{
    // console.log(hi); デッドゾーン
    const hi = "hi";
    console.log(hi);
}

console.log("--------------------------");


// 三項演算子 A ? B : C 「AがtrueならB AがfalseならC」
ok = true;
ok = ok ? "OK" : "NO";
console.log(ok);

ok = true;
if (ok) {
    console.log("OK");
} else {
    console.log("NO");
};

console.log("--------------------------");


// switch文
function vegetableColor(vegetable) {
    if (vegetable === "tomato") {
        console.log("tomato is red.");
    } else if (vegetable == "onion") {
        console.log("onion is white.");
    };
};

function vegetableColor(vegetable) {
    switch (vegetable) {
        case "tomato":
            console.log("tomato is red");
            break;
        case "pumpkin":
        case "carrot":
            console.log(`${vegetable} is orange`);
            break;
        case "onion":
            console.log("onion is white");
            break;
        default:
            console.log("ほかの野菜を入力してください");
    };
};
vegetableColor("apple")

console.log("--------------------------");


// while文
let count = 0;
while (count < 10) {
    console.log('while: ', count);
    count += 1;
};

console.log("--------------------------");


// do while文
let tomatoCount = 0;
do {
    console.log(`do while: tomatoCount is ${tomatoCount}`)
    tomatoCount += 1;
} while (tomatoCount < 3);

console.log("--------------------------");


// for文 for (A; B; C) {} A変数の定義など Bいつまで回すのか 毎回の処理の最後にしてほしいこと
for (let myAge = 1; myAge <= 5; myAge += 1)  {
    console.log("for: ", myAge)
};

console.log("--------------------------");


// FizzBuzz問題
for (let count = 1; count < 31; count += 1) {
    if (count % 15 === 0) {
        console.log("FizzBuzz");
    } else if (count % 3 === 0) {
        console.log("Fizz");
    } else if (count % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(count);
    };
};

console.log("--------------------------");


// カンマ演算子　+　letの応用 複数の式を1つにまとめる
let a = "a", b = "b", c;
console.log(a, b, c);

for (let pumpkinCount = 0, tomatoCount = 0, i = 0; pumpkinCount < 10; pumpkinCount += 1, i += 1) {
    tomatoCount += 1;
    console.log("pumpkin:", pumpkinCount, "tomato:", tomatoCount, "イテレーター:", i);
};

console.log("--------------------------");


// for-of文
const fruits = ["apple", "banana", "grape", "orange", "mango"];
for (let i = 0; i < fruits.length; i += 1) {
    console.log(fruits[i]);
};

console.log("--------------------------");

// A of B(イテラブル 反復可能)　Bからひとつづつ要素をとりだしてAに代入する　一巡するとAが削除される(constが使える letも使える)
for (const fruit of fruits) {
    console.log(fruit);
};

console.log("--------------------------");


// for-in文
const coffee = {
    name: "Latte",
    size: 300,
    isHot: true,
};
for (const key in coffee) {
    console.log(key, coffee[key]);
};

console.log("--------------------------");


// breakについて
for (const key in coffee) {
    console.log(key, coffee[key]);
    if (key === "size") {
        console.log("break");
        break;
    };
};

console.log("--------------------------");


// continue文
const agents = {
    jett: "duelist",
    sova: "initiator",
    astra: "smoker"
};

for (const k in agents) {
    if (k === "sova") {
        console.log("continue!")
        continue;
    };
    console.log(k, agents[k]);
};

console.log("--------------------------");


// ラベル文 break continueとつかう
hello: {
    break hello;
};


// try-catch文
try {
    console.log("1")
    console.log(chocolate);
} catch {
    console.log("2")
};
console.log("3");

console.log("--------------------------");


// try-catch-finally文 finallyは最後に絶対に実行される
try {
    console.log("try")
    console.log(gold);
} catch {
    console.log("catch")
} finally {
    console.log("finally")
};

console.log("--------------------------");


// throw(エラーを発生させる文)
try {
    console.log("hello");
    throw "errorだよ";
} catch (error) {
    console.log(error, "good bye");
};
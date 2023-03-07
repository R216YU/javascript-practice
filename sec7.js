// オブジェクト : keyとvalueの組み合わせを格納　pythonの辞書

const interests = "interest";
const person = {
    name: "R216YU",
    age: 30,
    greeting: function () {return "Hello"},
    const: "const",
    "current city": "Tokyo",
    "3.2": 333,
    3: 3,
    1.1: 1.1,
    "-3": -3,
    [interests]: ["music", "travel"],
    1: 1,
};


for (const key in person) {
    console.log(person[key]);
};


console.log("------------------------------");


for (const key of Object.keys(person)) {
    console.log(person[key]);
};


console.log("------------------------------");

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log("------------------------------");


person.name = "RYU0216";
person.gender = "man";
delete person.age;
console.log(person)


console.log("------------------------------");


const name = "Espresso";
const size = 350;
const coffee = {
    name,
    size,
    nutritions: {
        calorie: 10,
        sugar: 10,
    }
};
console.log(coffee);


const coffee2 = {
    ...coffee,
    isHot: true,
    nutritions: {...coffee["nutritions"]}
};
console.log(coffee2)


console.log("------------------------------");


const o1 = {
    a: 1,
    b: 2,
};
const o2 = {
    a: 3,
    b: 4,
};
const o3 = {
    a: 2,
    b: 1,
    c: 8
};

const newObj = Object.assign(o1, o2, o3);
console.log(o1);
console.log(newObj);
console.log(o1 === newObj);


console.log("------------------------------");

const book = {
    title: "JavaScript course",
    price: 9.99,
    author: {
        firstName: "S",
        lastName: "R",
    }
};

const {
    title: bookTitle,
    price,
    author: { firstName: first },
    publisher: pub = "216 pub",
} = book;

console.log(bookTitle, price, first, pub);

const sayBook = ({
    title: bookTitle,
    price,
    author: { firstName: first },
    publisher: pub = "216 pub",
}) => {
    console.log(bookTitle, price, first, pub);
};

sayBook(book);

console.log("title" in book)


console.log("------------------------------");


let user = undefined;
console.log(user?.address);


console.log("------------------------------");
let sayThis = function() {
    console.log(this);
};
sayThis();


let logging = (callback) => {
    console.log(callback());
};


const car = {
    color: "red",
    sayThis,
    changeColor: function(color) {
        logging(() => {
            return this.color;
        })
        this.color = color;
    }
};
car.sayThis();

car.changeColor("white");

console.log("------------------------------");

sayThis = function(a, b) {
    console.log(this, a, b)
};
sayThis.call({ hello: "hello" }, 1, 2);
sayThis.apply({ hello: "hello" }, [1,2]);

sayThis = sayThis.bind({ hello: "hello" }, "1111", );
sayThis("2nd");
sayThis.call({hi: "hi"}, "3rd");


console.log("------------------------------");
console.log("メソッドの省略記法");
const you = {
    name: "ABCD",
    changeName(name) {
        this.name = name;
    },
    age: 23,
};
console.log(you)

you.changeName("EFGhi")
console.log(you)

console.log("------------------------------");
console.log("getter, setter getOwnPropertyDescriptor ")
const pastaCalculator = {
    servingSize: 60,
    member: 4,
    totalFunc() {
        return this.servingSize * this.member;
    },
    get total() {
        return this.servingSize * this.member;
    },
    set total(newValue) {
        this.member = newValue / this.servingSize;
    },
};
console.log(pastaCalculator.totalFunc());
console.log(pastaCalculator.total);

pastaCalculator.total = 600;
console.log(pastaCalculator.total);
console.log(pastaCalculator.member)

console.log(Object.getOwnPropertyDescriptor(pastaCalculator, "servingSize"));
Object.defineProperty(pastaCalculator, "servingSize", { writable: false, enumerable: false });
console.log(pastaCalculator)

for (const key in pastaCalculator) {
    console.log(key)
}
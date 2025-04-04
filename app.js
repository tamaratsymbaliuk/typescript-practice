"use strict";
class User {
    // name: string;
    // private age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name = name;
        // this.age = age;
    }
    print() {
        console.log(this.name);
    }
}
class Admin extends User {
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const buttonElement = document.querySelector('button'); // ! means it will never be null
function add(a, b) {
    return a + b;
}
const result = add(5, 3);
console.log(result);
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
;
const results = []; //assigning type to array { res: number }[] 
buttonElement.addEventListener('click', () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    const resultContainer = {
        res: result,
        print() {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
});
// exmaple of generic functon where whatever type you call will give you that type (T)
function logAndEcho(val) {
    console.log(val);
    return val;
}
logAndEcho('Hi there!').split(' ');

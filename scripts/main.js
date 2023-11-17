/*Дано масив з елементами різних типів. 
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
*/

const client = prompt('Введіть, будь ласка, елементи');
const arr = [...client.split(" ")];

function average (array) {
    const filterNumbers = array.filter ((item) => item === "number" || !isNaN(item));
    const numbers = (filterNumbers.map(string => (Number(string))))
    const sum = numbers.reduce ((a, b) => a + b, 0) / numbers.length;
    return sum;
}

const averageSumResult = average (arr);
alert (`Середнє аріфметичне заданого масиву: ${averageSumResult}`);


/*Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, 
вказаної в змінній znak.Обидва числа і знак виходять від користувача.
*/


const mathematics = prompt('Введіть, будь ласка, дані, в форматі x математичний знак y');
const clientData = mathematics.split(" ");
const firstNum = Number (clientData [0]);
const mathOperator = clientData [1];
const secNum = Number (clientData [2]);

console.log (clientData);

function doMath (x, znak, y) {
    let z
    if (znak == '+') {
        z = x + y;
    } else if (znak == '-') {
        z = x - y;
    } else if (znak == '/') {
        z = x / y;
    } else if (znak == '*') {
        z = x * y;
    } else if (znak == '%') {
        z = x % y;
    } else if (znak == '^') {
        z = x ** y;
    } else z = "It's wrong"

    return z;
}

const result = doMath (firstNum, mathOperator, secNum);

alert (`Результат: ${result}`);




/* 
Написати функцію заповнення даними користувача двомірного масиву. 
Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач.
*/


const first = prompt ('Будь ласка, введіть елементи');
const second = prompt ('Будь ласка, введіть ще елементи');

const firstArr = first.split(" ");
const secArr = second.split(" ");

function twoDimensionalArray (firstArray, secondArray) {
    const newArray = [[firstArray], [secondArray]];
    return newArray;
}

const twoDimArr = twoDimensionalArray (firstArr, secArr);
console.log (twoDimArr);


/*Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач.
*/

const phrase = prompt ("Write something please");

function deleteElements (something) {
    const phraseArr = something.split("");
    const whatDel = prompt ('What do you want to delete?');
    const elToDel = whatDel.split("");
    
    const result = phraseArr.reduce ((acc, item) => {
        if (!elToDel.includes(item)) acc.push(item);
        return acc;},[]);

    return result;
}

const delEl = deleteElements (phrase);
console.log (delEl);
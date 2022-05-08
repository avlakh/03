// LMS TASK

// МІНІМУМ

// 1

function addition () {
    const rez = parseFloat((0.1 + 0.2).toFixed(1));
    alert (rez);
}

// 2

function stringAndNum () {
    const string = parseInt('1');
    const num = 2;
    const rez = string + num;
    alert (rez);
}

// ЦІ ПОМІТКИ ДЛЯ МЕНЕ НА ЗАПАМ'ЯТОВУВАННЯ
//              OR THIS

/* function stringAndNum () {
    const string = '1';
    const num = 2;
    const rez = +string + num;
    // OR const rez = Number(string) + num;
    alert (rez);
} */

// 3

function penDrive () {
    const penDriveSize = parseInt(prompt('Введіть розмір вашої флешки'));
    const rez = Math.floor((penDriveSize * 1024) / 820);
    alert (`Ви можете зберегти ${rez} файлів`);
}

// НОРМА 

// 4

function chocolate () {
    const yourMoney = +prompt('Введіть скільки у вас грошей')
    const chocolatePrice = +prompt('Введіть ціну однієї шоколадки');
    const youCanBuy = Math.floor(yourMoney / chocolatePrice);
    alert (`Ви зможете купити ${youCanBuy} шоколадок і у вас залишиться ${yourMoney - (youCanBuy * chocolatePrice)} гривні`);
}

// 5

function digitMove () {
    let rev = 0, num = +prompt('Введіть трьохзначне число');
    let lastDigit;
    while(num != 0){
        lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num/10);
    }
    alert (rev);
    // знайшов в інтернеті тільки рішення з циклом
}

// МАКСИМУМ

// 6

function yourBank () {
    const yourDeposit = +prompt('Введіть суму вашого вкладу');
    const yourPercent = (yourDeposit / 100) * 5;
    const yourIncome = parseFloat((yourPercent / 12) * 2).toFixed(2);
    const total = +yourDeposit + +yourIncome;
    alert(`Ваш відсоток ${yourIncome}, сумарно ${total}`);
}

// SASHA TASK

// Завдання з використанням IF

// 1

function yourNumber () {
    let number = +prompt('Введіть ваше число');
    if (number > 0) {
        alert ('+');
    } else if (number == 0) {
        alert ('0');
    } else if (number < 0) {
        alert ('-');
    } else {
        alert ('Enter your number');
    }
}

// 2

function yourAge () {
    const age = +prompt('Введіть ваш вік')
    if (age > 0 && age < 120) {
        alert ('Ви існуєте')
    } else {
        alert('Ви не існуєте!!1')
    }
}

// 3
// я не дуже зрозумів як це вивести за допомогою if

function absoluteValueNumber () {
    const number = +prompt('Введіть ваше число')
    alert (Math.abs(number));
}

// 4

function correctTime () {
    const hour = +prompt('Введіть години');
    const minute = +prompt('Введіть хвилини');
    const second = +prompt('Введіть секунди');
    if ((hour > 0 && hour <= 24) && (minute > 0 && minute < 60) && (second > 0 && second < 60)) {
        alert('Ваш час вірний');
    } else {
        alert('Ви ввели невірний час');
    }
}

// 5

function yourCoordinate () {
    const x = +prompt('Вкажіть значення Х');
    const y = +prompt('Вкажіть значення Y');
    let rez = '';
    if (Math.sign(x)===1){
        if (Math.sign(y)===1){
            rez = 'I квадрант';
        } else if (Math.sign(y)===-1){
            rez = 'IV квадрант';
        } else if (Math.sign(y)===0){
            rez = 'Ви на осі X';
        }
    } else if (Math.sign(x)===-1){
        if (Math.sign(y)===1){
            rez = 'II квадрант';
        } else if (Math.sign(y)===-1){
            rez = 'III квадрант'
        } else if (Math.sign(y)===0){
            rez = 'Ви на осі X'
        }
    } else if (Math.sign(x)===0){
        rez = 'Ви на осі Y';
    }
    alert (rez);
}

// Завдання з використанням SWITCH

// 6

function yourMonth () {
    let monthName;
    const monthNumber = prompt('Введіть номер місяця');
    switch (monthNumber) {
        case '1':
            monthName = 'Січень';
            break;
        case '2': 
            monthName = 'Лютий';
            break;
        case '3':
            monthName = 'Березень';
            break;
        case '4': 
            monthName = 'Квітень';
            break;
        case '5': 
            monthName = 'Травень';
            break;
        case '6':
            monthName = 'Червень';
            break;
        case '7':
            monthName = 'Липень';
            break;
        case '8':
            monthName = 'Серпень';
            break;
        case '9': 
            monthName = 'Вересень';
            break;
        case '10': 
            monthName = 'Жовтень';
            break;
        case '11':
            monthName = 'Листопад';
            break;
        case '12':
            monthName = 'Грудень';
            break;
        default:
            monthName = 'Невірне число';
            break;
    }
    alert (monthName);
}

// 7

function calculator () {
    let result;
    let num1 = +prompt('Введіть перше число');
    let num2 = +prompt('Введіть друге число');
    let sign = prompt('Введіть ваш знак');
    switch (sign) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            alert('Введіть правильний знак');
            break;
    }
    alert (result);
}

// Завдання з використанням тернарного оператору

// 8

function biggerNumber () {
    let num1 = +prompt('Введіть перше число');
    let num2 = +prompt('Введіть друге число');
    const bigNumber = (num1 > num2) ? num1 : num2;
    alert(bigNumber);
}

// 9

function multiplyBy5 () {
    let num = +prompt('Введіть ваше число');
    let multiply; 
    const numResult = (num % 5 == 0) ? multiply = 'Ваше число кратне 5' : multiply = 'Ваше число не кратне 5';
    alert (numResult);
}

// 10

function yourPlanet () {
    let planet = prompt('Вкажіть планету');
    let hello;
    let result = (planet == 'Земля' || planet == 'земля') ? hello = 'Привіт, землянин!' : hello = 'Привіт, інопланетянин';
    alert (result); 
}

// 11

function yourStatus () {
    let ageStatus;
    let age = +prompt('Вкажіть ваш вік');
    if (age > 0 && age < 12) {
        ageStatus = 'Ти дитина!';
    } else if (age >= 12 && age < 18) {
        ageStatus = 'Ти підліток!';
    } else if (age >= 18 && age < 60) {
        ageStatus = 'Ти дорослий';
    } else if (age >= 60 && age < 150) {
        ageStatus = 'Ти пенсіонер';
    } else {
        ageStatus = 'зеленський_хто_я_мем'
    }
    alert (ageStatus);
} 

// 12

function yourSymbol () {
    let number = +prompt('Введіть цифру');
    let symbol;
    switch (number) {
        case 1:
            symbol = '!';
            break;
        case 2:
            symbol = '@';
            break;
        case 3:
            symbol = '#';
            break;
        case 4:
            symbol = '$';
            break;
        case 5:
            symbol = '%';
            break;
        case 6:
            symbol = '^';
            break;
        case 7:
            symbol = '&';
            break;
        case 8:
            symbol = '*';
            break;
        case 9:
            symbol = '(';
            break;
        case 0:
            symbol = ')';
            break;
        default:
            symbol = 'Invalid value';
            break;
    }
    alert (symbol);
}

// 13

function digits3 () {
    const number = prompt('Введіть трьохзначне число');
    if (number [0] == number [1] && number [1] == number [2]) {
        alert('Всі цифри однакові');
    } else if (number[0] == number[1]) {
        alert('Перша і друга цифра однакові');
    } else if (number[1] == number[2]) {
        alert ('Друга і третя цифра однакові');
    } else if (number[2] == number[0]) {
        alert ('Перша і третя цифра однакові');
    } else {
        alert ('Немає однакових цифр');
    }
}

// 14

function leapYear () {
    let message;
    let year = +prompt('Вкажіть рік');
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        message = 'Ваш рік високосний';
    } else {
        message = 'Ваш рік невисокосний';
    }
    alert (message);
}

// 15

function palindrome () {
    const number = parseInt(prompt("Введіть п'ятизначне число"));
    let  rez = 0;
    const firstDigit = Math.floor(number / 10000);
    const secondDigit = Math.floor((number / 1000) % 10);
    const fourthDigit = Math.floor((number / 10) % 10); 
    const fifthDigit = number % 10;
    if (firstDigit == fifthDigit && secondDigit == fourthDigit) {
        rez = 'Ваше число паліндром!'
    } else {
        rez = 'Ваше число не паліндром!'
    }
    alert(rez);
}

// 16

function converter () {
    let dollars = +prompt('Введіть кількість доларів');
    let otherCurrency = prompt('Введіть іншу валюту - EUR, UAH чи PLN');
    let result;
    switch (otherCurrency) {
        case 'EUR':
            result = dollars * 0.95;
            break;
        case 'UAH':
            result = dollars * 29.26;
            break;
        case 'PLN':
            result = dollars * 4.45;
            break;
        default:
            result = 'Неправильна валюта'
            break;
    }
    alert (result);
}

// 17

function purchase () {
    const price = +prompt('Вкажіть суму');
    let finalPrice;
    if (price >= 200 && price < 300) {
        finalPrice = price - (price / 100 * 3);
    } else if (price >= 300 && price < 500) {
        finalPrice = price - (price / 100 * 5);
    } else if (price >= 500) {
        finalPrice = price - (price / 100 * 7);
    } else {
        finalPrice = price;
    }
    alert(finalPrice);
}

// 18

function circleAndSquare () {
    const length = +prompt('Введіть довжину окружності.');
    const perimeter = +prompt('Введіть периметр квадрата.');
    const circle = (length ** 2) / (Math.PI * 4);
    alert (circle <= perimeter ? `Коло вписується в квадрат. (Квадрат: ${perimeter}. Коло: ${circle})` : `Коло завелике і не вписується в квадрат. (Квадрат: ${perimeter}. Коло: ${circle})`);
}

// 19

function questionsAndAnswers () {
    // на жаль, не маю рішення, можеш наштовхнути?
}
// 0
// Функція на додавання результату в айдішнік

function showResult(result, whereId) {
    document.getElementById(whereId).innerHTML = result;
}

// 1
// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function argCounter () {
    console.log(arguments.length);
}

// 2
// Напиши функцію, яка приймає 2 числа і повертає: -1, якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.

function checkTwoNumbers (a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    }
}

function twoNumbers (number1, number2) {
    number1 = parseInt(+document.getElementById('twoNumbers_number_1').value);
    number2 = parseInt(+document.getElementById('twoNumbers_number_2').value);
    let rez = 0;
    rez = checkTwoNumbers (number1, number2);
    document.getElementById('twoNumbers_rez').innerText = rez;
}

// 3
// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial (number) {
    number = parseInt(+document.getElementById('factorial_number').value);
    let rez = 1;
    let i = number;
    if (number === 0) {
        rez = 1;
    } else if (number < 0) {
        rez = `Error`
    } else if (number > 0) {
        while (i > 0) {
            rez = rez * i;
            i--;
        }
    }
    document.getElementById('factorial_rez').innerText = rez;
}


// 4
// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function joinNumber (num1,num2,num3) {
    num1 = parseInt(document.getElementById('joinNumber_number1').value);
    num2 = parseInt(document.getElementById('joinNumber_number2').value);
    num3 = parseInt(document.getElementById('joinNumber_number3').value);
    const rez = num1 + '' + num2 + '' + num3;
    document.getElementById('joinNumber_rez').innerText = rez;
}

// 5
// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function checkCalc (a, b) {
    if (a !== 0 && b !== 0) {
        return a * b;
    } else if (a !== 0) {
        return a * a;
    } else if (b !== 0) {
        return b * b;
    } else {
        return false;
    }
}

function calc (length, width) {
    length = parseInt(+document.getElementById('calc_number1').value);
    width = parseInt(+document.getElementById('calc_number2').value);
    let rez = '';
    rez = checkCalc (length, width);
    document.getElementById('calc_rez').innerText = rez;
}

// 6
// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


function getAndCheck (inputId = '') {
    let number = document.getElementById(inputId).value;
    if (number != '') {
        number = parseInt(number);
        if (!isNaN(number)) {
            return number;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isNumberPerfect (n) {
    let sum = 0;
    for (let i = 1; i < n;i++) {
        if (n%i===0) {
            sum += i;
        }
    }
    return sum===n;
}

function perfectNumHTML () {
    let num = 0,
        rez = '';
    if (getAndCheck('perfectNum_number')!==false) {
        num = getAndCheck('perfectNum_number');
    } else {
        return false;
    }
    if (isNumberPerfect (num)){
        rez = `Число ${num} є досконалим`;
    } else {
        rez = `Число ${num} не є досконалим`;
    }
    showResult(rez, 'perfectNum_rez');
}


// 7
// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим


function perfectNumRange (minNum, maxNum) {
    debugger
    minNum = parseInt(document.getElementById('perfectNumRange_number1').value);
    maxNum = parseInt(document.getElementById('perfectNumRange_number2').value);
    // if (minNum !== 0 && maxNum !== 0) {
    //     let result = '';
    //     for (let i = minNum; i <= maxNum; i++) {
    //         if (isNumberPerfect(minNum)) result += `Тут є такі досконалі числа${i} + ', '`;
    //     }
    //     return result;
    // } else {
    //     result = 'У цьому діапазоні немає досконалих чисел'
    // }
    showResult(result, 'perfectNumRange_rez');
}

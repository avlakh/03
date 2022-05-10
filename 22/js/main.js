// 1

function argCounter () {
    console.log(arguments.length);
    
}

// 2

function twoNumbers (number1, number2) {
    number1 = parseInt(+document.getElementById('twoNumbers_number_1').value);
    number2 = parseInt(+document.getElementById('twoNumbers_number_2').value);
    let rez = 0;
    if (number1 < number2) {
        rez = -1;
    } else if (number1 > number2) {
        rez = 1;
    } else if (number1 === number2) {
        rez = 0;
    }
    document.getElementById('twoNumbers_rez').innerText = rez;
}

// 3

function factorial (number) {
    number = parseInt(+document.getElementById('factorial_number').value);
    let rez = 0;
    if (number === 0) {
        rez = `Факторіал ${number} - 1`
    } else if (number < 0) {
        rez = `Факторіала для ${number} не існує`
    } else if (number > 0) {
        rez = number * factorial(number - 1);
    }
    document.getElementById('factorial_rez').innerText = rez;
}

// 4

function joinNumber (num1,num2,num3) {
    num1 = parseInt(+document.getElementById('joinNumber_number1').value);
    num2 = parseInt(+document.getElementById('joinNumber_number2').value);
    num3 = parseInt(+document.getElementById('joinNumber_number3').value);
    const rez = num1 + '' + num2 + '' + num3;
    document.getElementById('joinNumber_rez').innerText = rez;
}

// 5

function calc (length, width) {
    length = parseInt(+document.getElementById('calc_number1').value);
    width = parseInt(+document.getElementById('calc_number2').value);
    let rez = 0;
    if (length !== 0 && width !== 0) {
        rez = length * width;
    } else if (length !==0 ) {
        rez = length * length;
    } else if (width !== 0) {
        rez = width * width;
    } else {
        rez = 'Введіть хоча б одне число'
    }
    document.getElementById('calc_rez').innerText = rez;
}

// 6

function perfectNumCheck () {
    let num = parseInt(document.getElementById('perfectNum_number').value);
    let rez = 0;
    for (let i = 0; i < num; i++) {
        if (num % 1 === 0) {
            rez += i;
        }
    }
    return rez === num;
}

function perfectNum(num) {
    num = parseInt(document.getElementById('perfectNum_number').value);
    let rez = '',
        a = 0;
    for (i = num - 1; i > 0; i--) {
        if (num % i == 0) {
            a += i;
        }
    }
    if (a == num) {
        rez = 'Це число досконале';
    } else {
        rez = 'Це число недосконале'
    }
    document.getElementById('perfectNum_rez').innerText = rez;
}

// 7


function perfectNumRange (minNum, maxNum) {
    minNum = parseInt(document.getElementById('perfectNumRange_number1').value);
    maxNum = parseInt(document.getElementById('perfectNumRange_number2').value);
    let rez = '',
        range = '';
    if (minNum > maxNum || isNaN(minNum) || minNum === null || minNum === undefined || isNaN(maxNum) || maxNum === null || maxNum || undefined) {
        rez = 'Числа введено неправильно. Виправте і спробуйте ще раз'
    } else {
    //    в мене тут проблема з поєднанням функцій з обробкою того числа, а потім виведенням його сюди..ну короч, таке шось
    }
    document.getElementById('perfectNumRange_rez').innerText = rez;
}
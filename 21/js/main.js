// ПРАКТИКА З УРОКУ - НЕХАЙ ТУТ БУДЕ

function task1() {
    const num = parseInt(document.getElementById('task_1_number').value);
    let rez = '';
    let i = 0;
    while (i<num) {
        rez += "#";
        i++;
    }
    document.getElementById('task_1_result').innerText = rez;
}

function task2 () {
    const num = parseInt(document.getElementById('task_2_number').value);
    let rez = '';
    let i = num;
    while (i>=0) {
        rez += i+' ';
        i--;
    }
    document.getElementById('task_2_result').innerText = rez;
}

function task4 () {
    const num1 = parseInt(document.getElementById('task_4_number1').value);
    const num2 = parseInt(document.getElementById('task_4_number2').value);
    let rez = '';
    let i = 1;
    const minNum = num1<num2 ? num1 : num2;
    while (i <= minNum) {
        if (num1%1==0 && num2%i==0) {
            rez += i+', ';
        }
        i++;
    }
    if(minNum===num1) {
        if (num2%num1==0) {
            rez += num1;
        }
    } else {
        if(num1%num2==0) {
            rez += num2;
        }
    }
    document.getElementById('task_4_result').innerText = rez;
}

// ДОМАШКА
// знаю, що завдання з попереднього уроку, але я додатково практикувався :D

function homeTask1 () { 
    const age = parseInt(document.getElementById('home_task_1').value); 
    let result = '';
    if (age > 0 && age < 12) {
        result = 'Ти - дитина!';
    } else if (age > 12 && age < 18) {
        result = 'Ти - підліток!';
    } else if (age > 18 && age < 60) {
        result = 'Ти - дорослий!';
    } else if (age > 60 && age < 150) {
        result = 'Ти - пенсіонер!';
    } else { 
        result = 'зеленський_мем_хто_я'
    }
    document.getElementById('home_task_1_result').innerText = result;
}

function homeTask2 () {
    const keyNumber = document.getElementById('home_task_2').value;
    let symbol = '';
    switch (keyNumber) {
        case '1':
            symbol = '!';
            break;
        case '2':
            symbol = '@';
            break;
        case '3':
            symbol = '#';
            break;
        case '4':
            symbol = '$';
            break;
        case '5':
            symbol = '%';
            break;
        case '6':
            symbol = '^';
            break;
        case '7':
            symbol = '&';
            break;
        case '8':
            symbol = '*';
            break;
        case '9':
            symbol = '(';
            break;
        case '0':
            symbol = ')';
            break;
        default:
            symbol = 'Виберіть цифру від 1 до 0 на клавіатурі';
            break;
    }
    document.getElementById('home_task_2_result').innerText = symbol;
}

function homeTask3 () {
    const number1 = parseInt(+document.getElementById('home_task_3_number_1').value);
    const number2 = parseInt(+document.getElementById('home_task_3_number_2').value);
    let totalNumber = 0;
    for (let i = number1; i <= number2; i++) {
        totalNumber += i;
    }
    document.getElementById('home_task_3_result').innerText = totalNumber;
}

function homeTask4 () {
    debugger
    let number1 = parseInt(+document.getElementById('home_task_4_number_1').value);
    let number2 = parseInt(+document.getElementById('home_task_4_number_2').value);
    
    while (number1 != 0 && number2 != 0) {
        if (number1 > number2) {
            number1 %= number2;
        } else {
            number2 %= number1;
        }
    }
    const biggestDiv = number1 + number2;

    document.getElementById('home_task_4_result').innerText = biggestDiv;
}

function homeTask5 () {
    const num1 = parseInt(document.getElementById('home_task_5_number_1').value);
    const num2 = parseInt(document.getElementById('home_task_5_number_2').value);
    let rez = '';
    let i = 1;
    const minNum = num1<num2 ? num1 : num2;
    while (i <= minNum) {
        if (num1%1==0 && num2%i==0) {
            rez += i+', ';
        }
        i++;
    }
    if(minNum===num1) {
        if (num2%num1==0) {
            rez += num1;
        }
    } else {
        if(num1%num2==0) {
            rez += num2;
        }
    }
    document.getElementById('home_task_5_result').innerText = rez;
}

function homeTask6 () {
// без рішення поки
}

function homeTask7 () {
    const num1 = parseInt(document.getElementById('home_task_7_number').value);
    let discountedPrice;
    if (num1 >= 200 && num1 < 300) {
        discountedPrice = num1 - (num1 / 100 * 3); 
    } else if (num1 >= 300 && num1 < 500) {
        discountedPrice = num1 - (num1 / 100 * 5);
    } else if (num1 >= 500) {
        discountedPrice = num1 - (num1 / 100 * 7);
    } else {
        discountedPrice = num1;
    }
    document.getElementById('home_task_7_result').innerText = Math.floor(discountedPrice);
}

function homeTask8 () {
// без рішення поки
}

function homeTask9 () {
// без рішення поки
}

function homeTask10 () {
// без рішення поки
}

function homeTask11 () {
// без рішення поки
}

function homeTask12 () {
// без рішення поки
}

// 1

function age () { 
    const age = parseInt(document.getElementById('home_task_1').value); 
    let result = '';
    if (age > 0 && age < 12) {
        result = 'Ти - дитина!';
    } else if (age >= 12 && age < 18) {
        result = 'Ти - підліток!';
    } else if (age >= 18 && age < 60) {
        result = 'Ти - дорослий!';
    } else if (age >= 60 && age < 150) {
        result = 'Ти - пенсіонер!';
    } else { 
        result = 'зеленський_мем_хто_я'
    }
    document.getElementById('home_task_1_result').innerText = result;
}

// 2

function guessNumber () {
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

// 3

function numberRange () {
    const number1 = parseInt(+document.getElementById('home_task_3_number_1').value);
    const number2 = parseInt(+document.getElementById('home_task_3_number_2').value);
    let totalNumber = 0;
    for (let i = number1; i <= number2; i++) {
        totalNumber += i;
    }
    document.getElementById('home_task_3_result').innerText = totalNumber;
}

// 4

function biggestDiv () {
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

// 5

function allDivs () {
    const num = parseInt(document.getElementById('home_task_5_number').value);
    let rez = '',
        i = num;
    while (i > 0) {
        if (num % i == 0) {
            rez += i + ', ';
        }
        i--;
    }
    document.getElementById('home_task_5_result').innerText = rez;
}

// 6

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
    document.getElementById('home_task_6_result').innerText = rez;
}

// 7

function discount () {
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

// 8

function numberStat () {
    let  dodatni = 0, 
        videmni = 0,
        nuli = 0,
        parni = 0,
        neparni = 0,
        rezultat = '',
        number = 0,
        allNumbers = '',
        i = 0;
    const limit = 10; 
    while (i < limit) {
        number = parseInt(prompt('Введіть ваше число'));
        if (!isNaN(number)) {
            allNumbers += number +', '
            if (number === 0) {
                nuli++;
            } else {
                if (number > 0) {
                    dodatni++;
                } else {
                    videmni++;
                }
            }
            if (number%2===0) {
                parni++;
            } else {
                neparni++;
            }
            i++;
        }
    }
    rezultat = `Додатні: ${dodatni}, від'ємні: ${videmni}, нуль: ${nuli}, парні: ${parni}, непарні: ${neparni}`
    document.getElementById('home_task_8_result').innerHTML = allNumbers+'<br>'+rezultat;
}

// 9
// була ідея на перечислення днів, і знайшов отаке от рішення (це, здається, масив хехе), не знаю, як можна по-інакшому

function dayWeek () {
    let answer = true;
    const daysWeek = [`Понеділок`, `Вівторок`, `Середа`, `Четвер`, `П'ятниця`, `Субота`, `Неділя`];
    let i = 0;
    while (answer) {
        answer = confirm(`Це ${daysWeek[i]}. А який наступний день тижня?`);
        if (i === 6) i = 0;
        i++;
    }
    alert ('Кінець');
}

// 10

function yourGuessNum() {
    let from = 0,
        to = 100,
        mid = 50;
    do {
        answer = prompt(`Ваше число < ${mid}? Відповідь: '>' або '<' або '='`);
        if (answer == '>') {
            from = mid;
            mid = Math.floor(((to - from) / 2) + mid);
        }

        if (answer == '<') {
            to = mid;
            mid = Math.floor(((to - from) / 2) + from);
        }
    } while (answer !== '=') {
        alert(`Ваше число ${mid}`)
    }
}

// 11

function timesTable () {
    let r = '<div style="display:flex;flex-wrap:wrap;gap:30px;">';
    for (let i=2;i<=9;i++) {
        r += '<ul>';
        for (let j=1; j<=10; j++) {
            r += '<li>'+i+' * '+j+' = '+(i*j)+'</li>';
        }
        r += '</ul>';
    }
    r += '</div>';
    document.getElementById('home_task_11_result').innerHTML = r;
}

// 12

function yourDate () {
    let day = parseInt(document.getElementById('home_task_12_day').value);
    let month = parseInt(document.getElementById('home_task_12_month').value);
    let year = parseInt(document.getElementById('home_task_12_year').value);
    let rez = '';
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7: 
        case 8:
        case 10:
            if (day >= 1 && day < 31) {
                day++;
            } else if (day = 31) {
                day = 1;
                month++
            } else {
                rez = 'Введіть правильний день';
            }
            break;
        case 2:
            if (day >= 1 && day < 28) {
                day++;
            } else if (day = 28) {
                if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
                    day++;
                } else {
                    day = 1;
                    month++;
                }
            } else {
                rez = 'Введіть правильний день';
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (day >= 1 && day < 30) {
                day++
            } else if (day = 30) {
                day = 1;
                month++;
            } else {
                rez = 'Введіть правильний день'
            }
            break;
        case 12:
            if (day >= 1 && day < 31) {
                day++;
            } else if (day = 31) {
                day = 1;
                month = 1;
                year++;
            } else {
                rez = 'Введіть правильний день';
            }
            break;
    }
    rez = `${day}. ${month}. ${year}`
    document.getElementById('home_task_12_result').innerText = rez;
}

// 13

function showHash() {
    const num = parseInt(document.getElementById('home_task_13_number').value)
    let rez = '',
        i = 0;
    while (i < num) {
        rez += '# ';
        i++;
    }
    document.getElementById('home_task_13_result').innerText = rez;
}

// 14

function showNumber () {
    const num = parseInt(document.getElementById('home_task_14_number').value);
    let rez = '',
        i = num;
    while (i>=0) {
        rez += i + ' ';
        i--;
    }
    document.getElementById('home_task_14_result').innerText = rez;
}

// 15

function expo () {
    const num = parseInt(document.getElementById('home_task_15_number').value);
    const exponent = parseInt(document.getElementById('home_task_15_exponent').value);
    let rez = 0;
    rez = Math.pow(num, exponent);
    document.getElementById('home_task_15_result').innerText = rez;
}

// 16

function allDivsForNumber () {
// біда 
}

// 17

function factorial () {
    debugger
    const num = parseInt(document.getElementById('home_task_17_number').value);
    let rez = 1;
    let i = num;
    while (i > 0) {
        rez = rez * i;
        i--;
    }
    document.getElementById('home_task_17_result').innerText = rez;
}

// 18

function letUserCalc () {
    let rez = '';
    do {
        rez = prompt('Скільки буде 2 + 2 * 2')
    } while (rez !== '6');
}

// 19

function divBy2 () {
    const num = parseInt(document.getElementById('home_task_19_number').value);
    rez = num;
    let i = 0;
    do {
        rez = rez / 2;
        i++;
    } while (rez >= 50);
    document.getElementById('home_task_19_result').innerText = `Ваш результат ${rez} і кількість ділення ${i}`;
}

// 20

function from1to100 () {
    const num = parseInt(document.getElementById('home_task_20_number').value);
    let rez = 0;
    for (let i = 0; i <= 100;i++) 
    if (num % i == 0) {
        rez += i + ', '
    }
    document.getElementById('home_task_20_result').innerText = rez;
}

function every4 () {
    const minNum = parseInt(document.getElementById('home_task_21_number_1').value);
    const maxNum = parseInt(document.getElementById('home_task_21_number_2').value);
    let rez = '';
    for (let i = minNum; i <= maxNum; i = i+4) {
        rez += i + ', ';
    }
    document.getElementById('home_task_21_result').innerText = rez;
}

function primeNumber () {
    const num = parseInt(document.getElementById('home_task_22_number').value);
    let rez = '';
    for (let i = (num - 1); i > 1; i--) {
        if (num % i == 0) {
            rez = 'Це число непросте';
        } else {
            rez = 'Це число просте'
        }
    }
    document.getElementById('home_task_22_result').innerText = rez;
}



/*

ПРАКТИКА З УРОКУ - НЕХАЙ ТУТ БУДЕ

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


*/
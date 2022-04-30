function myPow() {
    const num = parseInt(prompt('Введіть число'));
    const num2 = parseInt(prompt('Введіть натсупне число'));
    const rez = num**num2;

    alert(rez);
}

function avgNum() {
    const num = parseInt(prompt('Введіть число'));
    const num2 = parseInt(prompt('Введіть наступне число'));
    const rez = (num+num2)/2;
    
    alert(rez);
}

function squareNum() {
    const num = parseInt(prompt('Вкажіть сторону квадрата'));
    const rez = num**2; 

    alert(rez);
}

function km2ml () {
    const km = parseInt(prompt('Вкажіть кілометри'));
    const K = 0.621371;
    const ml = km*K; 

    alert (`В милях - ${ml} ml`);
}

function calc () { 
    const num = parseInt(prompt('Вкажіть число 1')); 
    const num2 = parseInt(prompt('Вкажіть число 2'));
    const action = prompt('Вкажіть дію');
    let rez;
    if (action==='+') {
        rez = num + num2;
    } else if (action==='-') {
        rez = num - num2;
    } else if (action==='*') {
        rez = num * num2;
    } else if (action==='/') {
        rez = num / num2;
    } else {
        alert('Недопустимий символ')
    }

    if (rez != undefined) {
        alert(`Результат - ${rez}`);
    }
}

function findX () {
    const a = parseInt(prompt('Вкажіть число 1'));
    const b = parseInt(prompt('Вкажіть число 2'));
    const x = b * (-1) / a;
    alert(`Ікс дорівнює : ${x}`);
}

function timeToDayEnd () {
    const hour = +prompt('Enter hour');
    const minute = +prompt('Enter minutes');
    const minutesTotalLeft = ((24 * 60) - (hour * 60 + minute));
    const hoursLeft = parseInt(minutesTotalLeft / 60);
    const minutesLeft = minutesTotalLeft - hoursLeft * 60; 
    alert(`hours left: ${hoursLeft}, minutes left: ${minutesLeft}`);
}

function digit2 () {
    const abc = +prompt('Введіть трьохзначне число'); 
    const rez = parseInt((abc % 100) / 10);
    alert(`Друга цифра ${rez}`);
}
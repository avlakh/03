function myPow() {
    const num = parseInt(prompt('Enter integer number'));
    const num2 = parseInt(prompt('Enter integer number2'));
    const rez = num**num2;

    alert(rez);
}

function avgNum() {
    const num = parseInt(prompt('Enter integer number'));
    const num2 = parseInt(prompt('Enter integer number2'));
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


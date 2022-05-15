// Мінімум
// об'єкт

let objCar = {
    manufacturer: 'Audi',
    model: 'TT',
    year: 2022,
    avgSpeed: 120,
    fuelTank: 100,
    avgConsumption: 12.5,
    driver: {
        name: 'Артем',
        beAbleToDrive: true
    },
    // тут я просто хотів попрактикувати функцію в об'єкті - думаю можна було просто в carInfo описати цю ж функцію і вивести її там - чесно, я не думаю, що це погане рішення, але з радістю почитаю твою думку
    showCarInfo () {
        return `Твоя машина називається ${this.manufacturer}, вона ${this.year} року. Середня швидкість ${this.avgSpeed} км/год? Та ну, ти можеш краще! Бак твій на ${this.fuelTank} літрів і звати тебе, до речі,- ${this.driver.name}`;
    }
}

// Висновок на екран з інформацією про автомобіль.

function carInfo (result) {
    result = objCar.showCarInfo();
    document.getElementById('objCar_result').innerText = result;
}

// Додавання водія, який має право керувати автомобілем.

function addDriver (driverName, driverSkill) {
    driverName = document.getElementById('car_driver').value;
    driverSkill = confirm('Він має право керувати автомобілем?');
    if (driverSkill == true) {
        Object.assign(objCar, {newDriver: {name: driverName, beAbleToDrive: true}});
        document.getElementById('objCar_result').innerText = 'Водія додано!'
    } else {
        document.getElementById('objCar_result').innerText = 'Додайте водія, який може керувати автомобілем!'
    }
}

// Заправка автомобіля.

function refuel (result) {
    result = (objCar.fuelTank / objCar.avgConsumption) * 100;
    document.getElementById('objCar_result').innerText = `Твій бак становить ${objCar.fuelTank} літрів. При середній швидкості в ${objCar.avgSpeed} км/год ти проїдеш ${result} кілометрів. Нічосі!`;
}

// Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.

function calcYourTrip (distance) {
    distance = parseInt(document.getElementById('car_distance').value);
    const time = distance / objCar.avgSpeed;
    let hourBreak = 0,
        distTimeInSec = time * 60 * 60;
    if (time >= 4) {
        hourBreak = Math.floor(time / 4);
        distTimeInSec += 3600 * hourBreak;
    }
    let seconds = Math.floor(distTimeInSec % 60);
    const calcMinutes = distTimeInSec / 60;
    let minutes = Math.floor(calcMinutes % 60);
    const calcHours = calcMinutes / 60;
    let hours = Math.floor(calcHours % 60);
    if (seconds === 0) seconds = '00';
    if (minutes === 0) minutes = '00';
    if (hours === 0) hours = '00';
    return `Твоя подорож займе: ${hours}:${minutes}:${seconds} при умові, що твоя середня швидкість буде ${objCar.avgSpeed} км/год. За цей час ти зробиш ${hourBreak} зупинок`
}

function yourTrip (result) {
    result = calcYourTrip();
    document.getElementById('objCar_result').innerText = result;
}

// Норма
// Об'єкт

const objTime = {
    hours: 14,
    minutes: 22,
    seconds: 17,
    timeInfo () {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    },
    getSeconds () {
        return (this.hours * 3600) + (this.minutes * 60) + this.seconds;
    },
    convertSeconds (secondsInput = 0) {
        const seconds = Math.floor(secondsInput % 60);
        const calcMinutes = secondsInput / 60;
        const minutes = Math.floor(calcMinutes % 60);
        const calcHours = calcMinutes / 60;
        const hours = Math.floor(calcHours % 60);
        return `${hours}:${minutes}:${seconds}`
    }
}

// Для виведення часу на екран
function showTime (result) {
    result = objTime.timeInfo();
    document.getElementById('objTime_result').innerText = result;
}

// Зміни часу на передане кількість секунд.

function addSeconds (result) {
    const secondsInput = parseInt(document.getElementById('seconds_change').value);
    const totalSeconds = objTime.getSeconds() + secondsInput;
    result = objTime.convertSeconds (totalSeconds)
    document.getElementById('objTime_changed_result').innerText = result;
} 

// Зміни часу на передане кількість хвилин.

function addMinutes (result) {
    const minutesInput = parseInt(document.getElementById('minutes_change').value);
    const seconds = minutesInput * 60;
    const totalSeconds = objTime.getSeconds() + seconds;
    result = objTime.convertSeconds (totalSeconds);
    document.getElementById('objTime_changed_result').innerText = result;
}

// Зміни часу на передане кількість годин.

function addHours (result) {
    const hoursInput = parseInt(document.getElementById('hours_change').value);
    const seconds = hoursInput * 3600;
    const totalSeconds = objTime.getSeconds() + seconds;
    result = objTime.convertSeconds (totalSeconds);
    document.getElementById('objTime_changed_result').innerText = result;
}

// як тут поставити ліміт в 24 години? я пробував циклом, який би приймав години з об'єкта в ітератор, і ліміт би був 24, але чесно в мене не вийшло якось :(


// максимум не осилив :D


// практика з уроку

// function myFunc (a = 0, b = 0) {
//     const ra = a * 2;
//     const rb = b * 2;
//     return [ra, rb]
// }

// // arrays
// const arr = [1,2,3,4,5,6,7,8,9,0];

// console.log(arr[arr.length-1]);

// // змінили елемент
// arr [1] = 22;

// // додали елемент
// arr[100] = 123; 

// console.log(arr);
// console.log('length', arr.length);


// // так перебираємо масиви - це класичний підхід!!! показує і ключ і значення

// for (let i=0;i<arr.length;i++) {
//     console.log(arr[i]);
// }


// // для об'єктів робимо for in - воно перебирає (!) непусті елементи
// // тут отримуємо ключ 
// for(k in obj) {
//     console.log(arr[key]);
// }


// // тут отримуємо значення ключа, але не знаємо ключа
// for (k of obj) {
//     console.log(value);
// }

//  методи 

// const arr = [1,2,3,4,5,6,7,8,9,0];

// const len = arr.push(10, 11, 12, 13, 14); // <<<< в такій послідовності додадуться в масив, це додаємо в кінець

// const last = arr.pop() // <<<< видаляє і повертає значення. вкорочує масив



// console.log(arr);
// console.log(len);
// console.log(last);


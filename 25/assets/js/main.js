const style = {
    body: {
        backgroundColor: 'lightblue'
    },
    button: {
        margin: '20px 20px',
        backgroundColor: '#ffd700',
        padding: '5px 10px',
        borderRadius: '20px'
    },
    ol: {
        marginLeft: '20px',
    },
    p: {
        textAlign: 'center',
        padding: '40px'
    }
};

// ЗАВДАННЯ 1
// Створити сторінку, що показує нумерований список пісень

// масив об'єктів
const playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];
// вибрали дівчик
const playListDiv = document.querySelector('.show_playlist');

// зробили кнопочку
const playListButton = document.createElement('button');
playListButton.setAttribute('type', 'button');
playListButton.innerText = 'Click to see songs';

// списочок
const olElem = document.createElement('ol');
function showSongs () {
    let list = '';
    for (let elem in playList) {
        list += `<li><strong>${playList[elem].author}</strong> - ${playList[elem].song}`
    }
    return list;
}
// дія кнопки
playListButton.onclick = function () {
    olElem.innerHTML = showSongs();
}

// структура
playListDiv.prepend(playListButton);
playListDiv.append(olElem);


// Завдання 2
// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.


// вибрали дівчик
const modalWindow = document.querySelector('.modal_window');

// кнопочка
const modalButton = document.createElement('button');
modalButton.setAttribute('type', 'button');
modalButton.innerText = 'Click to see modal window';

// функція на модалку 
function toggleModalWindow () {
    const modalBg = document.querySelector('.modal_bg');
    const modalInner = document.querySelector('.modal_inner');
    modalBg.classList.toggle('visible');
    modalInner.classList.toggle('visible');
}

// внутрішній контент
const innerModalButton = document.querySelector('.inner_button');
const innerModalText = document.querySelector('.inner_text')

// class toggle
innerModalButton.onclick = toggleModalWindow;modalButton.onclick = toggleModalWindow;

// структура
modalWindow.prepend(modalButton);


// Завдання 3
// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

// кнопочка
const trafficLightDiv = document.querySelector('.traffic_light');
const trafficButton = document.createElement('button')
trafficButton.setAttribute('type', 'button');
trafficButton.innerText = 'See the next light';

// зміна кольору
const redLight = document.querySelector('.red_light');
const yellowLight = document.querySelector('.yellow_light');
const greenLight = document.querySelector('.green_light');
const trafficArray = [redLight, yellowLight, greenLight];

function toggleTraffic () {
    trafficArray.forEach((elem) => elem.classList.toggle('traffic_opacity'));
}

trafficButton.onclick = toggleTraffic;

// не вдається повісити на циклі opacity так, щоб воно мінялось тільки по одному, наштовхнеш, будь ласка? воно перебрало і додало все, але я не знаю як зробити так, щоб воно як тільки додало наступний, то видалило попередній


// структура
trafficLightDiv.append(trafficButton)


// додаємо стилі
function applyStyle (style, elem) {
    for (let prop in style) {
        elem.style[prop] = style[prop];
    }
}

applyStyle(style.body, document.body);
applyStyle(style.button, playListButton);
applyStyle(style.button, modalButton);
applyStyle(style.ol, olElem);
applyStyle(style.button, innerModalButton)
applyStyle(style.p, innerModalText)
applyStyle(style.button, trafficButton)
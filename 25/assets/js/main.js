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
        margin: '20px 0 0 20px'
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
// списочок
const olElem = document.createElement('ol');
const liElem = document.createElement('li');
const strong = document.createElement('strong');
const em = document.createElement('em');
liElem.append(strong);
liElem.append(em)
// цикл
playList.forEach(item => {
    const liClone = liElem.cloneNode(true);
    liClone.children[0].innerText = item.author + ': ';
    liClone.children[1].innerText = item.song;
    olElem.append(liClone);
})
// структура
playListDiv.append(olElem);


// Завдання 2
// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

// вибрали дівчик
const modalWindow = document.querySelector('.modal_window');
// створили кнопку на відкриття модалки
const modalButton = document.createElement('button');
modalButton.setAttribute('type', 'button');
modalButton.innerText = 'Click to see modal window';
// створили бекграунд модалки
const modalBg = document.createElement('div');
modalBg.classList.add('modal_bg');
// створили модалку
const modalInner = document.createElement('div');
modalInner.classList.add('modal_inner');
// текст в модалці
const modalText = document.createElement('p');
modalText.classList.add('inner_text');
modalText.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, consequuntur molestiae, facilis ea vero id laboriosam amet earum assumenda repellendus nam quasi pariatur aperiam consequatur deleniti. Soluta dolores nobis odio?'
// кнопка в модалці
const modalInnerBtn = document.createElement('button');
modalInnerBtn.setAttribute('type', 'button');
modalInnerBtn.classList.add('inner_button');
modalInnerBtn.innerText = 'Close'
// створили вкладеність
modalWindow.prepend(modalButton);
modalWindow.append(modalBg);
modalBg.prepend(modalInner);
modalInner.prepend(modalText);
modalInner.append(modalInnerBtn);

// функція на модалку 
function toggleModalWindow () {
    modalBg.classList.toggle('visible');
    modalInner.classList.toggle('visible');
}

// class toggle
modalInnerBtn.onclick = toggleModalWindow;
modalButton.onclick = toggleModalWindow;

// Завдання 3
// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

// беремо дів
const trafficLightDiv = document.querySelector('.traffic_light');
// робимо бекграунд для світлофора
const trafficLightBorder = document.createElement('div');
trafficLightBorder.classList.add('traffic_light_border');
// робимо світла для світлофора
// червоне
const redLight = document.createElement('div');
redLight.classList.add('red_light')
// жовте
const yellowLight = document.createElement('div');
yellowLight.classList.add('yellow_light');
// зелене
const greenLight = document.createElement('div');
greenLight.classList.add('green_light');
// структура
trafficLightDiv.prepend(trafficLightBorder);
trafficLightBorder.prepend(redLight)
trafficLightBorder.append(yellowLight);
trafficLightBorder.append(greenLight)
// кнопочка
const trafficButton = document.createElement('button')
trafficButton.setAttribute('type', 'button');
trafficButton.innerText = 'See the next light';
trafficLightDiv.append(trafficButton);

function isOpacity(opacity) {
    return opacity.classList.contains('traffic_opacity');
}
function addRemoveOpacity (firstLight, secondLight = 0) {
    if (secondLight === 0) {
        firstLight.classList.add('traffic_opacity');
    } else {
        firstLight.classList.remove('traffic_opacity');
        secondLight.classList.add('traffic_opacity');
    }
}
// масив
const trafficArray = [redLight, yellowLight, greenLight];
function toggleTraffic () {
    const red = trafficArray[0],
        yellow = trafficArray[1],
        green = trafficArray[2];
    if (!isOpacity(red) && !isOpacity(yellow) && !isOpacity(green)) {
        addRemoveOpacity(red);
    }  else if (isOpacity(red)) {
        addRemoveOpacity(red, yellow);
    } else if (isOpacity(yellow)) {
        addRemoveOpacity(yellow, green);
    } else {
        addRemoveOpacity (green, red)
    }
}

trafficButton.onclick = toggleTraffic;

// додаємо стилі
function applyStyle (style, elem) {
    for (let prop in style) {
        elem.style[prop] = style[prop];
    }
}

// стилі
// таск 1
applyStyle(style.body, document.body);
applyStyle(style.ol, olElem);
// таск 2
applyStyle(style.button, modalButton);
applyStyle(style.button, modalInnerBtn)
applyStyle(style.p, modalText)
// таск 3
applyStyle(style.button, trafficButton)

//Создать html-страницу, на которой будет кнопка и текст. При нажатии на кнопку, текст должен скрываться.
//При повторном нажатии – текст должен снова отображаться.

const text = 'Lorem ipsum dolor sit amet';

const div = document.createElement('div');
const p = document.createElement('p');
div.append(p);
div.style.border = '1px solid #999';
div.style.padding = '10px 20px';

const button = document.createElement('button');
button.setAttribute('type', 'button');

button.innerText = 'Click to toggle text';

button.onclick = function() {
    p.innerText = p.innerText === '' ? text : '';
}
    
const wrap = document.querySelector('#text_wrap');
wrap.append(div);
wrap.prepend(button);


const style = {
    body: {
        backgroundColor: '#242424'
    },
    div: {
        border: '1px solid #999',
        padding: '10px 20px'
    },
    button: {
        borderRadius: '4px',
        backgroundColor: 'blue',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '20px',
        padding: '7px'
    },
    bar: {
        height: '40px',
        border: '1px solid lightblue',
        margin: '20px auto',
        width: '80%'
    },
    scale: {
        backgroundColor: 'blue',
        width: '0',
        height: '38px'
    }
};

function applyStyle (style, elem) {
    for (let prop in style) {
        elem.style[prop] = style[prop];
    }
}

applyStyle(style.div, div);
applyStyle(style.body, document.body);
applyStyle(style.button, button);



// Создать html-страницу с progressbar и кнопкой, при нажатии на которую заполненность progressbar увеличивается на 5%.

const bar = document.createElement('div');
const scale = document.createElement('div');
const buttonForScale = document.createElement('button');
buttonForScale.setAttribute('type', 'button');
buttonForScale.innerText = 'Add 5%'
applyStyle(style.button, buttonForScale)

buttonForScale.onclick = function(){
    if (parseInt(scale.style.width) < 100) {
        scale.style.width = (parseInt(scale.style.width) + 5) + '%';
    } else {
        buttonForScale.setAttribute('disabled', 'disabled');
        buttonForScale.style.opacity = 0.2;
    }
}

bar.append(scale);

const progresswrap = document.querySelector('.progress_wrap');
progresswrap.append(bar);
progresswrap.append(buttonForScale);


applyStyle(style.bar, bar);
applyStyle(style.scale, scale);



// Создать html-страницу со вкладками. С левой стороны страницы отображается несколько вкладок, по которым можно переключаться. У каждой вкладки есть свое содержимое, но в один момент времени отображается содержимое только активной вкладки.
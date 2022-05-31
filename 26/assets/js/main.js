// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl +, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

const edit = document.querySelector('.edit_text');
const result = document.querySelector('.result_text');

window.addEventListener('keydown', event => {
    if (event.code === 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        edit.classList.remove('hide');
        result.classList.add('hide');
        edit.innerText = result.innerText;
    }
    if (event.code === 'Equal' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        edit.classList.add('hide');
        result.classList.remove('hide');
        result.innerText = edit.value;
    }
})

// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

// масив
const BEATLES = [
    {
        name: 'Ringo Starr',
        age: 23,
        role: 'drummer',
        instrument: 'percussion'
    },
    {
        name: 'John Lennon',
        age: 26,
        role: 'lead vocals',
        instrument: 'lead guitar'
    },
    {
        name: 'Paul McCartney',
        age: 24,
        role: 'backing vocals',
        instrument: 'bass guitar'
    },
    {
        name: 'George Harrison',
        age: 27,
        role: 'backing vocals',
        instrument: 'rhythm guitar'
    }
]

// будуємо таблицю
function buildTable () {
    let html = '';
    BEATLES.forEach(elem => {
        html += `
            <tr>
                <td>${elem.name}</td>
                <td>${elem.age}</td>
                <td>${elem.role}</td>
                <td>${elem.instrument}</td>
            </tr>
        `;
    })
    document.getElementById('beatles_table').innerHTML = html;
}
buildTable();


// сортування
function sortTable(n) {
let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
table = document.getElementById("beatles_table");
switching = true;
dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
    //   перебираємо рядки один по одному, йдемо по стовпчику
        for (i = 0; i < (rows.length - 1); i++) {
        // початково ставимо шуд світч у фолс, щоб потім змінити на тру
        shouldSwitch = false;
        // значення першого рядку через елемент, де н - номер стовпчика
        x = rows[i].getElementsByTagName("TD")[n];
        // значення другого (наступного) рядку 
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
            // проста зміна - з умовою асцендінг "більше" значення йде вгору
            if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
            shouldSwitch = true;
            break;
            }
        } else if (dir == "desc") {
            // тут навпаки - якщо значення другого рядку більше, то йде вниз
            if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
            shouldSwitch = true;
            break;
            }
        }
        }
        if (shouldSwitch) {
        // робимо світч і даємо перед нодою
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        // поки світчінг тру, то вайл виконується
        switching = true;
        switchcount ++;
        } else {
            // якщо не було світчу, а напрямок асцендінг, то змінюємо напрямок на десендінг і знову крутимо цикл
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
        }
    }
}

// клік івент без зміни ХТМЛ
const headerArr = document.querySelectorAll('th');
// повертає масив - на клік на конкретний індекс відбувається сортування того індексу (th)
headerArr.forEach((elem, index) => {
    elem.addEventListener('click', function () {
        sortTable(index);
    })
});

// Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.


const resizeTable = document.querySelector('.resize_div');
const resizer = document.querySelector('.resizer');

// функція, де ширина і висота діву змінюється відносно позиції мишки у віндов мінус позиції елемент у вьюпорті
function resize(event) {
    resizeTable.style.width = event.clientX - resizeTable.getBoundingClientRect().left + 'px'
    resizeTable.style.height = event.clientY - resizeTable.getBoundingClientRect().top + 'px'
}

// додаємо виконання функції на клік вниз (натискання) на дів ресайзер - поки мишка рухається - функція виконується
resizer.addEventListener('mousedown', ()=> {
    document.addEventListener('mousemove', resize);
});
// виключаємо виконання функції рісайз на клік вверх (відпустили кнопку)
document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', resize)
});
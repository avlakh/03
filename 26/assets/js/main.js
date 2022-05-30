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

// ще працюю над цим
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

// беремо 
const nameSort = document.getElementById('name_sort');
const ageSort = document.getElementById('age_sort');
const roleSort = document.getElementById('role_sort');
const instrSort = document.getElementById('instr_sort');

// сортуємо числа
function intSort () {
    BEATLES.sort((a, b) => a.age - b.age)
}

// сортуємо рядки
function strSort (str) {
    let rez = ''
    switch (str) {
        case nameSort: 
            rez = BEATLES.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase));
        case roleSort: 
            rez = BEATLES.sort((a, b) => a.role.toLowerCase().localeCompare(b.role.toLowerCase));
        case instrSort:
            rez = BEATLES.sort((a, b) => a.instrument.toLowerCase().localeCompare(b.instrument.toLowerCase));
    }
    return rez
}

// сортуємо таблицю
function sortTable () {
    debugger
    let rez = '';
    if (nameSort.click) {
        rez = strSort(nameSort)
    } else if (roleSort.click) {
        rez = strSort(roleSort)
    } else if (instrSort.onclick) {
        rez = strSort(instrSort)
    }
    return rez
}

// будуємо результат
function buildTable () {
    debugger
    let sortedBeatles = sortTable();
    let html = '';
    sortedBeatles.forEach(elem => {
        html += `
            <tr>
                <td>${elem.name}</td>
                <td>${elem.age}</td>
                <td>${elem.role}<td>
                <td>${elem.instrument}<td>
            </tr>
        `;
    })
    document.querySelector('.beatles_array').innerHTML = html;
}

const sort = document.querySelector('.sort_table');
sort.addEventListener('click', event => {
    if (nameSort.click) {
        buildTable
    }
})

buildTable();

/* 

масив даних

вивід таблиці

сортування масиву по 
-імені
-віку

виведення результату

*/

// Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.


const resizeTable = document.querySelector('.resize_div');
const resizer = document.querySelector('.resizer');

function resize(event) {
    resizeTable.style.width = event.clientX - resizeTable.getBoundingClientRect().left + 'px'
    resizeTable.style.height = event.clientY - resizeTable.getBoundingClientRect().top + 'px'
}

resizer.addEventListener('mousedown', ()=> {
    document.addEventListener('mousemove', resize);
    
});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', resize)
});
// Реалізуй клас, що описує коло.
// радіус і діаметр

document.getElementById('radiusButton').addEventListener('click', function (){
    const radiusInput = document.getElementById('radiusInput').value;
    const myCircle = new Circle (radiusInput);
    document.getElementById('radiusResult').innerHTML = `
        <p class="mt-3">Твій радіус: ${myCircle.radius}</p>
        <p class="mt-3">Твій діаметр: ${myCircle.getDiameter}</p>
    `
})

// довжина кола

document.getElementById('areaButton').addEventListener('click', function (){
    const radiusInput = document.getElementById('radiusInput').value;
    const myCircle = new Circle (radiusInput);
    document.getElementById('areaResult').innerHTML = `
        <p class="mt-3">Площа твого кола: ${myCircle.circleArea()}</p>
    `
})

// площа кола

document.getElementById('lengthButton').addEventListener('click', function (){
    const radiusInput = document.getElementById('radiusInput').value;
    const myCircle = new Circle (radiusInput);
    document.getElementById('lengthResult').innerHTML = `
        <p class="mt-3">Довжина твого кола: ${myCircle.circleLength()}</p>
    `
})

// Реалізуй клас, що описує канцелярський маркер.



// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

const list = [
    new Employee ({
        name: 'Ringo',
        position: 'Drummer',
        age: 28,
        salary: 1600
    }),
    new Employee ({
        name: 'Paul',
        position: 'Bass guitar',
        age: 25,
        salary: 1700
    }),
    new Employee ({
        name: 'John',
        position: 'Vocalist',
        age: 27,
        salary: 1800
    }),
    new Employee ({
        name: 'George',
        position: 'Guitarist',
        age: 26,
        salary: 1500
    })
]

const myTable = new EmpTable (list);
myTable.viewHtml('employeeTable');
class Employee {
    constructor (empl) {
        this.name = empl.name;
        this.position = empl.position;
        this.age = empl.age;
        this.salary = empl.salary;
    }
}

class EmpTable {
    constructor (empList) {
        this.empList = empList; 
    }
    getHtml (){
        let html = '';
        this.empList.forEach(element => {
            html += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.position}</td>
                    <td>${element.age}</td>
                    <td>${element.salary}</td>
                </tr>
            `;
        });
        return html;
    }
    viewHtml (elementId){
        document.getElementById(elementId).innerHTML = this.getHtml();
    }
}
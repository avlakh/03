"use strict";document.getElementById("radiusButton").addEventListener("click",function(){var e=document.getElementById("radiusInput").value,t=new Circle(e);document.getElementById("radiusResult").innerHTML='\n        <p class="mt-3">Твій радіус: '.concat(t.radius,'</p>\n        <p class="mt-3">Твій діаметр: ').concat(t.getDiameter,"</p>\n    ")}),document.getElementById("areaButton").addEventListener("click",function(){var e=document.getElementById("radiusInput").value,t=new Circle(e);document.getElementById("areaResult").innerHTML='\n        <p class="mt-3">Площа твого кола: '.concat(t.circleArea(),"</p>\n    ")}),document.getElementById("lengthButton").addEventListener("click",function(){var e=document.getElementById("radiusInput").value,t=new Circle(e);document.getElementById("lengthResult").innerHTML='\n        <p class="mt-3">Довжина твого кола: '.concat(t.circleLength(),"</p>\n    ")}),document.getElementById("markerTextConfirm").addEventListener("click",function(){var e=document.getElementById("markerColorInput").value,t=document.getElementById("markerInkQty").value,n=new Marker(e,t),a=document.getElementById("markerTextInput").value;n.showText(a)}),document.getElementById("inkRefill").addEventListener("click",function(){(new fullMarker).refill(),document.getElementById("markerInkQty").value=100});var list=[new Employee({name:"Ringo",position:"Drummer",age:28,salary:1600}),new Employee({name:"Paul",position:"Bass guitar",age:25,salary:1700}),new Employee({name:"John",position:"Vocalist",age:27,salary:1800}),new Employee({name:"George",position:"Guitarist",age:26,salary:1500})],myTable=new EmpTable(list);myTable.viewHtml("employeeTable");
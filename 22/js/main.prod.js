"use strict";function showResult(e,n){document.getElementById(n).innerHTML=e}function argCounter(){console.log(arguments.length)}function checkTwoNumbers(e,n){return e<n?-1:n<e?1:e===n?0:void 0}function twoNumbers(e,n){var t=checkTwoNumbers(parseInt(+document.getElementById("twoNumbers_number_1").value),parseInt(+document.getElementById("twoNumbers_number_2").value));document.getElementById("twoNumbers_rez").innerText=t}function calcFactorial(e){var n=1,t=e;if(0===e)n=1;else if(e<0)n="Error";else if(0<e)for(;0<t;)n*=t,t--;return n}function factorial(e){e=parseInt(+document.getElementById("factorial_number").value),rez=calcFactorial(e),document.getElementById("factorial_rez").innerText=rez}function joinNumber(e,n,t){var r=100*parseInt(document.getElementById("joinNumber_number1").value)+10*parseInt(document.getElementById("joinNumber_number2").value)+parseInt(document.getElementById("joinNumber_number3").value);document.getElementById("joinNumber_rez").innerText=r}function checkCalc(e,n){return 0!==e&&0!==n?e*n:0!==e?e*e:0!==n&&n*n}function calc(e,n){var t=checkCalc(parseInt(+document.getElementById("calc_number1").value),parseInt(+document.getElementById("calc_number2").value));document.getElementById("calc_rez").innerText=t}function getAndCheck(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=document.getElementById(e).value;return""!=n&&(n=parseInt(n),!isNaN(n)&&n)}function isNumberPerfect(e){for(var n=0,t=1;t<e;t++)e%t==0&&(n+=t);return n===e}function perfectNumHTML(){var e=0;if(!1===getAndCheck("perfectNum_number"))return!1;showResult(isNumberPerfect(e=getAndCheck("perfectNum_number"))?"Число ".concat(e," є досконалим"):"Число ".concat(e," не є досконалим"),"perfectNum_rez")}function checkNumberRange(e,n){for(var t="",r=0,r=e;r<=n;r++)isNumberPerfect(r)&&(t+=r+", ");return t}function perfectNumRange(e,n){e=parseInt(document.getElementById("perfectNumRange_number1").value),n=parseInt(document.getElementById("perfectNumRange_number2").value),result=checkNumberRange(e,n),showResult(result,"perfectNumRange_rez")}
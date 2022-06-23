class Marker {
    constructor (color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
    }
    showText (text) {
        let ink = this.inkAmount;
        if (text.length <= ink) {

        }
    }
}


//     showText(text) {
//         let count = this.qty * 2;
//         if (text.length <= count) {
//             document.querySelector("#res-2").innerHTML = `
//                 <div style="color:${this.color}">${text}</div>
//             `;
//         } else {
//             let textArr = [...text];
//             let end = textArr.splice(count);
//             document.querySelector("#res-2").innerHTML = `
//                 <div>
//                     <span style="color:${this.color}"><b>${textArr.join("")}</b></span><span style="color: lightGrey">${end.join("")}</span>
//                 </div>
//             `;
//             alert(`Закінчилося "${this.color}" чорнило. Заправ катрідж!`)
//         }
//     }

// class newMarker extends Marker {
//     constructor(color, qty) {
//         super(color, qty)
//     }
//     full() {
//         this.qty = 100;
//         alert(`Катрідж заправдено на ${this.qty}%`);
//     }
// }
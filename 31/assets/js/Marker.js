class Marker {
    constructor (color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
    }
    showText (text) {
        let textQty = this.inkAmount * 2;
        if (text.length <= textQty) {
            document.getElementById("markerOutput").innerHTML = `
                <p class="mt-2" id="markerResult" style="color:${this.color}">${text}</div>
            `;
        } else {
            let textArray = [...text];
            let notEnoughInk = textArray.splice(textQty);
            document.getElementById("markerOutput").innerHTML = `
                <span style="color:${this.color}">${textArray.join("")}</span><span style="color: black">${notEnoughInk.join("")}</span>
            `;
        }
    }
}

class fullMarker extends Marker {
    constructor(color, inkAmount) {
        super(color, inkAmount)
    }
    refill() {
        this.inkAmount = 100;
        alert(`Чорнило було поповнено на ${this.inkAmount}%`);
    }
}
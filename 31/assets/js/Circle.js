class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get getRadius () {
        return this._radius
    }
    /**
     * @param {any} new_radius
     */
    set setRadius (new_radius) {
        this.radius = new_radius;
    }
    get getDiameter () {
        return this.circleLength() / Math.PI;
    }
    circleArea () {
        return Math.PI * (this.radius * this.radius);
    }
    circleLength () {
        return 2 * Math.PI * this.radius;
    }
    showCircle () {
        document.body.insertAdjacentHTML('beforeend', `
            <div class="circle" `)
    }
}

const myCircle = new Circle(10);
console.log(myCircle);


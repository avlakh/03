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
        return this.radius * 2;
    }
    circleArea () {
        return Math.PI * (this.radius * this.radius);
    }
    circleLength () {
        return Math.PI * this.getDiameter;
    }
}

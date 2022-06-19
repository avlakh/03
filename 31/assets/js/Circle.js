class Circle {
    constructor(width, height, color, left, top, borderRadius) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.left = left;
        this.top = top;
        this.borderRadius = borderRadius;
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
        document.getElementById('circle_to_go').insertAdjacentHTML('beforeend', `
            <div class="circle" style="width: ${this.width}px;height: ${this.height}px; background-color: ${this.color}; left: ${this.left}px; top: ${this.top}px; position: absolute; border-radius: ${this.borderRadius}%"</div>`)
    }
}

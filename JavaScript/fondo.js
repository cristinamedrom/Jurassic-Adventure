class Suelo {
    constructor(x, y, cesped, repeat) {
        this.x = x;
        this.y = y;
        this.cesped = cesped;
        this.repeat = repeat;
    }

    update() {

    }

    draw() {
        image(cesped, this.x, this.y);
    }

}
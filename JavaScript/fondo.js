let startSuelo = false;

class Suelo {
    constructor(x, y, cesped, speed) {
        this.x = x;
        this.y = y;
        this.cesped = cesped;
        this.speed = speed;
        this.repeat = false;
    }

    update() {

        if(startSuelo) {
            this.x -= this.speed;
        }

        if (this.x <= this.cesped.width) {
            this.x = 320;
        }

    }

    draw() {
        image(cesped, this.x, this.y);
    }

}
let startSuelo = false;

class Suelo {
    constructor(x, y, cesped, speed) {
        this.x = x;
        this.y = y;
        this.cesped = cesped;
        this.speed = speed;
        this.repeat = false;
        this.xOriginal = x;
    }

    update() {

        if(startSuelo) {
            this.x -= this.speed;
        }

        if (this.x <= -256) {
            this.x = this.xOriginal;
            this.repeat = true;
        }

    }

    draw() {
        image(cesped, this.x, this.y);

        if (this.repeat) {
            image(this.cesped, this.x + this.cesped.width, this.y);
            this.repeat = false;
        }
    }

}
class RocaPrim {
    constructor(x, y, rocaPrimen, speed, grav) {
        this.x = x;
        this.y = y;
        this.rocaPrimen = rocaPrimen;
        this.speed = speed;
        this.grav = grav;
        this.multpRoca = false;
    }

    nuevaRoca() {
        this.x = random(100, 84);
        this.y = 164;
        this.multRoca = false;
    }

    update() {

        this.x -= this.speed;

        if (this.x <= -this.rocaPrimen.width) {
            this.multpRoca = true;
        }

    }

    draw() {
        image(rocaPrimen, this.x, this.y);
    }

}
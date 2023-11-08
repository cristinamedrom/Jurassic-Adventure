class RocaPrim {
    constructor(x, y, rocaPrimen, speed, grav) {
        this.x = x;
        this.y = y;
        this.rocaPrimen = rocaPrimen;
        this.speed = speed;
        this.grav = grav;
    }

    update() {

        this.x -= this.speed;

    }

    draw() {
        image(rocaPrimen, this.x, this.y);
    }

}
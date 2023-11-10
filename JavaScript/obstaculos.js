let startRoca = false;

class RocaPrim {
    constructor(x, y, rocaPrimen, speed, grav) {
        this.x = x;
        this.y = y;
        this.rocaPrimen = rocaPrimen;
        this.speed = speed;
        this.grav = grav;
        this.multpRoca = false;
    }


    update() {

        if(startRoca) {
            this.x -= this.speed;
        }

        if (this.x <= -this.rocaPrimen.width) {
            this.multpRoca = true;
        }

    }

    draw() {
        image(rocaPrimen, this.x, this.y);
    }

    choqueColosal() {
// dimensiones de Dino
        let dinoIzq = dino.x;
        let dinoDcha = dino.x + dino.dinoMovil.width;
        let dinoAlto = dino.y;
        let dinoBajo = dino.y + dino.dinoMovil.height;

// dimensiones de RocaAlta
        let rocaIzq = this.x;
        let rocaDcha = this.x + this.rocaPrimen.width;
        let rocaAlto = this.y;
        let rocaBajo = this.y + this.rocaPrimen.height;

        if(dinoIzq < rocaDcha && dinoDcha > rocaIzq && dinoAlto < rocaBajo && dinoBajo > rocaAlto) {
            enterPressed = false;
            startRoca = false;
            startSuelo = false;
        }
    }

}
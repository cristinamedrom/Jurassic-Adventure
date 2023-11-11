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
        let dinoDcha = dino.x + dino.dinoMovil.width - 10;
        let dinoAlto = dino.y;
        let dinoBajo = dino.y + dino.dinoMovil.height -10;

// dimensiones de RocaAlta
        let rocaIzq = this.x;
        let rocaDcha = this.x + this.rocaPrimen.width - 10;
        let rocaAlto = this.y;
        let rocaBajo = this.y + this.rocaPrimen.height - 10;

        if(dinoIzq < rocaDcha && dinoDcha > rocaIzq && dinoAlto < rocaBajo && dinoBajo > rocaAlto) {
            enterPressed = false;
            startRoca = false;
            startSuelo = false;
        }
    }

    aumentarSpeed() {

        setInterval((this.speed *= 1.001), 3000)

    }

}

class RocaSegunda {
    constructor(x, y, rocaSegun, speed, grav) {
        this.x = x;
        this.y = y;
        this.rocaSegun = rocaSegun;
        this.speed = speed;
        this.grav = grav;
        this.multpRoca2 = false;
    }

    update() {

        if(startRoca) {
            this.x -= this.speed;
        }

        if (this.x <= -this.rocaSegun.width) {
            this.multpRoca2 = true;
        }

    }

    draw() {
        image(rocaSegun, this.x, this.y);
    }

    choqueColosal2() {
// dimensiones de Dino
        let dinoIzq = dino.x;
        let dinoDcha = dino.x + dino.dinoMovil.width - 10;
        let dinoAlto = dino.y;
        let dinoBajo = dino.y + dino.dinoMovil.height - 10;

// dimensiones de RocaBaja
        let rocaIzq2 = this.x;
        let rocaDcha2 = this.x + this.rocaSegun.width - 10;
        let rocaAlto2 = this.y;
        let rocaBajo2 = this.y + this.rocaSegun.height - 10;

        if(dinoIzq < rocaDcha2 && dinoDcha > rocaIzq2 && dinoAlto < rocaBajo2 && dinoBajo > rocaAlto2) {
            enterPressed = false;
            startRoca = false;
            startSuelo = false;
        }
    }

    aumentarSpeed() {

        setInterval((this.speed *= 1.001), 3000)

    }
}

class Pajarito {
    constructor(x, y, pajaroImg, speed, grav) {
        this.x = x;
        this.y = y;
        this.pajaroImg = pajaroImg;
        this.speed = speed;
        this.grav = grav;
        this.multpPajarito = false;
    }

    update() {

        if(startRoca) {
            this.x -= this.speed;
        }

        if (this.x <= -this.pajaroImg.width) {
            this.multpPajarito = true;
        }

    }

    draw() {
        image(pajaroImg, this.x, this.y);
    }

    choqueColosal3() {
// dimensiones de Dino
        let dinoIzq = dino.x;
        let dinoDcha = dino.x + dino.dinoMovil.width - 10;
        let dinoAlto = dino.y;
        let dinoBajo = dino.y + dino.dinoMovil.height - 10;

// dimensiones de Pajarito
        let pajaritoIzq = this.x;
        let pajaritoDcha = this.x + this.pajaroImg.width - 10;
        let pajaritoAlto = this.y;
        let pajaritoBajo = this.y + this.pajaroImg.height - 10;

        if(dinoIzq < pajaritoDcha && dinoDcha > pajaritoIzq && dinoAlto < pajaritoBajo && dinoBajo > pajaritoAlto) {
            enterPressed = false;
            startRoca = false;
            startSuelo = false;
        }
    }

    aumentarSpeed() {

        setInterval((this.speed *= 1.001), 3000)

    }
}
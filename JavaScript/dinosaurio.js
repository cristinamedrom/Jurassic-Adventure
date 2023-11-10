let SPACE = 32;
let ENTER = 13;
let enterPressed = false;

class Player {
    constructor(x, y, dinoQuieto, dinoMovil, speed, grav) {
        this.x = x;
        this.y = y;
        this.dinoQuieto = dinoQuieto;
        this.dinoMovil = dinoMovil;
        this.speed = speed;
        this.grav = grav;
        this.jumpHeight = -15;
    }

    jump() {
        if (this.y === 150) {
            this.speed = this.jumpHeight;
            jumping = true;
        }

        if (this.y >= 150) {
            this.y = 150;
            jumping = false;
        }
    }

    update(){

        this.y += this.speed;
        this.speed += this.grav;

        if (this.y >= 150) {
            this.y = 150;
            jumping = false;
        }
    }
    
    draw() {

        image(enterPressed ? this.dinoMovil : this.dinoQuieto, this.x, this.y);

    }

}

function keyPressed() {
    if (keyCode === ENTER) {
        enterPressed = true;
        startRoca = true;
        startSuelo = true;
    }

    if (keyCode === SPACE) {
        dino.jump();
    }
}

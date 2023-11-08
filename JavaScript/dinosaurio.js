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
        this.velocity = 50;
        this.jumpHeight = -30;
    }

    jump() {
        if (this.y === 150) {
            this.velocity = this.jumpHeight;
            jumping = true;
        }

        if (this.y >= 150) {
            this.y = 150;
            jumping = false;
        }
    }

    update(){

        this.y += this.velocity;
        this.velocity += this.grav;

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
    }

    if (keyCode === SPACE) {
        dino.jump();
    }
}

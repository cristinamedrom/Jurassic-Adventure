let SPACE = 32;

class Player {
    constructor(x, y, dinoQuieto,/* dinoMovil,*/speed, grav) {
        this.x = x;
        this.y = y;
        this.dinoQuieto = dinoQuieto;
        /*this.dinoMovil = dinoMovil;*/
        this.speed = speed;
        this.grav = grav;
        this.velocity = 0;
        this.jumpHeight = -30;
    }

    jump() {
        if (this.y === 150) {
            this.velocity = this.jumpHeight;
            jumping = true;
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

        image( this.dinoQuieto, this.x, this.y);

    }
}
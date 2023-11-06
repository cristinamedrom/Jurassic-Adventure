class Player {
    constructor(x, y, dinoQuieto,/* dinoMovil,*/speed, grav) {
        this.x = x;
        this.y = y;
        this.dinoQuieto = dinoQuieto;
        /*this.dinoMovil = dinoMovil;*/
        this.speed = speed;
        this.grav = grav;
    }

    update(){

    }
    
    draw() {
        image( this.dinoQuieto, this.x, this.y);
    }
}
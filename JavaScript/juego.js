let fondo;
let dinoQuieto;
let dinoMovil;
let dino;
let cesped;
let suelo;
let jumping = false;

function preload(){

    fondo = loadImage('./img/fondo.png');
    cesped = loadImage('./img/cesped.png')
    dinoQuieto = loadImage('./img/estatico.gif');
    //dinoMovil = loadImage('./img/caminar.gif');

}

function setup() {
    
    dino = new Player(168, 150, dinoQuieto, dinoMovil, 5, -10);
    suelo = new Suelo(0, 184, cesped, 1);
    createCanvas(384, 216);

}

function draw() {

    background(fondo);
    suelo.draw();
    dino.update();
    dino.draw();

}

function keyPressed() {

    if (keyCode === SPACE && !jumping) {

        dino.jump();

    }
}
let fondo;
let dinoQuieto;
let dinoMovil;
let dino;
let cesped;
let suelo;

function preload(){

    fondo = loadImage('./img/fondo.png');
    cesped = loadImage('./img/cesped.png')
    dinoQuieto = loadImage('./img/estatico.gif');
    /*dinoMovil = loadImage('./img/caminar.gif')*/

}

function setup() {

    suelo = new Suelo(32, 200, cesped, 1);
    dino = new Player(168, 168, dinoQuieto, dinoMovil, 5, 1);
    createCanvas(384, 216);

}

function draw() {

    background(fondo);
    dino.update();
    dino.draw();
    cesped.update();
    cesped.draw();

}
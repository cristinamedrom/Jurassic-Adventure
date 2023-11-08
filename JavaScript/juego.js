let fondo;
let dinoQuieto;
let dinoMovil;
let dino;
let cesped;
let suelo;
let jumping = false;
let rocaPrimen;

function preload(){

    fondo = loadImage('./img/fondo.png');
    cesped = loadImage('./img/cesped.png')
    dinoQuieto = loadImage('./img/estatico.gif');
    //dinoMovil = loadImage('./img/caminar.gif');
    rocaPrimen = loadImage('./img/roca-primera.png')

}

function setup() {
    
    dino = new Player(168, 150, dinoQuieto, dinoMovil, 5, -50);
    rocaAlta = new RocaPrim(384, 164, rocaPrimen, 0.7, 0)
    suelo = new Suelo(0, 184, cesped, 50);
    
    createCanvas(384, 216);

}

function draw() {

    background(fondo);
    suelo.draw();
    dino.update();
    dino.draw();
    rocaAlta.draw();
    rocaAlta.update();

}

function keyPressed() {

    if (keyCode === SPACE && !jumping) {

        dino.jump();

    }
}
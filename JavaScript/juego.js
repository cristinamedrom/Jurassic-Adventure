let fondo;
let dinoQuieto;
let dinoMovil;
let dino;
let cesped;
let suelo;
let jumping = false;
let rocaPrimen;
let rocaSegun;
let pajaroImg;

function preload(){

    fondo = loadImage('./img/fondo.png');
    cesped = loadImage('./img/cesped.png')
    dinoQuieto = loadImage('./img/estatico.gif');
    dinoMovil = loadImage('./img/caminar.gif');
    rocaPrimen = loadImage('./img/roca-primera.png');
    rocaSegun = loadImage('./img/roca-seg.png')
    pajaroImg = loadImage('./img/pajaro.gif')

}

function setup() {
    
    dino = new Player(168, 150, dinoQuieto, dinoMovil, 0.01, 0.1);
    rocaAlta = new RocaPrim(384, 164, rocaPrimen, 0.7, 0);
    rocaBaja = new RocaSegunda(512, 177, rocaSegun, 0.7, 0);
    pajaritoFly = new Pajarito(525, 50, pajaroImg, 0.7, 0)
    suelo = new Suelo(0, 184, cesped, 0.7);
    
    createCanvas(384, 216);

}

function draw() {

    background(fondo);
    suelo.draw();
    suelo.update();
    dino.update();
    dino.draw();
    rocaAlta.draw();
    rocaAlta.update();
    if (rocaAlta.multpRoca) {
        rocaAlta = new RocaPrim(384, 164, rocaPrimen, 0.7, 0);
        rocaAlta.multpRoca = false;
    }
    rocaAlta.choqueColosal(dino);
    rocaBaja.draw();
    rocaBaja.update();
    if (rocaBaja.multpRoca2) {
        rocaBaja = new RocaSegunda(512, 177, rocaSegun, 0.7, 0);
        rocaBaja.multpRoca2 = false;
    }
    rocaBaja.choqueColosal2(dino);
    pajaritoFly.draw();
    pajaritoFly.update();
    if (pajaritoFly.multpPajarito) {
        pajaritoFly = new Pajarito(525, 50, pajaroImg, 0.7, 0);
        pajaritoFly.multpPajarito = false;
    }

}




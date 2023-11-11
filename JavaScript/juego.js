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
let tiempo = 0;
let temporizadorInterval;

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
    
    dino = new Player(168, 150, dinoQuieto, dinoMovil, -11, 1);
    rocaAlta = new RocaPrim(384, 164, rocaPrimen, 3.5, 0);
    rocaBaja = new RocaSegunda(535, 177, rocaSegun, 3.5, 0);
    pajaritoFly = new Pajarito(400, 50, pajaroImg, 8, 0)
    suelo = new Suelo(0, 184, cesped, 3);
    
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
        rocaAlta = new RocaPrim(384, 164, rocaPrimen, 3.5, 0);
        rocaAlta.multpRoca = false;
    }
    rocaAlta.choqueColosal(dino);
    rocaAlta.aumentarSpeed();
    rocaBaja.draw();
    rocaBaja.update();
    if (rocaBaja.multpRoca2) {
        rocaBaja = new RocaSegunda(535, 177, rocaSegun, 3.5, 0);
        rocaBaja.multpRoca2 = false;
    }
    rocaBaja.choqueColosal2(dino);
    rocaBaja.aumentarSpeed();
    pajaritoFly.draw();
    pajaritoFly.update();
    if (pajaritoFly.multpPajarito) {
        pajaritoFly = new Pajarito(400, 50, pajaroImg, 8, 0);
        pajaritoFly.multpPajarito = false;
    }
    pajaritoFly.choqueColosal3(dino);
    pajaritoFly.aumentarSpeed();

}

document.addEventListener('DOMContentLoaded', function () {
    function actualizarTemporizador() {
        document.getElementById('tiempo').innerText = tiempo;
    }

    function iniciarTemporizador() {
        temporizadorInterval = setInterval(function () {
            tiempo++;
            actualizarTemporizador();
        }, 1000);
    }

    function detenerTemporizador() {
        clearInterval(temporizadorInterval);
    }

    setInterval(function () {
        if (startRoca) {
            iniciarTemporizador();
        } else {
            detenerTemporizador();
        }
    }, 1000);
});


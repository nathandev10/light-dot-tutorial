var posX;
var posY;

var size;

var R;
var G;
var B;
var A;

var img;

function preload(){
    img = loadImage("maxresdefault.jpg");
}


function setup() {
    createCanvas(1280, 720);
    
    R = createSlider(0, 255, 0, 0.3);
    G = createSlider(0, 255, 0, 0.3);
    B = createSlider(0, 255, 0, 0.3);
    
    image(img, 0, 0);
}

function draw() {
    noStroke();
    
    posX = random(0 - 60, width + 60);
    posY = random(0 - 60, height + 60);
    
    size = random(40, 70);
    
    A = random(80, 252);
    
    
    fill(R.value(), G.value(), B.value(), A);
   
    ellipse(posX, posY, size, size);
    
    if(mouseIsPressed){
        if(mouseButton == RIGHT){
            clear();
            image(img, 0, 0);
        }
    }
}

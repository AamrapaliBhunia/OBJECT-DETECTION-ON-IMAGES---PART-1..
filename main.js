img = "";

function preload(){
    img=loadImage('Goats_Cows_Humans.jpg');

}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF674D");
    text("Goats", 45, 75);
    noFill();
    stroke("#FF674D");
    rect(30, 80, 250, 200);

    fill("#FF674D");
    text("Humans", 420, 85);
    noFill();
    stroke("#FF674D");
    rect(425, 90, 120, 200);

    fill("#FF674D");
    text("Cows", 300, 210);
    noFill();
    stroke("#FF674D");
    rect(277, 214, 157, 65);
}
let slider;
let angle = 0;
let level;
function setup () {
    createCanvas(800, 800);
    slider =  createSlider(0, 360, 45, 0.01);
    textAlign(CENTER, CENTER);
    textSize(75);
    draw();
    }
function draw () {
    background(51);
    angle = slider.value();
    text(angle, 650, 40);
    translate(400,height); // shift origin to (400, height)
    stroke(255);
    level = 0;
    branch(250);
}

function branch (len) {
    line(0,0,0,-len);
    translate(0, -len);
    if(len > 50) {
        push()
        rotate(angle);
        branch(len*0.67);
        pop();
        push()
        rotate(-angle);
        branch(len*0.67);
        pop();
    }
}


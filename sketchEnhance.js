let slider;
let angle = 0;
let level = 0;
function setup () {
    createCanvas(1140, 800);
    slider =  createSlider(0, 360, 45, 0.1);
    textAlign(CENTER, CENTER);
    textSize(75);
    draw();
}
function draw () {
    background(51);
    angle = slider.value();
    text(angle, 650, 40);
    translate(570,height); // shift origin to (400, height)
    stroke(255);
    level = 0;
    branch(250);
}

function branch (len) {
    level++;
    line(0,0,0,-len);
    translate(0, -len);
    if (level % 2 === 0) {
        if(len > 5) {
            push();
            rotate(angle);
            branch(len*0.67);
            pop();
            push()
            rotate(-angle);
            branch(len*0.67);
            pop();
            push();
            rotate(0);
            branch(len*0.67);
            pop();
        }
        else {
            level = 0;
        }
    }
    else {
        if(len > 5) {
            push();
            rotate(angle);
            branch(len*0.67);
            pop();
            push()
            rotate(-angle);
            branch(len*0.67);
            pop();
        }
        else {
            level = 0;
        }
    }
}


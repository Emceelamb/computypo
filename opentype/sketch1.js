
let font;
let fontData;

function drawPathOutline(cmds) {
    // current pen position
    let cx = 0;
    let cy = 0;
    // start position of current contour
    let startX = 0;
    let startY = 0;
    for (let cmd of cmds) {
        switch (cmd.type) {
            case 'M':
                startX = cmd.x;
                startY = cmd.y;
                cx = cmd.x;
                cy = cmd.y;
                break;
            case 'L':
                line(cx, cy, cmd.x, cmd.y);
                cx = cmd.x;
                cy = cmd.y;
                break;
            case 'C':
                bezier(cx, cy, cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
                cx = cmd.x;
                cy = cmd.y;
                break;
            case 'Q':
                beginShape();
                vertex(cx, cy);
                quadraticVertex(cmd.x1, cmd.y1, cmd.x, cmd.y);
                endShape();
                cx = cmd.x;
                cy = cmd.y;
                break;
            case 'Z':
                // to complete path
                line(cx, cy, startX, startY);
                break;
        }
    }
}

function preload() {
    fontData = loadBytes('Roboto-Black.ttf');
}

let path3,path4;

function setup() {
    createCanvas(400, 400);
    font = opentype.parse(fontData.bytes.buffer);
    path3= font.getPath("UP", 0, 0, 72);
    path4 = font.getPath("DOWN", 0, 0, 72);
    // frameRate(240);
}

function draw() {
    background(255);
    // text(fameRate(),0,0);

    push();
    translate(50, 125);
    path3.draw(drawingContext); // opentype.js
    pop();

    push();
    noFill();
    stroke(0);
    strokeWeight(2);
    translate(50, 225);
    drawPathOutline(path3.commands); // p5js
    pop();


    push();
    translate(50, 300);
    path4.draw(drawingContext); // opentype.js
    pop();

    push();
    noFill();
    stroke(0);
    strokeWeight(2);
    translate(50, 400);
    drawPathOutline(path4.commands); // p5js

    setTimeout(aniType, 1000);
    // pop();
    // if(frameCount%20===0){

    //   if(path4.commands.length>path3.commands.length){
    //     //=path4.commands.splice(path3.commands.length);
    //    =path4.commands.pop();

    //   }
    // }
    // for(let i =0; i<path3.commands.length; i++){
    //   if(path4.commands[i].type==="Q"){
    //    =path4.commands[i].type=path3.commands[i].type; 
    //     delete=path4.commands[i].x1; 
    //     delete=path4.commands[i].y1; 
    //    =path4.commands[i].type=path3.commands[i].type;
    //     if(path4.commands[i].x<=path3.commands[i].x){
    //      =path4.commands[i].x+=0.1
    //     }
    //     if(path4.commands[i].x>=path3.commands[i].x){
    //      =path4.commands[i].x-=0.1
    //     }
    //     if(path4.commands[i].y<=path3.commands[i].y){
    //      =path4.commands[i].y+=0.1
    //     }
    //     if(path4.commands[i].y>=path3.commands[i].y){
    //      =path4.commands[i].y-=0.1
    //     }
    //   }
    //   if(path3.commands[i].type==="Z"){
    //    =path4.commands[i].type=path3.commands[i].type;
    //     delete=path4.commands[i].x; 
    //     delete=path4.commands[i].y
    //   } else if (path3.commands[i].type==="Q"){
    //    =path4.commands[i].type=path3.commands[i].type; 
    //    =path4.commands[i].type=path3.commands[i].type;
    //     if(path4.commands[i].x<=path3.commands[i].x){
    //      =path4.commands[i].x+=0.1
    //     }
    //     if(path4.commands[i].x>=path3.commands[i].x){
    //      =path4.commands[i].x-=0.1
    //     }
    //     if(path4.commands[i].y<=path3.commands[i].y){
    //      =path4.commands[i].y+=0.1
    //     }
    //     if(path4.commands[i].y>=path3.commands[i].y){
    //      =path4.commands[i].y-=0.1
    //     }
    //    =path4.commands[i].x1=path3.commands[i].x1;
    //    =path4.commands[i].y1=path3.commands[i].y1
    //   } 
    //     else{
    //    =path4.commands[i].type=path3.commands[i].type;
    //     if(path4.commands[i].x<=path3.commands[i].x){
    //      =path4.commands[i].x+=0.1
    //     }
    //     if(path4.commands[i].x>=path3.commands[i].x){
    //      =path4.commands[i].x-=0.1
    //     }
    //     if(path4.commands[i].y<=path3.commands[i].y){
    //      =path4.commands[i].y+=0.1
    //     }
    //     if(path4.commands[i].y>=path3.commands[i].y){
    //      =path4.commands[i].y-=0.1
    //     }
    //   }
    // }
}

function aniTypeD() {

    if (frameCount % 20 === 0) {

        if (path3.commands.length < path4.commands.length) {
            console.log(path3.commands.length, path4.commands.length)
            // path3.commands.splice(path3.commands.length);
            let i = path3.commands.length
                console.log('thisis', i)
                path3.commands.push(path4.commands[i]);
            i++;

        }
    }
    for (let i = 0; i < path3.commands.length; i++) {
        if (path3.commands[i].type === "Q") {
            path3.commands[i].type=path4.commands[i].type;
            delete path3.commands[i].x1;
            delete path3.commands[i].y1;
            path3.commands[i].type=path4.commands[i].type;
            if (path3.commands[i].x <path4.commands[i].x) {
                path3.commands[i].x += 0.1
            }
            if (path3.commands[i].x >path4.commands[i].x) {
                path3.commands[i].x -= 0.1
            }
            if (path3.commands[i].y <path4.commands[i].y) {
                path3.commands[i].y += 0.1
            }
            if (path3.commands[i].y >path4.commands[i].y) {
                path3.commands[i].y -= 0.1
            }
        }
        if (path3.commands[i].type === "Z") {
            path3.commands[i].type=path4.commands[i].type;
            delete path3.commands[i].x;
            delete path3.commands[i].y
        } else if (path3.commands[i].type === "Q") {
            path3.commands[i].type=path4.commands[i].type;
            path3.commands[i].type=path4.commands[i].type;
            if (path3.commands[i].x <path4.commands[i].x) {
                path3.commands[i].x += 0.1
            }
            if (path3.commands[i].x >path4.commands[i].x) {
                path3.commands[i].x -= 0.1
            }
            if (path3.commands[i].y <path4.commands[i].y) {
                path3.commands[i].y += 0.1
            }
            if (path3.commands[i].y >path4.commands[i].y) {
                path3.commands[i].y -= 0.1
            }
            path3.commands[i].x1=path4.commands[i].x1;
            path3.commands[i].y1=path4.commands[i].y1
        }
        else {
            path3.commands[i].type=path4.commands[i].type;
            if (path3.commands[i].x <path4.commands[i].x) {
                path3.commands[i].x += 0.1
            }
            if (path3.commands[i].x >path4.commands[i].x) {
                path3.commands[i].x -= 0.1
            }
            if (path3.commands[i].y <path4.commands[i].y) {
                path3.commands[i].y += 0.1
            }
            if (path3.commands[i].y >path4.commands[i].y) {
                path3.commands[i].y -= 0.1
            }
        }
    }
}



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

let path, path2;

function setup() {
	createCanvas(400, 400);
  font = opentype.parse(fontData.bytes.buffer);
  path = font.getPath("UP", 0, 0, 72);
  path2 = font.getPath("DOWN", 0, 0, 72);
}

function draw() {
  
  background(255);
  
  push();
  translate(50, 125);
  path.draw(drawingContext); // opentype.js
  pop();
  
  push();
	noFill();
  stroke(0);
  strokeWeight(2);
  translate(50, 225);
  drawPathOutline(path.commands); // p5js
  pop();
  
 
  push();
  translate(50, 300);
  path2.draw(drawingContext); // opentype.js
  pop();
  
  push();
	noFill();
  stroke(0);
  strokeWeight(2);
  translate(50, 400);
  drawPathOutline(path2.commands); // p5js
  pop();
  

}

function keyPressed(){
  if(path2.commands.length>path.commands.length){
    path2.commands.splice(path.commands.length);
  }
  for(let i =0; i<path.commands.length; i++){
    if(path2.commands[i].type==="Q"){
      path2.commands[i].type=path.commands[i].type; 
      delete path2.commands[i].x1; 
      delete path2.commands[i].y1; 
      path2.commands[i].x=path.commands[i].x;
      path2.commands[i].y=path.commands[i].y
    }
    if(path.commands[i].type==="Z"){
      path2.commands[i].type=path.commands[i].type;
      delete path2.commands[i].x; 
      delete path2.commands[i].y
    } else if (path.commands[i].type==="Q"){
      path2.commands[i].type=path.commands[i].type; 
      path2.commands[i].x = path.commands[i].x; 
      path2.commands[i].y = path.commands[i].y; 
      path2.commands[i].x1=path.commands[i].x1;
      path2.commands[i].y1=path.commands[i].y1
    } 
      else{
      path2.commands[i].type=path.commands[i].type;
      path2.commands[i].x=path.commands[i].x
      path2.commands[i].y=path.commands[i].y
    }
  }
  drawPathOutline(path2.commands); // p5js

}
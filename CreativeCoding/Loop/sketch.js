function setup() { //runs one time
  createCanvas (720,720);//canvas is 720 pixels x 720 pixels
  background (255,255,0); // background is rbg pink
}

function draw() {//runs in a loop
fill (0,255,255);// fills pink
strokeWeight (8);// stroke weight

for (var y = 0; y < 720; y + 360){ // loop creates a row in the y direction
for (var x = 0; x < 720; x + 360){ // loop creates a row in the x direction
  quad (x,y,
      x + 360, y,
      x + 360, y + 360,
      x, y + 360);
}
}
}

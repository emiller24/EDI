function setup() { //runs one time
  createCanvas (windowWidth,windowWidth);//canvas is 720 pixels x 720 pixels
  fill (0,255,255);// fills pink
  strokeWeight (8);// stroke weight
  background (0,0,255); // background is rbg pink
}

function draw() {//runs in a loop

var num = 2 ;
var sidelen = windowWidth/num ;


for (var y = 0; y < windowWidth; y + sidelen){ // loop creates a row in the y direction
for (var x = 0; x < windowWidth; x + sidelen){ // loop creates a row in the x direction
  quad (x,y,
      x+sidelen,y,
      x+sidelen,y+sidelen,
      x, y +sidelen);
}
}
}

function setup() { //runs one time
  createCanvas (720,720);//canvas is 720 pixels x 720 pixels
  background (255,0,255) // background is rbg pink
}

function draw() {//runs in a loop
fill (0,0,255);// fills pink
strokeWeight (8);// stroke weight 8 pixels
translate (60,60);// moves the origin
quad (0,0,
      300,0,
      300,300,
      0,300);


quad (300,0,
      600,0,
      600,300,
      300,300);// move quad 300 pixels in the y direction

quad (0,300,
      300,300,
      300,600,
      0,600);


quad (300,300,
      600,300,
      600,600,
      300,600);// move quad 300 pixels in the y direction


}

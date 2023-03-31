function setup() { //runs one time
  createCanvas (2 * windowWidth, 2 * windowHeight);//canvas is 720 pixels x 720 pixels
  stroke (212,142,142);
}

let gif;
function preload () {
  gif = loadImage ('../assets/MillerBackground.gif');
}
function setup () {
  createCanvas (windowWidth, windowWidth);
  //background ('lavender');
  }

function draw() {//runs in a loop
//strokeWeight (1);
var num = 4 ;
var sidelen = windowWidth/num ;


for (var y = 0; y < windowWidth; y = y + sidelen){ // loop creates a row in the y direction
for (var x = 0; x < windowWidth; x = x + sidelen){ // loop creates a row in the x direction

  image (gif,x,y,windowWidth/num,windowWidth/num,);
}
}
}

// let coolfont;
// let img;
// function preload() {
// 	coolfont = loadFont('Minecraft.otf');
// 	// img = loadImage('world.png');
// }

// Setup code goes here
function setup() {
  createCanvas(600, 400);
  // textFont(coolfont);
  textSize(40);
  textAlign(CENTER);
  // imageMode(CORNER);
  // image(img, 500, 350);
 }

// Draw code goes here
function draw() {
  background('#DED5B4');
  fill('#00B3D8');
  text("Hello, World!", width/2, height/2)
}
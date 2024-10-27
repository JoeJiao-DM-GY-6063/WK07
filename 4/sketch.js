// TODO: use pixel color to draw circles

function setup() {
  mImg = loadImage("../assets/arara.jpg");
  
  createCanvas(windowWidth, windowHeight);
  background(220);
  mImg.resize(width, 0);

  mImg.loadPixels();
  for (let idx = 0; idx < mImg.pixels.length; idx += 4) {
    let redVal = mImg.pixels[idx+0];
    let greenVal = mImg.pixels[idx+1];
    let blueVal = mImg.pixels[idx+2];
    let alphaVal = mImg.pixels[idx+3];

    noStroke();
    fill(redVal, greenVal, blueVal);
    
    let pixIdx = idx / 4;
    let y = int(pixIdx / mImg.width);
    let x = pixIdx % mImg.width;



    ellipse(x, y, 20);
}
image(mImg, 0, 0);
mImg.updatePixels();



}
function draw() {}

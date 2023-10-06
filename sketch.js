var landscape;


let pemain1, pemain2;

function setup() {
  createCanvas(500, 350);
  background(100);
  pemain1 = new Pemain(63, 175, "red");
  pemain2 = new Pemain(63, height - 90, "blue");
}

function draw() {
  background(landscape);

  pemain1.tampilkan();
  pemain2.tampilkan();
  pemain1.finish();
  pemain2.finish();
}
function preload() {
  landscape = loadImage("potobalap.jpeg");
}
function keyPressed() {
  if (key === "w") {
    pemain1.maju();
  } else if (keyCode === RIGHT_ARROW) {
    pemain2.maju();
  }
}

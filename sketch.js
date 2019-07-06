var boxes = [];
var x_max = 500;
var size = 5;
var buff_size;
var num = x_max*2/size;
var angle = 0;

function setup() {
  createCanvas(displayWidth,displayHeight, WEBGL);
  for (let n = 0; n < num; n++) {
    boxes.push(random(50,800));
  }
  buff_size = floor(0.8*size);
}

function swap(index1, index2) {
  let temp = boxes[index1];
  boxes[index1] = boxes[index2];
  boxes[index2] = temp;
}

let i = 0;
let j = 0;
function draw() {
  background(0);
  ambientLight(600, 600, 600);
  // if (frameCount % 10 == 0) {
    // console.log(frameCount);
    if (boxes[j] > boxes[j+1]) {
      swap(j,j+1);
    }
    j++;
    if (j > num - i - 1) {
      j = 0;
      i++;
    }
  // }\
  //normalMaterial();

  ortho(-1000, 1000, -1000,1000, 0, 2000);
  // rotateX(-QUARTER_PI);
  // rotateY(atan(1/sqrt(2)));
  let x = -x_max;
  for (let n = 0; n < num; n++) {
    push();
    translate(x,-boxes[n]/2,0);
    //ambientMaterial(250);
    if (n >= num - i) {
      fill(0,255,0);
    } else {
      fill(255);
    }
    box(buff_size, boxes[n], buff_size);
    pop();
    x += size;
  }
  angle += 0.01;
}

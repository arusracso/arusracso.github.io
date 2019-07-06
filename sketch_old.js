let angle = 0;
let w = 24;
let m_angle;
let max_dist;

let slider;
function setup() {
  createCanvas(500,500, WEBGL);
  m_angle = atan(1/sqrt(2));
  max_dist = dist(0,0,200,200);

  slider = createSlider(-0.5,0.5,0.2,.005);
  slider.position(400, 400);
  slider.style('width', '80px');
}

function draw() {

  // rotateX(angle*0.25);
  //translate(width/2, height/2);

  background(100);
  ortho(-400, 400, -400, 400, 0, 1000);
  rotateX(-QUARTER_PI);
  rotateY(m_angle);

  let offset = 0;
  for (let z = 0; z < height; z+= w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x,z,width/2,height/2);
      //let offset = slider.value();
      let offset = map(d, 0, max_dist, -PI/2, PI/2);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 100, 400);
      normalMaterial();
      translate(x - width/2, 0, z - height/2);
      box(w-2, h, w-2);
      //rect(x-width/2 + w/2, 0, w - 2, h);
      pop();
    }
  }
  angle -= slider.value();
}

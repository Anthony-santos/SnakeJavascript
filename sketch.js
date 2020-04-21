var s;
var scl = 10	;
var food;
function setup() {
  createCanvas(400, 400);
  s = new snake();
  frameRate(10);
  pickLocation();
}

function pickLocation(){
	var coluns = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(coluns)), floor(random(rows)));
	food.mult(scl);
}

function draw() {
  background(0);

  if(this.s.eat(food)){
  	pickLocation();
  }
  s.death();
  s.update();
  s.show();
  fill(225, 0, 100);
  rect(this.food.x, this.food.y, scl, scl);
}

function keyPressed(){
	if(keyCode === UP_ARROW && this.s.yspeed == 0){
		s.dir(0, -1);
	}else if (keyCode === DOWN_ARROW && this.s.yspeed == 0) {
		s.dir(0, 1);
	}else if (keyCode === RIGHT_ARROW && this.s.xspeed == 0) {
		s.dir(1, 0);
	}else if(keyCode === LEFT_ARROW && this.s.xspeed == 0){
		
		s.dir(-1, 0);
	}
}
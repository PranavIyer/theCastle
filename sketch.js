var f;
var e;

var a;
var c;

var b;
var d;

function setup() {
createCanvas(1400, 800);

  f = createSprite(700, 600, 700, 600);
  e = createSprite(700, 199, 400, 200);

  a = createSprite(299, 500, 100, 670);
  c = createSprite(1101, 500, 100, 670);

  b = createSprite(299, 124, 80, 80);
  d = createSprite(1101, 124, 80, 80);
}

function draw() {
  background(255, 255, 255);

  if (World.mouseX > 0 && World.mouseX < 175) {
    background("white");
    a.shapeColor = "black";
    b.shapeColor = "black";
    c.shapeColor = "black";
    d.shapeColor = "black";
    e.shapeColor = "black";
    f.shapeColor = "black";
  }

  if (World.mouseX > 175 && World.mouseX < 350) {
    background("black");
    a.shapeColor = "white";
    b.shapeColor = "white";
    c.shapeColor = "white";
    d.shapeColor = "white";
    e.shapeColor = "white";
    f.shapeColor = "white";
  }

  if (World.mouseX > 350 && World.mouseX < 525) {
    background("white");
    a.shapeColor = "black";
    b.shapeColor = "black";
    c.shapeColor = "black";
    d.shapeColor = "black";
    e.shapeColor = "black";
    f.shapeColor = "black";
  }

  if (World.mouseX > 525 && World.mouseX < 700) {
    background("black");
    a.shapeColor = "white";
    b.shapeColor = "white";
    c.shapeColor = "white";
    d.shapeColor = "white";
    e.shapeColor = "white";
    f.shapeColor = "white";
  }

  if (World.mouseX > 700 && World.mouseX < 875) {
    background("white");
    a.shapeColor = "black";
    b.shapeColor = "black";
    c.shapeColor = "black";
    d.shapeColor = "black";
    e.shapeColor = "black";
    f.shapeColor = "black";
  }

  if (World.mouseX > 875 && World.mouseX < 1050) {
    background("black");
    a.shapeColor = "white";
    b.shapeColor = "white";
    c.shapeColor = "white";
    d.shapeColor = "white";
    e.shapeColor = "white";
    f.shapeColor = "white";
  }

  if (World.mouseX > 1050 && World.mouseX < 1225) {
    background("white");
    a.shapeColor = "black";
    b.shapeColor = "black";
    c.shapeColor = "black";
    d.shapeColor = "black";
    e.shapeColor = "black";
    f.shapeColor = "black";
  }

  if (World.mouseX > 1225 && World.mouseX < 1400) {
    background("black");
    a.shapeColor = "white";
    b.shapeColor = "white";
    c.shapeColor = "white";
    d.shapeColor = "white";
    e.shapeColor = "white";
    f.shapeColor = "white";
  }

  drawSprites();
}
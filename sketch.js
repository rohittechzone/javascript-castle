const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tri1;
var ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Rectangle(400,390,800,20);
  tri1 = new Triangle(200,90,175,125,225,125);
  tri2 = new Triangle(255,40,230,75,280,75);
  rect1 = new Rectangle(200,255,50,250);
  rect2 = new Rectangle(255,230,50,300);
  rect3 = new Rectangle(385,280,200,200);
  tri3 = new Triangle(515,40,490,75,540,75);
  tri4 = new Triangle(570,90,545,125,595,125);
  rect4 = new Rectangle(515,230,50,300);
  rect5 = new Rectangle(570,255,50,250);
  tri5 = new Triangle(385,80,285,175,485,175);
  pole = new Rectangle(385,50,7,70);
  flag = new Triangle(388.5,15,388.5,65,438.5,40);
}

function draw() {
  background(255,203,164); 
  Engine.update(engine);
  tri1.display();
  tri2.display();
  tri3.display();
  tri4.display();
  tri5.display();
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  pole.display();
  flag.display();
  ground.display();
  textSize(18);
  fill(249, 87, 0);
  text("This Castle Was Built With Only With Java Script !!!",180,15);
}
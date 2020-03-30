const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3;
var sideWall1,sideWall2;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,200,70,70);
    box2 = new Box(300,500,70,70);
    box3 = new Box(300,450,70,70);
    sideWall1 = new SideWall(600,400,200,10);
    sideWall2 = new SideWall(500,300,200,10);
    ground = new Ground(600,390,1200,20);

function draw() {
  background(0);  
  Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    sideWall1.display();
    sideWall2.display();
    ground.display();
}
};
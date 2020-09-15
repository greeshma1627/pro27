
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  bobDiameter = 20;
	//Create the Bodies Here.
   bobObject1 = new bob(50,200,20,20);
   bobObject2 = new bob(52,200,20,20);
   bobObject3 = new bob(54,200,20,20);
   bobObject4 = new bob(56,200,20,20);
   bobObject5 = new bob(58,200,20,20);
   roofObject = new roof(400,200,150,10);
   rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
   rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
   rope3 = new Rope(bobObject3.body,roofObject.body,-bobDiameter*2,0)
   rope4 = new Rope(bobObject4.body,roofObject.body,-bobDiameter*2,0)
   rope5 = new Rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)
	Engine.run(engine);
	Engine.run(engine);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}





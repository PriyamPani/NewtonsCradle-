
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render= Matter.Render;
var bob1,bob2,bob3,bob4,bob5;
var Rope1;
var ground;


function setup() {
createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   
  ground = new Ground(400,300,300,20);
  //Create the Bodies Here.
  bobObject1 = new Bob(250,500,70);
	bobObject2 = new Bob(320,500,70);
	bobObject3 = new Bob(390,500,70);
	bobObject4 = new Bob(460,500,70);
	bobObject5 = new Bob(530,500,70);
 
  rope1 = new Rope(bobObject1.body, ground.body, -35*4,0);
	rope2 = new Rope(bobObject2.body, ground.body, -35*2,0);
	rope3 = new Rope(bobObject3.body, ground.body, -35*0,0);
	rope4 = new Rope(bobObject4.body, ground.body, -35*-2,0);
	rope5 = new Rope(bobObject5.body, ground.body, -35*-4,0);
	Engine.run(engine);
}


function draw() {
rectMode(CENTER);
background("yellow");

 Engine.update(engine)

 drawSprites();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
 ground.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-500,y:500})
	}
}



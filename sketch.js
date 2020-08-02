
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint
 
var ground;
var bob;
var bob2;
var sling, sling2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
	ground = new Ground(330,110,330,22);
	bob = new Bob(330,440,22);
	bob2 = new Bob(377,440,22);
	
	sling = new SlingShot(bob.body,ground.body,0,0);
	sling2 = new SlingShot(bob2.body,ground.body,0,0);
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  drawSprites();
  ground.display();
  
  bob.display();
sling.display();
 bob2.display();
sling2.display();
}

function  KeyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:110,y:110});
	}
}


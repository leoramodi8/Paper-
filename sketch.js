
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper (100,350,9);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 paperObject();



  
  
}




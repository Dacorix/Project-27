const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof;
var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var rope1, rope2, rope3, rope4, rope5;

var world;

function setup() {

	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(750, 200, 300, 20);

	bobDiameter=40;

	startBobPositionX=width/2;

	startBobPositionY=height/4+500;

	bobObj1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObj2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObj3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObj4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObj5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
  
	  rope1 = new Rope(bobObj1.body,roof.body,-bobDiameter*2, 0);
	  rope2 = new Rope(bobObj2.body,roof.body,-bobDiameter*1, 0);
	  rope3 = new Rope(bobObj3.body,roof.body,0, 0);
	  rope4 = new Rope(bobObj4.body,roof.body,bobDiameter*1, 0);
	  rope5 = new Rope(bobObj5.body,roof.body,bobDiameter*2, 0);
  
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(220);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-50,y:-45});

	}
}



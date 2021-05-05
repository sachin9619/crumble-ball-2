const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paper,bottom;
var paperI,binI;


function setup() {
	createCanvas(800, 700);

	
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(20,200,50);
	ground=new Ground(400,680,800,20);

	
	bottom=new Dustbin(660,590,150,150)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  Engine.update(engine);

  
 ground.display();

  
 

 bottom.display();
 paper.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-150})
	}
}



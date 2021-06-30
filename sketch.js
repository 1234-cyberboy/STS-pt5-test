
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var fish, eel, present, starfish, shark;
var pos = 0;
var health = 3;
var gs = 0;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	fish = new Fish();
	shark = new Shark();
	starfish = new Starfish();
	eel = new Eel();
	present = new Present(200, 100); 

    gs = 1;

}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);

  drawSprites();

 
 if(gs === 1){ 
  fish.display();;
  eel.display();
  starfish.display();
  shark.display();
present.display();

	

	pos = pos - 10;
  
  if (pos < 0) {
    pos = height;
  }
}

  text("health: "+ health, 500,50);

  if(gs === 2)

 text("You Won!!", 400, 350)

}

if(gs === 3){


 text("Try Again", 400, 350)

}

if(fish.isTouching(shark)){
	
sub()

  } 


function sub(){
	health = health - 1
}
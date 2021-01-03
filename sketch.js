
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body ; 

var engine, world ; 
var dustImg, dustbin
var bgImg
function preload () {


 dustImg = loadImage("dustbingreen.png") ; 
 bgImg = loadImage("Office.jpg")



}


function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin = createSprite(610,600,20,20) ; 
	dustbin.addImage(dustImg) ; 
	dustbin.scale = 0.55 ; 

	paper = new Paper(100, 500, 70);

	ground = new Ground(400, 680, 800, 20);
	
	leftSide = new Dust(550, 620, 20, 100);

	bottom = new Dust(610, 660, 100, 20);

	rightSide = new Dust(670, 620, 20, 100);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);

  Engine.update(engine) ;

  paper.display () ;
  //ground.display () ; 
  leftSide.display() ;
  bottom.display() ; 
  rightSide.display(); 
  
  drawSprites();
 
}

function keyPressed () {

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:600, y:-1000}) ; 
	}
}






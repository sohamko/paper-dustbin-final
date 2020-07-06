var ground,wall1,wall2,wall3
var paper1,dustbinimg,dustbinObject,slingshot1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	dustbinimg=loadImage("sprites/dustbin.png")
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	 //create paper
	
	 
	//Create a Ground
	ground = Bodies.rectangle(width/2, 600, 800, 10 , {isStatic:true});
	World.add(world, ground);
	wall1=new Wall(485,445,20,250);
	wall2=new Wall(582,570,200,20);
	wall3=new Wall(685,445,20,250);
	wall1.debug=true;
	wall2.debug=true;
	wall3.debug=true;

	dustbinObject=createSprite(585,440);
	dustbinObject.addImage(dustbinimg);
	dustbinObject.scale=0.76;
	//dustbinObject.debug=true;

	paper1=new Paper(50,100);	

	
	
   slingshot1=new Slingshot(paper1.body,{x:100,y:70});
	
	
	Engine.run(engine);
  
}


function draw() {
	//console.log(paper1.body.position.y)
	//console.log(paper1.body.position.x)
	//console.log(mouseReleased)
	console.log(mouseX);
	console.log(mouseY);
  rectMode(CENTER);
  
  background(255);
  Engine.update(engine);
  //ground.display();
  
  wall1.display();
  wall2.display();
  wall3.display();
 // dustbinObject.display();
  paper1.display();
  slingshot1.display();
 

 
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-240})
     }
}

function mouseDragged(){
Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})


}
	/*mouseX=paper1.body.position.x
	mouseY=paper1.body.position.y
Matter.Body.setPosition(paper1.body,{x: mouseX,y: mouseY})
//Matter.Body.translate(paper1.body,pos.x,pos.y)*/


function mouseReleased(){
slingshot1.fly();


}

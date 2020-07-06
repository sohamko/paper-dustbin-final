class Paper  {
constructor(x,y){
    //super(x,y,50,50);
   
 // this.body = Bodies.rectangle(x, y, width, height, options);
var options={
'density':1.2,
'restitution':0.5,
'friction':0.5,
isStatic:false,

}
this.image=loadImage("sprites/paper.png");
this.body=Bodies.circle(x,y,50,options);
this.radius=50;
//this.height=50;
World.add(world,this.body);


}

display(){
   // super.display();
var pos=this.body.position;
var angle=this.body.angle;
push();
fill("red");
translate(pos.x,pos.y);
rotate(angle)
imageMode(CENTER);
ellipseMode(CENTER);
image(this.image,0,0,60,60);
stroke("green");
strokeWeight(10);
pop();



}

} 
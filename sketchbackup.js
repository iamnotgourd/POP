
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var balloonImg,balloon;
var bullet;
var count = 0;
function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var render = Matter.Render.create({ element: document.body, engine : engine, options : { width : 800, height : 700, showAngleIndicator : false, wireframes : true } })
	 Matter.Render.run(render);


	//Create the Bodies Here.
	balloon = new Balloon(400,350,50)
	prot = new Protector(335,350,20,100)
	bullet = new Bullet(400, 40,10,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(count === 0){
	prot.display(prot.body.angle)
}else if(count === 1){
	prot.display(90)
}else if(count === 2){
	prot.display()
}else if(count === 3){
	prot.display(90)
}else if(count === 4){
	prot.display()
}
	balloon.display()
	bullet.display()
  drawSprites();
}
function mouse(){

}
function touch(){
	mangoBodyPosition=lmango.body.position 
	stoneBodyPosition=lstone.body.position 
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
	if(distance<=lmango.r+lstone.r) { 
		Matter.Body.setStatic(lmango.body,false);
	 }

}
function keyPressed(){
if(keyCode===UP_ARROW){
count = 1
		Matter.Body.setPosition(prot.body,{x:400, y:285})
	Matter.Body.setAngle(prot.body, PI/2)
}
if(keyCode===RIGHT_ARROW){
	count = 2
	Matter.Body.setPosition(prot.body,{x:465, y:350})
	Matter.Body.setAngle(prot.body, PI)
}
if(keyCode===DOWN_ARROW){
	count = 3
			Matter.Body.setPosition(prot.body,{x:400, y:415})
		Matter.Body.setAngle(prot.body, PI/2)
	}
	if(keyCode===LEFT_ARROW){
		count = 4
				Matter.Body.setPosition(prot.body,{x:335, y:350})
			Matter.Body.setAngle(prot.body, PI)
		}
}



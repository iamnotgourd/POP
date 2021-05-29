
var balloonImg,balloon;
var score = 0;
var bullet;
var count = 0;
var grp1,grp2,grp3,grp4;
var lives = []
var gameState = 0;
localStorage.HighestScore = 0;
function preload()
{
	balloonImage = loadImage("balloon.png")
	balloonBurstImage = loadImage("balloonBurst.png")
	heartImage = loadImage("heart.png")
}

function setup() {
	createCanvas(800, 700);
	grp1 = new Group()
	grp2 = new Group()
	grp3 = new Group()
	grp4 = new Group()
  balloon = createSprite(400,350)
  balloon.addImage(balloonImage)
  balloon.scale = 0.13
  balloon.setCollider("circle",0,-50,300)
  prot = createSprite(335,350,20,100)
  prot.shapeColor = "green"
  life1 = createSprite(30,30,20,20)
  life1.addImage(heartImage)
  life1.scale = 0.2
  life2 = createSprite(80,30,20,20)
  life2.addImage(heartImage)
  life2.scale = 0.2
  life3 = createSprite(130,30,20,20)
  life3.addImage(heartImage)
  life3.scale = 0.2
  life4 = createSprite(180,30,20,20)
  life4.addImage(heartImage)
  life4.scale = 0.2
  life5 = createSprite(230,30,20,20)
  life5.addImage(heartImage)
  life5.scale = 0.2
  lives = [life1,life2,life3,life4,life5]

}


function draw() {
	background(0);
	
	if(gameState === 0){
		if(localStorage.HighestScore <score){ localStorage.HighestScore = score; }
	if(keyWentDown(UP_ARROW) || keyWentDown("W")){
		prot.x = 400
		prot.y = 285
		prot.width = 100
		prot.height = 20
}else if(keyWentDown(LEFT_ARROW) || keyWentDown("A")){
	prot.x = 335
	prot.y = 350
	prot.width = 20
	prot.height = 100
}else if(keyWentDown(RIGHT_ARROW) || keyWentDown("D")){
	prot.x = 465
	prot.y = 350
	prot.width = 20
	prot.height = 100
}else if(keyWentDown(DOWN_ARROW) || keyWentDown("S")){
	prot.x = 400
	prot.y = 415
	prot.width = 100
	prot.height = 20
}
if(grp1){
for(var a = 0;a<grp1.length;a++){
if(prot.isTouching(grp1.get(a))){
		grp1.get(a).destroy()
		score += 100
		}
	}
}
if(grp2){
	for(var a = 0;a<grp2.length;a++){
	if(prot.isTouching(grp2.get(a))){
		grp2.get(a).destroy()
		score += 100
		}
	}
}

if(grp3){
	for(var a = 0;a<grp3.length;a++){
	if(prot.isTouching(grp3.get(a))){
		grp3.get(a).destroy()
		score += 100
		}
	}	
}	

if(grp4){
	for(var a = 0;a<grp4.length;a++){
	if(prot.isTouching(grp4.get(a))){
		grp4.get(a).destroy()
		score += 100
		}
	}	
}	

if(balloon.isTouching(grp1) || balloon.isTouching(grp2) || balloon.isTouching(grp3) || balloon.isTouching(grp4)){
	grp1.destroyEach()
	grp2.destroyEach()
	grp3.destroyEach()
	grp4.destroyEach()
	if(score>200){
	
	}
	if(lives.length>0){
		lives[lives.length-1].visible = false
		lives.pop()
	}

	if(lives.length === 0){
		balloon.addImage(balloonBurstImage)
		balloon.scale = 0.25
		prot.visible = false
		grp1.destroyEach()
		grp2.destroyEach()
		grp3.destroyEach()
		grp4.destroyEach()
		gameState = 1
		}
}
fill("orange")
textSize(20)
text("High Score = "+localStorage.HighestScore,600,100);  
	
bullets1()
bullets2()
bullets3()
bullets4()
}
else if(gameState === 1){
	fill("orange")
	textSize(25)
	text("PRESS ENTER TO RESTART",250,250)
	if(localStorage.HighestScore>0){
		fill("yellow")
		textSize(20)
		text("High Score = "+localStorage.HighestScore,600,100);  
	   }
	if(keyDown("ENTER")){
		gameState = 0
		prot.visible = true
		balloon.addImage(balloonImage)
		balloon.scale = 0.13
		lives = [life1,life2,life3,life4,life5]
		life1.visible = true
		life2.visible = true
		life3.visible = true
		life4.visible = true
		life5.visible = true
		score = 0
		
	}
	
}



  fill("orange")
  textSize(20)
  text("Score :" +score,600,50)

  drawSprites();
}
function bullets1(){
	var r = Math.round(random(1,2))
	var fc = 0
	if(r === 1){
		fc = 70
	}else {
		fc = 150
	} 
	if(frameCount%fc===0){
		var bullet = createSprite(800,350,10,10)
		bullet.velocityX = random(-9,-15)
		bullet.lifetime = 80
		grp1.add(bullet)
		bullet.shapeColor = "Red"

	}
}
function bullets2(){
	var r = Math.round(random(1,2))
	var fc = 0
	if(r === 1){
		fc = 90
	}else {
		fc = 190
	} 
	if(frameCount%fc===0){
		var bullet = createSprite(0,350,10,10)
		bullet.velocityX = random(9,15)
		bullet.lifetime = 80
		grp2.add(bullet)
		bullet.shapeColor = "Red"
	}
}
function bullets3(){
	var r = Math.round(random(1,2))
	var fc = 0
	if(r === 1){
		fc = 130
	}else {
		fc = 200
	} 
	if(frameCount%fc===0){
		var bullet = createSprite(400,0,10,10)
		bullet.velocityY = random(9,15)
		bullet.lifetime = 80
		grp3.add(bullet)
		bullet.shapeColor = "Red"
	}
}
function bullets4(){
	var r = Math.round(random(1,2))
	var fc = 0
	if(r === 1){
		fc = 170
	}else {
		fc = 220
	} 
	if(frameCount%fc===0){
		var bullet = createSprite(400,700,10,10)
		bullet.velocityY = random(-9,-15)
		bullet.lifetime = 80
		grp4.add(bullet)
		bullet.shapeColor = "Red"
	}
}




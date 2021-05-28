class Balloon{
    constructor(x,y,radius){
        var options= {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        this.image = loadImage("balloon.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,100,100)
    }
}
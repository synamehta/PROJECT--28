class STONE{

    constructor(){
this.stone=Bodies.rectangle(130,380,40,40);
this.image=loadImage("images/stone.png");
World.add(myWorld,this.stone);
this.w=40;
this.h=40;
    }

    display(){
imageMode(CENTER)
image(this.image,this.stone.position.x,this.stone.position.y,this.w,this.h);
    }
}
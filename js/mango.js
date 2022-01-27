class MANGO{

	constructor(x,y,w,h){
		var options={
			isStatic:true
		}
	this.image=loadImage("images/mango.png")
	this.mango=Bodies.rectangle(x,y,w,h,options);
	World.add(myWorld,this.mango);
	this.w=w;
	this.h=h;
	}

	display(){
imageMode(CENTER);
image(this.image,this.mango.position.x,this.mango.position.y,this.w,this.h);
	}
}
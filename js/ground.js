class GROUND{

	constructor(){
		var options={
			isStatic:true
		}
this.ground=Bodies.rectangle(650,570,1300,60,options);
World.add(myWorld,this.ground);
this.w=1300;
this.h=60;
	}

	display(){
	fill("black");
rectMode(CENTER);
rect(this.ground.position.x,this.ground.position.y,this.w,this.h);
	}
}
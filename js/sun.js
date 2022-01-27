class SUN {

    constructor (){
        var options={
            isStatic:true
        }
this.sun=Bodies.circle(45,35,30,options);
World.add(myWorld,this.sun);
this.r=30;
    }

    display(){
    fill("yellow");
ellipseMode(RADIUS);
ellipse(this.sun.position.x,this.sun.position.y,this.r);

    }
}


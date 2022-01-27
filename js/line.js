class LINE{

    constructor(a,b){
        var options={
            pointA:a,
            bodyB:b,
            stiffness:0.04,
            length:50
        }
this.line=Constraint.create(options);
World.add(myWorld,this.line);
this.pointA=a;
    }

    display(){
if(this.line.bodyB){
    line(this.pointA.x, this.pointA.y,
        this.line.bodyB.position.x,this.line.bodyB.position.y);
}
    }

    fly(){
// this.line.bodyB cuz bodyB is inside this.line
//making bodyB null so the constraint cant be made with one body/point...
this.line.bodyB=null; 
    }

    attach(abcd){
this.line.bodyB=abcd; 
    }
}
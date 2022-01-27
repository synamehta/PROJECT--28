class LINE1{

  constructor(a,b){
    var options={
      bodyA:a,
      bodyB:b,
      stiffness:0.03,
      length:200
    }

this.line1=Constraint.create(options);
World.add(myWorld,this.line1);
    }

    display(){
line(this.line1.bodyA.position.x,this.line1.bodyA.position.y,
      this.line1.bodyB.position.x,this.line1.bodyB.position.y);
    }
}

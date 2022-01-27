const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var myGround,myTree,myStone,myLine,mySun,myLine1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var myWorld,myEngine,tree1,boy1;

//Declare launcherObject and launchForce variable here


function preload(){
	boy1=loadImage("images/boy.png");
  tree1=loadImage("images/tree.png")
  }

function setup() {
	createCanvas(1300, 600);
	myEngine = Engine.create();
  //my engine hould be put in my world.
	myWorld = myEngine.world;

  myGround=new GROUND();

  mango1=new MANGO(1020,230,40,40);
  mango2=new MANGO(900,120,50,50);
  mango3=new MANGO(925,250,60,60);
  mango4=new MANGO(1000,120,40,40);
  mango5=new MANGO(810,230,50,50);
  mango6=new MANGO(1100,220,40,40);
  mango7=new MANGO(950,175,60,60);
  mango8=new MANGO(870,230,40,40);
  mango9=new MANGO(900,160,50,50);
  mango10=new MANGO(1100,150,40,40);
  
  myStone=new STONE();

  mySun=new SUN();

  myLine=new LINE({x:150,y:400},myStone.stone);

  //myLine1=new LINE1(mango10.mango,mySun.sun);

  Engine.run(myEngine);
}

function draw() {

  background(230);
  textSize(25);
  text("MANGO GAME",550,50);

  imageMode(CENTER);
	image(tree1,950,320,450,550);
  image(boy1,200,470,200,300);
  

  myGround.display();

  myStone.display();

  myLine.display();
  //myLine1.display();

  mySun.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
}

//create mouseDragged function here
function mouseDragged(){
  Matter.Body.setPosition(myStone.stone,{x:mouseX,y:mouseY});
}

//create mouseReleased function here
function mouseReleased(){
  myLine.fly();
}

//create keyPressed function here
function keyPressed(){
  if(keyCode===32){
    myLine.attach(myStone.stone);
  }
}

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.mango.position;
  stoneBodyPosition=lstone.stone.position;
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  	if(distance<=lmango.r+lstone.r);
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
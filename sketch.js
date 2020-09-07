const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1, mango2, mango3, mango4, mango5;
var stone, ground, tree, boyImage, boy;
var stoneLauncherVar;

function preload(){
	boyImage = loadImage("Plucking mangoes/boy.png");
	flowersGIF = loadAnimation("Plucking mangoes/flowers.gif")
}

function setup() {
	createCanvas(1400,800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1100,414,610,800);
	ground = new Ground(700,790,1400,20);

	mango1 = new Mango(920,380,50,50);
	mango2 = new Mango(980,180,50,50);
	mango3 = new Mango(1100,290,50,50);
	mango4 = new Mango(1180,100,50,50);
	mango5 = new Mango(1380,280,50,50);

	stone = new Stone(125,700,70,70);

	//stoneLauncherVar = new stoneLauncher(stone.body,{x: 125, y: 700});

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);

	background(125,200,245);

	ground.display();
	tree.display();

  	mango1.display();
  	mango2.display();
  	mango3.display();
  	mango4.display();
  	mango5.display();

  	stone.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
    stoneLauncherVar.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x: 235, y: 420});
		stoneLauncherVar.attach(stone.body);
	}
}

function detectCollision(stoneVarExample,mangoVarExample){
	mangoBodyPosition = mangoVarExample.body.position;
	stoneBodyPosition = stoneVarExample.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if  (distance=<mangoVarExample.r/stoneVarExample.r>){
		Matter.Body.setStatic(mangoVarExample,false);
	}
}
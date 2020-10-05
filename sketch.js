var helicopterIMG, helicopterSprite, packageSprite,packageIMG,targate,targatei;
var supply,ground,bw1,bw2,w1,w2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	targatei = loadImage("targate.png");
}

function setup() {
	createCanvas(800,600);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2,100, width,10);
	groundSprite.shapeColor=color("black")

	targate = createSprite(385,450,20,20,{isStatic:true});
	targate.addImage(targatei);
	targate.scale = 0.6;

	//bw1 = createSprite(447,434,10,85);
	//bw1.shapeColor = color ("brown");

	//bw2 = createSprite(357,434,10,85,{isStatic:true});
	//bw2.shapeColor = color ("brown");

	engine = Engine.create();
	world = engine.world;

	var supply_options = {
		restitution : 0.7
		}
		supply = Bodies.circle(400,200,40,supply_options);
		World.add(world,supply);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2,500, width,10,{isStatic:true} );
	 World.add(world,ground);
	 
	w2 = Bodies.rectangle(447,434,10,85,{isStatic:true});

    w1 = Bodies.rectangle(390,434,10,85,{isStatic:true});

	Matter.Body.setStatic(supply,true);
	Engine.run(engine);

}


function draw() {
	if (keyDown("DOWN_ARROW")){
      Matter.Body.setStatic(supply,false);
	}
  rectMode(CENTER);
  background(0);
  ellipse(supply.position.x,supply.position.y,40);
  packageSprite.x= supply.position.x 
  packageSprite.y= supply.position.y
  drawSprites();
}



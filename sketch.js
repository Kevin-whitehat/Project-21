
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;
var barrerLeft;
var barrierRight;
var barrierTop;

function preload() {

}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//groundOptions = { isStatic: true };
	//ground = Bodies.rectangle(width / 2, 400, width, 20, groundOptions);
	//World.add(world, ground);
	//ground = new Ground(400, 390, 400, 20);

	ground = new Ground(width / 2, 330, width, 10);
	leftSide = new Ground(400, 320, 10, 50);
	rightSide = new Ground(550, 230, 10, 200);

	barrierTop = new Ground(width / 2, 600, width, 30);
	barrierLeft = new Ground(10, 300, 30, 600);
	barrierRight = new Ground(width - 10, 300, 30, 60)



	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		//friction: 0,
		//density: 1.2
	}

	ball = Matter.Bodies.circle(80, 300, 20, ball_options);
	World.add(world, ball);





	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	ellipseMode(CENTER);
	background(0);
	Engine.update(engine);
	ellipse(ball.position.x, ball.position.y, 20);
	//rect(ground.position.x, ground.position.y, width, 20)
	ground.show();
	leftSide.show();
	rightSide.show();
	drawSprites();
	force();
}
function force() {
	if (keyDown("UP_ARROW")) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: 0.065 });
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.02, y: 0 });
		console.log("worked");
	}
}




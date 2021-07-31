
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;

function preload() {

}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400, 330, 800, 10);
	leftSide = new Ground(400, 300, 10, 50);
	rightSide = new Ground(500, 300, 10, 50)


	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Matter.Bodies.circle(400, 300, 250, ball_options);
	World.add(world, ball);





	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);
	ellipse(ball.position.x, ball.position.y, 20);
	ground.show();
	leftSide.show();
	rightSide.show();
	drawSprites();
	if (keyDown("UP_ARROW")) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
	}
}





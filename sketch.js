var bullet, wall, thicc;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  thicc=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = color(255, 255, 255);
  wall = createSprite(1500, 200, thicc, height/2);
}

function draw() {
  background(0,0,0);
  bullet.velocityX = speed;
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2 && 
    wall.x - bullet.x < wall.width/2 + bullet.width/2 && 
    bullet.y - wall.y < wall.height/2 + bullet.height/2 && 
    wall.y - bullet.y < wall.height/2 + bullet.height/2) {
      damage = 0.5*weight*speed*speed/thicc*thicc*thicc;
      console.log(weight, speed, damage);
      bullet.velocityX = 0;
    }
    if (damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }
  drawSprites();
}

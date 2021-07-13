
var track,trackImage;
var boy,boy_running;

function preload(){
    //pre-load images
    trackImage = loadImage("path.png");
    boy_running = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
    createCanvas(400,400);
    track = createSprite(200,400,20,50);
    track.addImage("track",trackImage);
    track.velocityY = 4;
    track.scale = 1.2;
    boy = createSprite(300,290,20,50);
    boy.addAnimation("running", boy_running);
    boy.scale = 0.09;
    invisibleBoundary = createSprite(1,200,20,4000);
    invisibleBoundary.visible=false;
    invisibleBoundary2 = createSprite(399,200,20,4000);
    invisibleBoundary2.visible=false;
}

function draw() {
    background(0);
    boy.x = mouseX;
        if (track.y > 350) {
        track.y = height / 2;
    }
  boy.collide(invisibleBoundary);
  boy.collide(invisibleBoundary2);
  drawSprites();
}
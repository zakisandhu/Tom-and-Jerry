// Add varibles
var cat, startingCatImage, movingCatAnimation, finalCatImage;
var mouse, mouseImage, tauntingMouseAnimation, finalMouseImage;
var garden, gardenImage;


function preload() {
    //add animations and images to the variables

    //For the cat
    startingCatImage = loadImage("cat1.png");
    movingCatAnimation = loadAnimation("cat2.png", "cat3.png");
    finalCatImage = loadImage("cat4.png");

    //for the mouse
    mouseImage = loadImage("mouse1.png");
    tauntingMouseAnimation = loadAnimation ("mouse2.png","mouse3.png");
    finalCatImage = loadImage("mouse4.png");

    //for the background
    gardenImage = loadImage("garden.png");

}

function setup(){
    
    createCanvas(1000,800);
    
    //create the sprites and link the variables to the sprites 
    background = createSprite(1000,800,10,10);
    background.addImage(gardenImage);
    background.scale = 0.5;

    cat = createSprite(800,700,10,10)
    cat.addImage(startingCatImage);
    cat.scale = 0.5;

    mouse = createSprite(250,700,10,10)
    mouse.addImage(mouseImage);
    mouse.scale = 0.5;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

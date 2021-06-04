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
    garden = createSprite(500,400,10,10);
    garden.addImage(gardenImage);
    garden.scale = 1;

    cat = createSprite(800,650,10,10)
    cat.addImage(startingCatImage);
    cat.scale = 0.2;

    mouse = createSprite(250,650,10,10)
    mouse.addImage(mouseImage);
    mouse.scale = 0.2;

}

function draw() {

    //add the code that when the left arrow is pressed the cat moves
    if(cat.x - mouse.x <= cat.width/2 + mouse.width/2 && mouse.x - cat.x <= cat.width/2 + mouse.width/2){
        cat.velocityX = 0;
        cat.addAnimation("final", finalCatImage);
        cat.changeAnimation("final");

        mouse.addAnimation("final", finalMouseImage);
        mouse.changeAnimation("final");
    }
    

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        //cat.addAnimation("catrunning", movingCatAnimation);
        cat.changeAnimation("catrunning", finalCatImage);

        //mouse.addAnimation("taunting", tauntingMouseAnimation);
        mouse.changeAnimation("taunting", tauntingMouseAnimation);
    }



}

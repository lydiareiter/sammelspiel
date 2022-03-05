
/* INIT */
let sprite = document.getElementById("sprite");
let spriteImg = document.getElementById("spriteImg");
let eichel = document.getElementById("eichel");
let counter = document.getElementById("count");

sprite.style.left = "100px"; // starting position
sprite.style.top = "100px"; // starting position
spriteImg.style.right = "4px"; // starting animation

let spriteImgNumber = 0; // current animation part of image

/* EVENT LISTENER */
document.onkeydown = keyListener;

let arrow = 39;

/* Eichel Speicherpunkt */
let eichelX;
let eichelY;
let count = -1;
eichelspown();


/* CHECK PRESSED KEY */
let richtung = "right";
function keyListener(e){
    //console.log(e);
    //console.log(e.keyCode);
    let x = parseInt(sprite.style.left);
    let y = parseInt(sprite.style.top);

    if (!e){
        e = window.event; //Internet Explorer
    }
    if (e.keyCode == 37){ // leftArrow
        if(x -10 > 0){
            moveSprite(-10, 0);
        }
        if(richtung == "right"){
            trurnLeft();
            richtung = "left";
        }
        animateCharacter();
        arrow = 37;
    }
    if (e.keyCode == 38){ //upArrow
        if(y - 10 > 0){
            moveSprite(0, -10);
        }
        animateCharacter();
        arrow = 38;
    }
    if (e.keyCode == 39){ // rightArrow
        if(x + 10 < 1300-15){
            moveSprite(10, 0);
        }
        if(richtung == "left"){
            trurnRight();
            richtung = "right";
        }
        animateCharacter();
        arrow = 39;
    }
    if (e.keyCode == 40){ // downArrow
        if(y + 10 < 600-15){
            moveSprite(0, 10);
        }
        animateCharacter();
        arrow = 40;
    }

    arrow = e.keyCode;
}

/* MOVE SPRITE */
function moveSprite(dx, dy){
        // current position
        let x = parseInt(sprite.style.left);
        let y = parseInt(sprite.style.top);
        
        // new position
        x += dx;
        y += dy;

        if((Math.abs(x - eichelX) < 15)  && (Math.abs(y - eichelY) < 15)){
            eichelspown();
        }
        
        // assign new position
        sprite.style.left = x + "px";
        sprite.style.top = y + "px";
}

/* ANIMATE CHARACTER */
function animateCharacter() {

    if (richtung == "right") {
        if (spriteImgNumber < 6) { // new img position
            spriteImgNumber++;
            let x = parseInt(spriteImg.style.right);
            x += 25.6; // ANPASSEN!
            spriteImg.style.right = x + "px";
        }
        else { // cycle loop finished: back to start animation
            spriteImg.style.right = "0px";
            spriteImgNumber = 0;
        }
    }

    if (richtung == "left") {
        if (spriteImgNumber < 6) { // new img position
            spriteImgNumber++;
            let x = parseInt(spriteImg.style.right);
            x -= 25; // ANPASSEN!
            spriteImg.style.right = x + "px";
        }
        else { // cycle loop finished: back to start animation
            spriteImg.style.right = "154.6px";
            spriteImgNumber = 0;
        }
    }

}

function trurnLeft() {
    let x = parseInt(sprite.style.left);
    document.images[0].src = "./eichhoernchenlinks.png";
    sprite.style.left = x + "px";
}
function trurnRight() {
    document.images[0].src = "./eichhoernchen.png";
}

function eichelspown(){
    count++;
    if(count == 20){
        window.location = "./ende.html";
    }
    counter.innerHTML = count;
    eichelX = Math.floor(Math.random() * 130 + 1) * 10;
    eichelY = Math.floor(Math.random() * 60 + 1) * 10;
    eichel.style.top = `${eichelY}px`;
    eichel.style.left = `${eichelX}px`;
}

function gehen(e){
    let x = parseInt(sprite.style.left);
    let y = parseInt(sprite.style.top);
    if (e == 37){ // leftArrow
        if(x -10 > 0){
            moveSprite(-10, 0);
        }
        if(richtung == "right"){
            trurnLeft();
            richtung = "left";
        }
        animateCharacter();
        arrow = 37;
    }
    if (e == 38){ //upArrow
        if(y - 10 > 0){
            moveSprite(0, -10);
        }
        animateCharacter();
        arrow = 38;
    }
    if (e == 39){ // rightArrow
        if(x + 10 < 1300-15){
            moveSprite(10, 0);
        }
        if(richtung == "left"){
            trurnRight();
            richtung = "right";
        }
        animateCharacter();
        arrow = 39;
    }
    if (e == 40){ // downArrow
        if(y + 10 < 600-15){
            moveSprite(0, 10);
        }
        animateCharacter();
        arrow = 40;
    }
}

function gameLoop() {
    animateCharacter();
    gehen(arrow);
    setTimeout(gameLoop, 150);
}
gameLoop();
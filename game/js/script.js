let points= 0;
let lives= 3;
console.log("initial points " + points);
console.log("initial lives " + lives);

//Grabbing the sounds

const winningSound1 = document.querySelector("#winningSound");
const losingSound1 = document.querySelector("#losingSound");
const hitBadSound1 = document.querySelector("#hitBadSound");
const hitGoodSound1 = document.querySelector("#hitGoodSound");
const bgSound1 = document.querySelector("#bgSound");
const bubbleSound1 = document.querySelector("#bubbleSound");
const clickSound1 = document.querySelector("#clickSound");

title();

function getAPoint() {
    console.log(`playerpoints`);
    points = points + 1;
    updatePoints();
}

function updatePoints() {
    console.log("updated points " + points)
    document.querySelector("#score_board").textContent = points;

}

function loseALife() {
    console.log(`loseALife`);
    document.querySelector("#liv" + lives).classList.add("hidden");
    lives = lives - 1;
    // updateLives();
}

//BUTTONS
document.querySelector("#try_again").addEventListener("click", start);
document.querySelector("#playbutton_container").addEventListener("click", start);
document.querySelector("#instructionsButton_container").addEventListener("click", showInstructions);
document.querySelector("#playbutton_container2").addEventListener("click", start);
document.querySelector("#try_again2").addEventListener("click", start);
document.querySelector("#instructionsButton2").addEventListener("click", showInstructions);

//adding sound to buttons
document.querySelector("#try_again").addEventListener("mousedown", playClick);
document.querySelector("#playbutton_container").addEventListener("mousedown", playClick);
document.querySelector("#instructionsButton_container").addEventListener("mousedown", playClick);
document.querySelector("#playbutton_container2").addEventListener("mousedown", playClick);
document.querySelector("#try_again2").addEventListener("mousedown", playClick);
document.querySelector("#instructionsButton2").addEventListener("mousedown", playClick);

function playClick(){
    clickSound1.play();
    clickSound1.volume = 1.5;
}

function title(){
    console.log('showTitle');
    //show title screen:
    document.querySelector("#title_screen").classList.remove("hidden");
    document.querySelector("#winning").classList.add("hidden");
}

function start() {
    //hide title screen
    console.log(`start`)
    updatePoints();
    // updateLives();
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#winning").classList.add("hidden");

    //play background music
    bubbleSound1.play();
    bubbleSound1.volume = 1;

    startTimer();
    document.querySelector("#goodItemContainer1").addEventListener("click", stopAnimGood);
    document.querySelector("#goodItemContainer1").addEventListener("animationiteration", missingGood);
    document.querySelector("#goodItemContainer2").addEventListener("click", stopAnimGood2);
    document.querySelector("#goodItemContainer2").addEventListener("animationiteration", missingGood2);
    document.querySelector("#goodItemContainer3").addEventListener("click", stopAnimGood3);
    document.querySelector("#goodItemContainer3").addEventListener("animationiteration", missingGood3);
    document.querySelector("#badItemContainer1").addEventListener("click", stopAnimBad);
    document.querySelector("#badItemContainer1").addEventListener("animationiteration", missingBad);
    document.querySelector("#badItemContainer2").addEventListener("click", stopAnimBad2);
    document.querySelector("#badItemContainer2").addEventListener("animationiteration", missingBad2);
    document.querySelector("#sound_off").addEventListener("click", muteAllSound);
    document.querySelector("#sound_on").addEventListener("click", unmuteAllSound);
    bubbleSound1.addEventListener('ended', loopSound);


    //define falling animations
    document.querySelector("#goodItemContainer1").classList.add("falling1", "pos1");
    document.querySelector("#goodItemContainer2").classList.add("falling1", "pos2");
    document.querySelector("#goodItemContainer3").classList.add("falling1", "pos3");
    document.querySelector("#badItemContainer1").classList.add("falling1", "pos6");
    document.querySelector("#badItemContainer2").classList.add("falling1", "pos8");

    //stop sounds at start game
    winningSound1.pause();
    winningSound1.currentTime= 0;
    losingSound1.pause();
    losingSound1.currentTime= 0;
}

function loopSound() {
    bubbleSound1.currentTime=0;
    bubbleSound1.play();
}

function muteAllSound() {
    console.log(`MUTE`)
    winningSound1.muted = true;
    losingSound1.muted = true;
    bubbleSound1.muted = true;
    clickSound1.muted = true;
    hitBadSound1.muted = true;
    hitGoodSound1.muted = true;
}

function unmuteAllSound() {
    console.log(`UNMUTE`)
    winningSound1.muted = false;
    losingSound1.muted = false;
    bubbleSound1.muted = false;
    clickSound1.muted = false;
    hitBadSound1.muted = false;
    hitGoodSound1.muted = false;
}

function showInstructions(){
    console.log('showInstructions');
    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector("#game").classList.add("hidden");
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
}

//CLICKED GOOD ITEM1

//when the item is clicked, it runs "stopadmin" and rotates the item ("animationrotation") and plays the item again ("missing")
//stops the falling animation and makes the item spin
function stopAnimGood() {
    console.log("stopAnim");
    getAPoint();
    document.querySelector("#goodItemContainer1").classList.add("stop");
    document.querySelector("#goodItemSprite1").classList.add("rotation");
    document.querySelector("#goodItemSprite1").addEventListener("animationend", resetGoodItem1);
    if (points === 15){
        winning();
    }
    //Hit good item sound
    hitGoodSound1.currentTime = 0;
    hitGoodSound1.play();


}

function resetGoodItem1() {
    console.log("resetGoodItem1");
    document.querySelector("#goodItemContainer1").classList.value="";
    
    document.querySelector("#goodItemSprite1").classList.remove("rotation");
    document.querySelector("#goodItemSprite1").removeEventListener("animationend", resetGoodItem1);

    // To complete the javascript timeframe and for a new one to start
    document.querySelector("#goodItemContainer1").offsetHeight;

    let fall_number = getARandomNumber(2);
 
    document.querySelector("#goodItemContainer1").classList.add("falling" + fall_number);
    
    let pos_number = getARandomNumber(4);
    document.querySelector("#goodItemContainer1").classList.add("pos" + pos_number);
}

// the function "missing" restarts the falling items if it is not hit
function missingGood() {
    console.log("Good item missed");
    resetGoodItem1();
}

//CLICKED GOOD ITEM2

//when the item is clicked, it runs "stopadmin" and rotates the item ("animationrotation") and plays the item again ("missing")
//stops the falling animation and makes the item spin
function stopAnimGood2() {
    console.log("stopAnim2");
    getAPoint();
    document.querySelector("#goodItemContainer2").classList.add("stop");
    document.querySelector("#goodItemSprite2").classList.add("rotation");
    document.querySelector("#goodItemSprite2").addEventListener("animationend", resetGoodItem2);
    if (points === 15){
        winning();
    }
        //Hit good item sound
        hitGoodSound1.currentTime = 0;
        hitGoodSound1.play();
}

function resetGoodItem2() {
    console.log("resetGoodItem2");
    document.querySelector("#goodItemContainer2").classList.value="";
    
    document.querySelector("#goodItemSprite2").classList.remove("rotation");
    document.querySelector("#goodItemSprite2").removeEventListener("animationend", resetGoodItem2);

    // To complete the javascript timeframe and for a new one to start
    document.querySelector("#goodItemContainer2").offsetHeight;

    let fall_number = getARandomNumber(2);
 
    document.querySelector("#goodItemContainer2").classList.add("falling" + fall_number);
    
    let pos_number = getARandomNumber(4);
    document.querySelector("#goodItemContainer2").classList.add("pos" + pos_number);
}

// the function "missing" restarts the falling items if it is not hit
function missingGood2() {
    console.log("Good item missed");
    resetGoodItem2();
}

//CLICKED GOOD ITEM3

//when the item is clicked, it runs "stopadmin" and rotates the item ("animationrotation") and plays the item again ("missing")
//stops the falling animation and makes the item spin
function stopAnimGood3() {
    console.log("stopAnim");
    getAPoint();
    document.querySelector("#goodItemContainer3").classList.add("stop");
    document.querySelector("#goodItemSprite3").classList.add("rotation");
    document.querySelector("#goodItemSprite3").addEventListener("animationend", resetGoodItem3);
    if (points === 15){
        winning();
    }
        //Hit good item sound
        hitGoodSound1.currentTime = 0;
        hitGoodSound1.play();
}

function resetGoodItem3() {
    console.log("resetGoodItem3");
    document.querySelector("#goodItemContainer3").classList.value="";
    
    document.querySelector("#goodItemSprite3").classList.remove("rotation");
    document.querySelector("#goodItemSprite3").removeEventListener("animationend", resetGoodItem3);

    // To complete the javascript timeframe and for a new one to start
    document.querySelector("#goodItemContainer3").offsetHeight;

    let fall_number = getARandomNumber(2);
 
    document.querySelector("#goodItemContainer3").classList.add("falling" + fall_number);
    
    let pos_number = getARandomNumber(4);
    document.querySelector("#goodItemContainer3").classList.add("pos" + pos_number);
}

// the function "missing" restarts the falling items if it is not hit
function missingGood3() {
    console.log("Good item missed");
    resetGoodItem3();
}


// global - create function that returns random number
function getARandomNumber(number) {
    return Math.floor(Math.random() * number) + 1;
}

//CLICKED BAD OBJECT1
//stops the falling animation and makes the item spin
function stopAnimBad() {
    console.log("stopAnim");
    loseALife();
    document.querySelector("#badItemContainer1").classList.add("stop");
    document.querySelector("#badItemSprite1").classList.add("rotation");
    document.querySelector("#badItemSprite1").addEventListener("animationend", resetBadItem1);
    if (lives < 1){
        gameOver();
    }
        //Hit bad item sound
        hitBadSound1.currentTime = 0;
        hitBadSound1.play();
}

function resetBadItem1() {
    console.log("resetBadItem1");
    document.querySelector("#badItemContainer1").classList.value="";
    
    document.querySelector("#badItemSprite1").classList.remove("rotation");
    document.querySelector("#badItemSprite1").removeEventListener("animationend", resetBadItem1);

    // To complete the javascript timeframe and for a new one to start
    document.querySelector("#badItemContainer1").offsetHeight;

    let fall_number = getARandomNumber(2);
 
    document.querySelector("#badItemContainer1").classList.add("falling" + fall_number);
    
    let pos_number = getARandomNumber(4) +4;
    document.querySelector("#badItemContainer1").classList.add("pos" + pos_number);
}

// the function "missing" restarts the falling items if it is not hit
function missingBad() {
    console.log("bad item avoided");
    resetBadItem1();
}

//CLICKED BAD OBJECT2
//stops the falling animation and makes the item spin
function stopAnimBad2() {
    console.log("stopAnim");
    loseALife();
    document.querySelector("#badItemContainer2").classList.add("stop");
    document.querySelector("#badItemSprite2").classList.add("rotation");
    document.querySelector("#badItemSprite2").addEventListener("animationend", resetBadItem2);
    if (lives < 1){
        gameOver();
    }
            //Hit bad item sound
            hitBadSound1.currentTime = 0;
            hitBadSound1.play();
}

function resetBadItem2() {
    console.log("resetBadItem2");
    document.querySelector("#badItemContainer2").classList.value="";
    
    document.querySelector("#badItemSprite2").classList.remove("rotation");
    document.querySelector("#badItemSprite2").removeEventListener("animationend", resetBadItem2);

    // To complete the javascript timeframe and for a new one to start
    document.querySelector("#badItemContainer2").offsetHeight;

    let fall_number = getARandomNumber(2);
 
    document.querySelector("#badItemContainer2").classList.add("falling" + fall_number);
    
    let pos_number = getARandomNumber(4) +4;
    document.querySelector("#badItemContainer2").classList.add("pos" + pos_number);
}

// the function "missing" restarts the falling items if it is not hit
function missingBad2() {
    console.log("bad item avoided");
    resetBadItem2();
}

// Starts the timer animation. When the animation finishes (after 30 seconds) gameOver() is called
function startTimer() {
    console.log("startTimer");

    document.querySelector("#time_sprite").classList.add("shrink");
    document.querySelector("#time_sprite").addEventListener("animationend", gameOver);
}

function gameOver() {
    console.log("gameOver");
        //remove event listeners items
        document.querySelector("#goodItemContainer1").removeEventListener("click", stopAnimGood);
        document.querySelector("#goodItemContainer1").removeEventListener("animationiteration", missingGood);
        document.querySelector("#badItemContainer1").removeEventListener("click", stopAnimBad);
        document.querySelector("#badItemContainer1").removeEventListener("animationiteration", missingBad);
        document.querySelector("#badItemSprite1").removeEventListener("animationend", resetBadItem1);
        document.querySelector("#goodItemSprite1").removeEventListener("animationend", resetGoodItem1);


        //remove timer
        document.querySelector("#time_sprite").removeEventListener("animationend", gameOver);
        document.querySelector("#time_sprite").classList.remove("shrink");
    
        //remove falling animations
        document.querySelector("#goodItemContainer1").classList="";
        document.querySelector("#badItemSprite1").classList="";
        document.querySelector("#badItemContainer1").classList="";
        document.querySelector("#goodItemSprite1").classList="";
        document.querySelector("#badItemContainer2").classList="";
        document.querySelector("#badItemSprite2").classList="";
        document.querySelector("#goodItemContainer2").classList="";
        document.querySelector("#goodItemSprite2").classList="";
        document.querySelector("#goodItemContainer3").classList="";
        document.querySelector("#goodItemSprite3").classList="";

        //show gameover screen
        document.querySelector("#game").classList.add("hidden");
        document.querySelector("#game_over").classList.remove("hidden");

        //control music

        losingSound1.play();
        bubbleSound1.pause();
        bubbleSound1.currentTime = 0;
        bubbleSound1.removeEventListener('ended', loopSound);


        //reset points and lives
        points= 0;
        lives= 3;
        document.querySelector("#liv1").classList.remove("hidden");
        document.querySelector("#liv2").classList.remove("hidden");
        document.querySelector("#liv3").classList.remove("hidden");

}

function winning(){
    console.log("You won!");

            //remove event listeners items
            document.querySelector("#goodItemContainer1").removeEventListener("click", stopAnimGood);
            document.querySelector("#goodItemContainer1").removeEventListener("animationiteration", missingGood);
            document.querySelector("#badItemContainer1").removeEventListener("click", stopAnimBad);
            document.querySelector("#badItemContainer1").removeEventListener("animationiteration", missingBad);
            document.querySelector("#badItemSprite1").removeEventListener("animationend", resetBadItem1);
            document.querySelector("#goodItemSprite1").removeEventListener("animationend", resetGoodItem1);
    
            //remove timer
            document.querySelector("#time_sprite").removeEventListener("animationend", gameOver);
            document.querySelector("#time_sprite").classList.remove("shrink");
        
            //remove falling animations
            document.querySelector("#goodItemContainer1").classList="";
            document.querySelector("#badItemSprite1").classList="";
            document.querySelector("#badItemContainer1").classList="";
            document.querySelector("#goodItemSprite1").classList="";
            document.querySelector("#badItemContainer2").classList="";
            document.querySelector("#badItemSprite2").classList="";
            document.querySelector("#goodItemContainer2").classList="";
            document.querySelector("#goodItemSprite2").classList="";
            document.querySelector("#goodItemContainer3").classList="";
            document.querySelector("#goodItemSprite3").classList="";
    
            //show winning screen
            document.querySelector("#game").classList.add("hidden");
            document.querySelector("#winning").classList.remove("hidden");

            //controlling the sounds
            winningSound1.play();
            bubbleSound1.pause();
            bubbleSound1.currentTime = 0;
            bubbleSound1.removeEventListener('ended', loopSound);

    
            //reset points and lives
            points= 0;
            lives= 3;
            document.querySelector("#liv1").classList.remove("hidden");
            document.querySelector("#liv2").classList.remove("hidden");
            document.querySelector("#liv3").classList.remove("hidden");
}

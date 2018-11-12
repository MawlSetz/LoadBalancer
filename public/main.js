//function pageInit() {
//   var eventListenerHandler = function (evt) {
//        //  this.addEventListener("click", startButtonClick, false);
//    }
//}

//window.addEventListener('click', eventListenerHandler, false);

var ballArray = [];
var isAccepting = false;
var currentCountMod2 = 0;


//EVENT LISTENERS 
var numberButton = document.getElementById("mod-one-number-button");
$(numberButton).on("click", getCount);
var secondsButton = document.getElementById("mod-one-seconds-button");
$(secondsButton).on("click", getSeconds);
var startButton = document.getElementById("start");
$(startButton).on("click", transStart);
var secondsButton2 = document.getElementById("mod-two-seconds-button");
$(secondsButton2).on("click", functName);
var modTwoMax = document.getElementById("mod-two-max-button");
console.log(modTwoMax);



function createBalls(ballcount) {
    for (var i = 0; i < ballcount; i++) {
        var myimage = new Image(15, 15);
        myimage.src = 'images/orangeball.png';
        myimage.id = 'ball' + i;
        myimage.className = 'resting ballz';
        ballArray.push(myimage.id);
        document.getElementById("ball-container").appendChild(myimage);
    }
}

function getCount() {
    var ballCount = window.document.getElementById("ballCount").value;
    createBalls(ballCount);
}

function getSeconds() {
    var milleseconds = window.document.getElementById("secondsInput").value;
    var seconds = milleseconds * 1000;
    console.log(seconds);
    //pass to createTimer(seconds) to start countdowns
    // createTimer(seconds);
    
}

function transStart(seconds) {
    //this changes the animation state of balls from resting to mod-one-mill
    for (var i = 0; i <= ballArray.length; i++) {
        var ballNumber = window.document.getElementById("ball" + i);
        if (ballNumber) {
            ballNumber.classList.remove("resting");
            ballNumber.classList.add("mod-one-mill");
        } 
    }
    loopThroughBalls(i);
}


function loopThroughBalls() {
    for (var i = 0; i <= ballArray.length; i++) {
        isNextAccepting(i);
    }
}


function apperance(i) {
    setTimeout(function() {
        var thisBall = window.document.getElementById(ballArray[i]);
        $(thisBall).toggleClass("mod-one-mill tube-animation");
        console.log(i);
    }, 1000 + i * 1500);
    console.log("modTwoMax is " + modTwoMax);
}

function isNextAccepting(i) {
    if(isAccepting == false){overflow(i)} 
    else { apperance(i)}
}

function overflow(i){
    setTimeout(function() {
        var thisBall = window.document.getElementById(ballArray[i]);
        $(thisBall).toggleClass("mod-one-mill to-overflow-animation");
    }, 1000 + i * 1500);
    currentCountMod2 += 1;
    compareCount(i);
}

function compareCount(i) {
    if (currentCountMod2 >= modTwoMax){
        //continue to next module
        returnFromOverflow(i);
        // console.log("the currentCountMod2 is greater or equal to modTwoMax");
    } else {
        //stay in resting position
        //var thisBall = window.document.getElementById(ballArray[i]);
        //$(thisBall).toggleClass("to-over-flow-animation resting");
         console.log("the currentCountMod2 is less than modTwoMax");
    }
}


// function returnFromOverflow(i){
//     setTimeout(function() {
//         var thisBall = window.document.getElementById(ballArray[i]);
//         $(thisBall).toggleClass("to-overflow-animation return-overflow-one");
//     }, 1000 + i *1500);
//     });

// }

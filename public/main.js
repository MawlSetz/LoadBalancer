// var seconds = 0;
// var el = document.getElementById('seconds-counter');

// function incrementSeconds() {
//     seconds += 1;
//     el.innerText = "You have been here for " + seconds + " seconds.";
// }

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//     var d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }

function timedText() {
    setTimeout(myTimeout1, 2000)
    setTimeout(myTimeout2, 4000)
    setTimeout(myTimeout3, 6000)
}
function myTimeout1() {
    document.getElementById("demo").innerHTML = "2 seconds";
}
function myTimeout2() {
    document.getElementById("demo").innerHTML = "4 seconds";
}
function myTimeout3() {
    document.getElementById("demo").innerHTML = "6 seconds";
}

// class Module1 {
//     constructor(seconds, width) {
//       this.seconds = seconds;
//       this.width = width;
//     }
//     // Getter
//     get area() {
//       return this.postSeconds();
//     }
//     // Method
//     postSeconds() {
//       return this.seconds * this.width;
//     }
//   }

//   const square = new Rectangle(10, 10);

//   console.log(square.area); // 100

var ball1 = null;

function timerOne() {
    //on click (in html)   
    //get timer length from input
    var seconds = document.getElementById("secondsInput").value;
    // *** TO DO ***
    // validate input -- see checkInp() below
    // function checkInp()
    // {
    //   var x=document.forms["myForm"]["age"].value;
    //   if (isNaN(x)) 
    //   {
    //     alert("Must input numbers");
    //     return false;
    //   }
    // }
    console.log(seconds);
    //change input to milleseconds
    var seconds = seconds * 1000;
    //pass seconds value to next function
    // function setSeconds(seconds)
    //timer starts
    // setTimeout(myTimeout1, x);

}
timerOne();


// function setSeconds(seconds) {
//with input from timerOne, set timer to move ball
// }

//needs to ONLY be called when user clicks submit
function getCount() {
    var ballCount = document.getElementById("ballCount").value;
    createBalls(ballCount);
    // addBalls(ballCount);

}
getCount();


function createBalls(ballCount) {
    console.log("Line97 " + ballCount);
    for (var i=0; i < ballCount; i++) {
        console.log(ballCount);
        var myImage = new Image(15, 15);
        myImage.src = '/assets/orangeBall.png';
        document.body.appendChild(myImage);
    }
}
createBalls();

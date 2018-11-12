//EVENT LISTENERS 
//$("mod-one-number-button").on("click", getCount);
console.log("made it to line 3")

function getCount() {
    console.log("made it to line 5");
}
var element = document.getElementById("mod-one-number-button")
$(element).click(function(){
    alert("The count button  was clicked.");
});
var element2 = document.getElementById("mod-one-seconds-button")
$(element2).click(function(){
    alert("The seconds button was clicked.");
});

function alerts() {
    setInterval(function() {
        alert("blah blah blah")
    }, 3000);
}
alerts();
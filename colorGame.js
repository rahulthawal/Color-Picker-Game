//list of Hardcoded Colors.
/*
var colors =  [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];
*/
//list of Random Generated Colors.
var colors =  generateRandomColors(6);

//All the squares in the HTML having class "square".
var squares = document.querySelectorAll(".square");

//Picks a random color from the hardcoded colors.
var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");

//When new colors buttons is clicked reset the colors.
var resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function(){
    //alert("Reset Button Clicked");
    colors = generateRandomColors(6);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    messageDisplay.textContent = ""
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }

})

colorDisplay.textContent = pickedColor;

for(var i = 0;  i< colors.length ;i++){
    squares[i].style.backgroundColor = colors[i];
    // Click Event for each Square.
    squares[i].addEventListener("click",function(){
        //Background Color for each Clicked Square.
        var clickedColor = this.style.backgroundColor;

        //Compare Clicked Color to Picked Color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            //Only change the reset button text to Play Again when you Win.
            resetButton.textContent = "Play Again?"
            changeColor(clickedColor);
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}
function changeColor(color){
    for(var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //Create a Colors Array
    var arr = [];

    for(var i=0; i<num; i++){
        arr.push(randomColor())
    }
    return arr;    
}

function randomColor(){
    //Pick a random 0 to 255 for "R".
    var r = Math.floor(Math.random() * 256);
    //Pick a random 0 to 255 for "G".
    var g = Math.floor(Math.random() * 256);
    //Pick a random 0 to 255 for "B".
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " +g+ ", " +b+ ")"
}
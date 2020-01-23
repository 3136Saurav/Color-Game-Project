var numSquares = 6;
var colors = colorGenerator(numSquares);
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");

var pickedColor = pickColor();

var colorText = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");

var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	colors = colorGenerator(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i])
			squares[i].style.backgroundColor = colors[i];
		else
			squares[i].style.display = "none";
	}
});

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares = 6;
	colors = colorGenerator(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	numSquares = 6;
	colors = colorGenerator(numSquares);
	pickedColor = pickColor();
	colorText.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
});

var h1 = document.querySelector("h1");

colorText.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			changeColors(clickedColor);
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

//Decides Winning Color
function pickColor(){
	var color = colors[Math.floor(Math.random() * colors.length)]; 
	return color;
}

function colorGenerator(num){
	var colorArray = [];
	for(var i=0; i<num; i++){
		colorArray.push(randomColor());
	}
	return colorArray;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
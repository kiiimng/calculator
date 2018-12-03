
let currentTextDisplay = document.getElementById("current-text");
let recordDisplay = document.getElementById("record");

let answer;

function buttonClicked(e){
	
		if (e.target.id === "clear") {
			clearAll();
			
		} 

		if (e.target.id === "equals") {
			pushDisplay(e)
			calculate();

		} 
		
		if (e.target.classList.contains("num")) {
			if (currentTextDisplay.textContent != "." && isNaN(currentTextDisplay.textContent)) {
				pushDisplay(e);
			}
			
			numberClicked(e);

		}

		if (e.target.classList.contains("math")) {
					
			mathClicked(e);

		
	}

		if (e.target.classList.contains("decimal")) {
			
				
				decimalClicked(e);
			}
			
		
		
		
}

let numpadWrapper = document.getElementById("numpad");
numpadWrapper.addEventListener("click", buttonClicked);

let clearButton = document.getElementById("clear");

function clearAll(){
	currentTextDisplay.textContent = "0";
	array = [];

}

function calculate(){
	answer = eval(currentTextDisplay.textContent) ;
	currentTextDisplay.textContent = answer;

	
}

function numberClicked(e) {
	console.log("number key")
	
	currentTextDisplay.textContent == "0" ?
	currentTextDisplay.textContent = e.target.textContent : currentTextDisplay.textContent += e.target.textContent;


}

function mathClicked(e){
	if (currentTextDisplay.textContent != "0" &&
		currentTextDisplay.textContent != "/" &&
		currentTextDisplay.textContent != "*" &&
		currentTextDisplay.textContent != "+" &&
		currentTextDisplay.textContent != "-" 
		) {
			pushDisplay(e)
			updateDisplay(e);
		}
	}
	
	
function updateDisplay(e){
	if (currentTextDisplay.textContent.substr(-1) != e.target.textContent)
	currentTextDisplay.textContent += e.target.textContent 

}

function decimalClicked(e) {
	//push display only if 


	if (
		currentTextDisplay.textContent == "/" ||
		currentTextDisplay.textContent == "*" ||
		currentTextDisplay.textContent == "+" ||
		currentTextDisplay.textContent == "-" 
		) {
	pushDisplay(e)
}
	if (currentTextDisplay.textContent != 0 || 
		currentTextDisplay.textContent != ".") {
let string = currentTextDisplay.textContent
			if (string.indexOf(".") == -1) {
		
		updateDisplay(e);
	
		}
	}

}

// function to save display and push to array
let array = [];
function pushDisplay(e) {
	array.push(currentTextDisplay.textContent);
	currentTextDisplay.textContent = "";
	// updateDisplay(e);
	console.log(array)
}
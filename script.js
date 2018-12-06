
let currentTextDisplay = document.getElementById("current-text");
let recordDisplay = document.getElementById("record");

let answer;

function buttonClicked(e){
	
		if (e.target.id === "clear") {
			clearAll();
			
		} 

		if (e.target.id === "equals") {
			if (array.length <= 1) {
				return;
			} else {
				pushDisplay(e);
			updateRecord();
			calculate();
			}
			
			

		} 
		
		if (e.target.classList.contains("num")) {
			if (currentTextDisplay.textContent != "." && isNaN(currentTextDisplay.textContent)) {
				pushDisplay(e);
			}
			
			numberClicked(e);
			updateRecord()


		}

		if (e.target.classList.contains("math")) {
			//if array length is less than or equal to 1 AND answer != null
			// then 	use array content as display record then math operator

			if (array.length <= 1 && answer) {
				console.log("answer" +answer)
				updateRecord();
				currentTextDisplay.textContent = e.target.textContent;
			}
			else {
				mathClicked(e);
				updateRecord();

			}
			
		
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
	recordDisplay.textContent ="";
	answer = null;
}

function calculate(){
	//updateRecord();
	
	if (array[1] == "+") {
		currentTextDisplay.textContent  = (sNumber(array[0]) + Number(array[2]));
	}

	if (array[1] == "-") {
		currentTextDisplay.textContent  = (Number(array[0]) - Number(array[2]));
	}
	if (array[1] == "*") {
		currentTextDisplay.textContent  = (Number(array[0]) * Number(array[2]));
	}
	if (array[1] == "/") {
		currentTextDisplay.textContent  = (Number(array[0]) / Number(array[2]));
	}

// array = [];
answer = currentTextDisplay.textContent;
array = array.slice(3);
array.unshift(answer);
if(  array.length > 2 ) {
	calculate();
};
console.log(answer);
console.log("newArray" + array);
	
}

function numberClicked(e) {
		
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
		else {
			currentTextDisplay.textContent = e.target.textContent
		}
	}
	
	
function updateDisplay(e){
	if (currentTextDisplay.textContent.substr(-1) != e.target.textContent)
	currentTextDisplay.textContent += e.target.textContent ;

}

function updateRecord(){
		recordDisplay.textContent = array.join("")
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
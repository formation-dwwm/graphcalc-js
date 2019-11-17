var userInput = "";
var screenData = "";
var currentMode = "calc";

function inputKeyPressed(touche) {
  // Un-focus our button to avoid event re-triggering from keyboard
  event.target.blur();

  userInput = userInput + touche;
  updateScreen();
  //  document.getElementById("calcul").innerText = userinput;
  // alert(userinput);
}

function clearKeyPressed() {
  // Un-focus our button to avoid event re-triggering from keyboard
  event.target.blur();

  screenData = userInput = ""; // userInput.substr(0,length);
  clearCanvas();
  updateScreen();
}

function backKeyPressed() {
  // Un-focus our button to avoid event re-triggering from keyboard
  event.target.blur();

  userInput = userInput.substr(0,userInput.length -1);
  screenData = "";
  updateScreen(); 
}

function equalKeyPressed() {
  // Un-focus our button to avoid event re-triggering from keyboard
  event.target.blur();

  // If we're in graph mode
  if (currentMode === "graph"){
    drawGraph();
  }
  // Otherwise, just do the maths
  else {
    calculate();
  }
  userInput= "";
}

function graphKeyPressed() {
    // Un-focus our button to avoid event re-triggering from keyboard
    event.target.blur();

    toggleMode();
}

function calculate() {
  try {
    screenData = eval(userInput);
  }
  catch {
    screenData = "Error";
  }
  
  // document.getElementById("resultat").innerText = screendata;
  // alert(resultat);

  // Update our display
  updateScreen();
}

/* Mocks */
/* "fausses fonctions" */
function updateScreen(){
  var $divInput = document.querySelector(".input-view");
  var $divResult = document.querySelector(".text-result");
  
  var finalUserInput = userInput;
  if (currentMode === "graph"){
    finalUserInput = 'y=' + finalUserInput;
  }

  $divInput.textContent = finalUserInput;
  $divResult.textContent = screenData;

  // Re-insert our cursor if the user input is empty
  if (userInput.length === 0)
  {
    $divInput.innerHTML = '<span id="cursor"><img src="assets/heart-removebg-preview.png"></span>';
  }
  // text color whithin value
  // toggle color classes on the element $divResult 
  else {  
    $divResult.classList.toggle("text-result-neg", screenData < 0);
    $divResult.classList.toggle("text-result-zero", screenData == 0);
    $divResult.classList.toggle("text-result-pos", screenData > 0);
  }
  // console.warn("We need to implement updateScreen")
}

/*
document.getElementById("idDeL'element")

Cette fonction récupère l'élement HTML avec l'id correspondant
Ce qui nous permet de le manipuler
*/

var cursor = true;
var speed = 300;

function toggleCursor() {
  try {
    if(cursor) {
      document.getElementById('cursor').style.opacity = 0;
      cursor = false;
    }
    else {
      document.getElementById('cursor').style.opacity = 1;
      cursor = true;
    }
  }
  catch {
    // Suppress exception, not relevant
  }
}

setInterval(toggleCursor, speed);
updateScreen();
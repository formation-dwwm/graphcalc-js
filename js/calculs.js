var userInput = "";
var screenData = "";

function inputKeyPressed(touche) {
  userInput = userInput + touche;
  updateScreen();
  //  document.getElementById("calcul").innerText = userinput;
  // alert(userinput);
}

function clearKeyPressed() {
  screenData = userInput = ""; // userInput.substr(0,length);
  updateScreen();
}

function backKeyPressed() {
  userInput = userInput.substr(0,userInput.length -1);
  screenData = "";
  updateScreen(); 
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
  
  $divInput.textContent = userInput;
  $divResult.textContent = screenData;

  // Re-insert our cursor if the user input is empty
  if (userInput.length === 0)
  {
    $divInput.innerHTML = '<span id="cursor">|</span>';
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

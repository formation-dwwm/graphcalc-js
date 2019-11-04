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
  var $divPrevious = document.querySelector(".previous-operand");
  var $divCurrent = document.querySelector(".current-operand");
  
  $divPrevious.textContent = userInput;
  $divCurrent.textContent = screenData;
  // console.warn("We need to implement updateScreen")
}

/*
document.getElementById("idDeL'element")

Cette fonction récupère l'élement HTML avec l'id correspondant
Ce qui nous permet de le manipuler
*/

var userInput = "";
var screenData = "";

function inputKeyPressed(touche) {
  userInput = userInput + touche;
  
  //  document.getElementById("calcul").innerText = userinput;
  // alert(userinput);
}

function clearKeyPressed() {
  updateScreen()
}

function backKeyPressed() {
  
}


function calculate() {
  screenData = eval(userInput);
  
  // document.getElementById("resultat").innerText = screendata;
  // alert(resultat);
}

/* Mocks */
/* "fausses fonctions" */
function updateScreen(){
  console.warn("We need to implement updateScreen")
}

document.getElementById("idDeL'element")

Cette fonction récupère l'élement HTML avec l'id correspondant
Ce qui nous permet de le manipuler
*/

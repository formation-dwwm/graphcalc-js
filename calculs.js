var calcul="";

function appuiTouche(touche) {
  calcul=calcul+touche;
  
  document.getElementById("calcul").innerText = calcul;
  // alert(calcul);
}

function egal() {
  var resultat=eval(calcul);
  
  document.getElementById("resultat").innerText = resultat;
  // alert(resultat);
}

/*

document.getElementById("idDeL'element")

Cette fonction récupère l'élement HTML avec l'id correspondant
Ce qui nous permet de le manipuler
*/

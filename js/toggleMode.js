const canvasElement = document.getElementById("canvas");

function toggleMode() {

    var className = canvasElement.getAttribute("class");
    if(className=="hidden") {
        canvasElement.className = "";
        //GROS HACK
        currentMode = "graph";
        makeABoard();
        clearKeyPressed();
    }
    else{
        canvasElement.className = "hidden";
        //GROS HACK
        currentMode = "calc";
    }
  }


const canvasElement = document.getElementById("canvas");

function toggleMode() {

    var className = canvasElement.getAttribute("class");
    if(className=="hidden") {
        canvasElement.className = "";
        //GROS HACK
        currentMode = "graph";
    }
    else{
        canvasElement.className = "hidden";
        //GROS HACK
        currentMode = "calc";
    }
  }


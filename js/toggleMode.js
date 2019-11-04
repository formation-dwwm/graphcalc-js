const canvasElement = document.getElementById("canvas");

function toggleMode() {

    var className = canvasElement.getAttribute("class");
    if(className=="hidden") {
        canvasElement.className = "";
    }
    else{
        canvasElement.className = "hidden";
    }
  }


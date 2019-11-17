const canvasElement = document.getElementById("canvas");
const btnGraphElement = document.getElementById("btn-graph");

function toggleMode() {

    if(canvasElement.classList.contains('hidden')){
        canvasElement.classList.remove('hidden');
        currentMode = "graph";
        makeABoard();
    }
    else
    {
        canvasElement.classList.add('hidden');
        currentMode = "calc";
    }
    clearKeyPressed();
    // clearCanvas();
    colorBtnGraph();
  }

function colorBtnGraph () {
    if (btnGraphElement.classList.contains('graph-active')) {
        btnGraphElement.classList.remove('graph-active');
    }
    else 
    {
        btnGraphElement.classList.add('graph-active');
    }
}
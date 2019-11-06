var xValues = [];

var screenGraph = "y= ";

var scale = {
    x: 20,
    y: 20
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

//modifier les valeur apres pissétou

const canvasSize = {
    x: canvas.clientWidth,
    y: canvas.clientHeight
};
const startX = -2,
      endX = 10,
      stepX = 0.1;

var midX = canvasSize.x / 2;
var midY = canvasSize.y / 2;

udpateCanvasSize = function () {
    canvasSize.x = canvas.clientWidth;
    canvasSize.y = canvas.clientHeight;
    midX = canvasSize.x / 2;
    midY = canvasSize.y / 2;
    makeAxes();
}

//A mettre au moment du enter en mode graph

makeABoard = function () {
    udpateCanvasSize();
    xValues = [];
    for (let i = startX; i <= endX; i+=stepX) {
        xValues.push(i);
    };
    clearCanvas();
    makeAxes();
};

makeAxes = function () {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, midY);
    ctx.lineTo(canvasSize.x, midY);
    ctx.moveTo(midX, 0);
    ctx.lineTo(midX, canvasSize.y);
    ctx.stroke();
};
// = press run this function

drawGraph = function () {

    var boolInfinity= 0;

    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 1;

    const points = [];

    // parcours des valeurs x
    for (i=0; i<xValues.length; i++) {
        var x= xValues[i];

        //Please correct this...
        if(Math.abs(x - 1e-5) < 0){
            x = 0;
        }
        
        // evalue la fonction y=
        var evalResult = eval(userInput);
        
        // recalcul / echelle
        var posx = x * scale.x;
        var posy = evalResult * scale.y * (-1);

        const finalX = posx + midX;
        const finalY = posy + midY;

        points.push({
            x,
            y: evalResult,
            finalX,
            finalY
        });
    }
    console.table(points);

    for (i=0; i<points.length; i++) {
        const point = points[i];
        // if (evalResult===Infinity) {
        // test sur Number.MAX_SAFE_INTEGER pour lever issue de tracé intempestif
        // ex: fonction y=1/x
        if(Math.abs(points.finalY) > Number.MAX_SAFE_INTEGER){
            // tracé intermédiaire
            // booleen pour nouveau beginPath
            ctx.stroke();
            boolInfinity= 1;
            // nouvelle itération de la boucle
            continue;
        }
        // début de portion de courbe
        if ((point.x===startX) || (boolInfinity)){ 
            ctx.beginPath();
            ctx.moveTo(point.finalX, point.finalY); 
            boolInfinity= 0;
        }
        else if (! boolInfinity){
            ctx.lineTo(point.finalX, point.finalY);
        }
        
        // tracé final
        if (i==(points.length-1)) {
            ctx.stroke();
        }
    }
};

// drawAxes = function () {

// }

drawUserInput = function () {
    ctx.font = '10px arial';
    screenGraph += userInput;
    ctx.fillText = (screenGraph, 10, canvasSize.y - 10);
    ctx.strokeText(screenGraph, 200, 290);
}

//A utilisé pour Clear le canvas pas pour le div

function clearCanvas() {
    userInput = "";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeText(" ", 200, 290);
    makeAxes();

   // updateScreen();
    // $divInput = document.querySelector(".input-view");
    // $divInput.textContent = screenGraph + userInput;
};

window.onload = makeABoard;
window.onresize = udpateCanvasSize;
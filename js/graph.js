// GLOBAL

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var xValues = [];
var screenGraph = "y= ";
var scale = {
    x: 20,
    y: 20
}

const canvasSize = {
    x: canvas.clientWidth,
    y: canvas.clientHeight
};
const startX = -10,
      endX = 10,
      stepX = 0.1;

var midX = canvasSize.x / 2;
var midY = canvasSize.y / 2;

// hard values of x whereas generated float values !
var tabX= [ -10,-9.9,-9.8,-9.7,-9.6,-9.5,-9.4,-9.3,-9.2,-9.1,
             -9,-8.9,-8.8,-8.7,-8.6,-8.5,-8.4,-8.3,-8.2,-8.1,
             -8,-7.9,-7.8,-7.7,-7.6,-7.5,-7.4,-7.3,-7.2,-7.1,
             -7,-6.9,-6.8,-6.7,-6.6,-6.5,-6.4,-6.3,-6.2,-6.1,
             -6,-5.9,-5.8,-5.7,-5.6,-5.5,-5.4,-5.3,-5.2,-5.1,
             -5,-4.9,-4.8,-4.7,-4.6,-4.5,-4.4,-4.3,-4.2,-4.1,
             -4,-3.9,-3.8,-3.7,-3.6,-3.5,-3.4,-3.3,-3.2,-3.1,
             -3,-2.9,-2.8,-2.7,-2.6,-2.5,-2.4,-2.3,-2.2,-2.1,
             -2,-1.9,-1.8,-1.7,-1.6,-1.5,-1.4,-1.3,-1.2,-1.1,
             -1,-0.9,-0.8,-0.7,-0.6,-0.5,-0.4,-0.3,-0.2,-0.1,
              0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,
              1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,
              2,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,
              3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,
              4,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,
              5,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,
              6,6.1,6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,
              7,7.1,7.2,7.3,7.4,7.5,7.6,7.7,7.8,7.9,
              8,8.1,8.2,8.3,8.4,8.5,8.6,8.7,8.8,8.9,
              9,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,
             10
];

// MAIN

udpateCanvasSize = function () {
    canvasSize.x = canvas.clientWidth;
    canvasSize.y = canvas.clientHeight;
    midX = canvasSize.x / 2;
    midY = canvasSize.y / 2;
    makeAxes();
}

makeABoard = function () {

    udpateCanvasSize();
    // xValues = [];
    // for (let i = startX; i <= endX; i+=stepX) {
        // xValues.push(i);
    // };
    clearCanvas();
}

makeAxes = function () {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, midY);
    ctx.lineTo(canvasSize.x, midY);
    ctx.moveTo(midX, 0);
    ctx.lineTo(midX, canvasSize.y);
    ctx.stroke();
}
// = press run this function

drawGraph = function () {

    var boolInfinity= 0;
    clearCanvas();

    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 1;

    const points = [];

    // parcours des valeurs x
    // for (i=0; i<xValues.length; i++) {
        // var x= xValues[i];

    for (i=0; i<tabX.length; i++) {
        var x= tabX[i];
    
        //Please correct this...
        // if(Math.abs(x - 1e-5) < 0){
        //     x = 0;
        // }
        
        // evaluate y
        var evalResult = eval(userInput);
        
        // set position regarding canvas
        var posX = x * scale.x;
        var posY = evalResult * scale.y * (-1);

        const finalX = posX + midX;
        const finalY = posY + midY;

        // store results
        points.push({
            x,
            y: evalResult,
            finalX,
            finalY
        });
    }
    // debug log
    // console.table(points);

    // plot the points and stroke
    for (i=0; i<points.length; i++) {
        const onePoint = points[i];

        // specific issue
        if (onePoint.y===Infinity) {
        // test sur Number.MAX_SAFE_INTEGER pour lever issue de tracé intempestif
        // ex: fonction y=1/x
        // if(Math.abs(points.finalY) > Number.MAX_SAFE_INTEGER){
            // tracé intermédiaire
            // booleen pour nouveau beginPath
            ctx.stroke();
            boolInfinity= 1;
            // nouvelle itération de la boucle
            continue;
        }
        // start path
        if ((onePoint.x===startX) || (boolInfinity)){ 
            ctx.beginPath();
            ctx.moveTo(onePoint.finalX, onePoint.finalY); 
            boolInfinity= 0;
        }
        // plot
        else if (! boolInfinity){
            ctx.lineTo(onePoint.finalX, onePoint.finalY);
        }
        
        // final stroke when path ends
        if (i==(points.length-1)) {
            ctx.stroke();
        }
    }
}

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
}

window.onload = makeABoard;
window.onresize = udpateCanvasSize;
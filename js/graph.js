var xValues = [];

var screenGraph = "y= ";

var zoom = {
    x: 1,
    y: 1
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

//modifier les valeur apres pissétou

const canvasSize = {
    x: canvas.clientHeight,
    y: canvas.clientWidth
};

    var midx = canvasSize.x /2 ;
    var midy = canvasSize.y /2 ;

udpateCanvasSize = function(){
    canvasSize.x = canvas.clientHeight;
    canvasSize.y = canvas.clientWidth;
    midx = canvasSize.x /2 ;
    midy = canvasSize.y /2 ;
    makeAxes();
}

//A mettre au moment du enter en mode graph

makeABoard = function () {
    udpateCanvasSize();
    for (let i = -20; i <= 20; i++) {
        xValues.push(i);
    };
    clearCanvas();
    makeAxes();
};

makeAxes = function () {
    ctx.strokeStyle  = "#000000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, midx);
    ctx.lineTo(canvasSize.y, midx);
    ctx.moveTo(midy, 0);
    ctx.lineTo(midy, canvasSize.x);
    ctx.stroke();
};
// = press run this function

drawGraph = function () {
    ctx.beginPath();
    ctx.strokeStyle  = "#ff0000";
    ctx.lineWidth = 1;
    xValues.forEach(function (x) {
        var evalResult = eval(userInput);
        var posx = x * zoom.x; 
        var posy = evalResult * zoom.y;
        posy = posy * -zoom.y;
        if (x === -10) {
            ctx.moveTo(midy + posy, posx + midx);
        } else {
            ctx.lineTo(midy + posy, posx + midx);
        }
    });
    ctx.stroke();
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

    updateScreen();
    // $divInput = document.querySelector(".input-view");
    // $divInput.textContent = screenGraph + userInput;
};

window.onload = makeABoard;
window.onresize = udpateCanvasSize;
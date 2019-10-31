var canvas = document.querySelector('canvas');

var ctx = canvas.getContext('2d');

var x = [];

//modifier les valeur apres pissétou

const canvasSize = {
    x: document.body.scrollHeight,
    y: document.body.scrollWidth
};

ctx.fillStyle = "#000000";

//a mettre au moment du enter en mode graph

makeABoard = function () {
    for (let i = -10; i <= 10; i++) {
       x.push (i);
    };
};

drawGraph = function (inp){
    x.forEach(inp);
        var y = eval(inp);
        ctx.moveTo(y);
    };

// updateAff (){

// }
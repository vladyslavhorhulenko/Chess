function drawFigure(side, name) {
    var str = side + name;
    var image = `<img id="figure" src="images/${str}.png"`;
    return image;
}

var figures = ["tura", "horse", "oficer", "ferz", "king", "oficer", "horse", "tura", "infantry"];
var n = 8;
$(document).ready(function () {
    for (var i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            if (i == 1) {
                for (var j = 1; j <= n; j++) {
                    switch (j % 2) {
                        case 0:
                            var square = $(`<div class="black">${drawFigure("white", figures[j-1])}</div >`);
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $(`<div class="white">${drawFigure("white", figures[j-1])}</div>`);
                            $(square).prependTo('.gameField');
                            break;
                    }
                }
            }
            else if (i == n - 1) {
                for (var j = 1; j <= n; j++) {
                    switch (j % 2) {
                        case 0:
                            var square = $(`<div class="black">${drawFigure("black", figures[n])}</div >`);
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $(`<div class="white">${drawFigure("black", figures[n])}</div>`);
                            $(square).prependTo('.gameField');
                            break;
                    }
                }
            
            }
            else {
                for (var j = 1; j <= n; j++) {
                    switch (j % 2) {
                        case 0:
                            var square = $(`<div class="black"></div >`);
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $('<div class="white"></div>');
                            $(square).prependTo('.gameField');
                            break;
                    }
                }
            }
        }
        if (i % 2 == 0) {
            if (i == n) {
                for (var j = 1; j <= n; j++) {
                    switch (j % 2) {
                        case 0:
                            var square = $(`<div class="white">${drawFigure("black", figures[j - 1])}</div >`);
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $(`<div class="black">${drawFigure("black", figures[j - 1])}</div>`);
                            $(square).prependTo('.gameField');
                            break;
                    }
                }
            }
            else if (i == 2) {
                for (var j = 1; j <= n; j++) {
                    switch (j % 2) {
                        case 0:
                            var square = $(`<div class="white">${drawFigure("white", figures[n])}</div >`);
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $(`<div class="black">${drawFigure("white", figures[n])}</div>`);
                            $(square).prependTo('.gameField');
                            break;
                    }
                }
            }
            else {
                for (var j = 1; j <= n; j++) {
                    switch (j % 2) {
                        case 0:
                            var square = $('<div class="white"></div>');
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $('<div class="black"></div>');
                            $(square).prependTo('.gameField');
                            break;
                    }
                
                }
            }
        
        }
       
    }
    
    
})

var figureDrag = document.getElementById('figure');
/*figureDrag.onmousedown = function (e) {
    figureDrag.ondragstart = function () {
        return false;
    };
    figureDrag.style.position = 'absolute';
    moveAt(e);
    document.body.appendChild(figureDrag);
    figureDrag.style.zIndex = 1000;
    function moveAt(e) {
        figureDrag.style.left = e.pageX - figureDrag.offsetWidth / 2 + 'px';
        figureDrag.style.top = e.pageY - figureDrag.offsetHeight / 2 + 'px';
    }
    document.onmousemove = function (e) {
        moveAt(e);
    }
    figureDrag.onmouseup = function () {
        document.onmousemove = null;
        figureDrag.onmouseup = null;
    }
}*/





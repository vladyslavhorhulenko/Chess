function drawFigure(countFigure, side, name) {
    var str = side + name;
    var image = `<img id="figure${countFigure}" class="draggable" src="images/${str}.png">`;
    return image;
}

class Figure{
    constructor(side, name, coord) {
        this.side = side;
        this.name = name;
        this.coord = coord;
    }
}

function getSide(elem) {
    var src = elem.getAttribute("src");
    src = src.substring(7, src.length - 4);
    var side = src.substring(0, 5);
    return side;
}

function getName(elem) {
    var src = elem.getAttribute("src");
    src = src.substring(7, src.length - 4);
    var name = src.substring(5, src.length);
    return name;
}

function changeAvailible(side) {
    var figures = document.getElementsByTagName("img");
    for (var i = 0; i < figures.length; i++) {
        var sideElem = getSide(figures[i]);
        if (sideElem == side) {
            if (figures[i].parentElement.getAttribute("class").indexOf("white") != -1) {
                figures[i].parentElement.style.boxShadow = 'inset 0 0 20px blue';
            }
            else
                figures[i].parentElement.style.boxShadow = 'inset 0 0 20px red';
        }
        else
            figures[i].parentElement.style.boxShadow = '';
    }
}
function someAvailibiles(elems) {
    var figures = document.getElementsByTagName("img");
    for (var i = 0; i < figures.length; i++) {
        for (var j = 0; j < elems.length; j++) {
            if (figures[i].getAttribute("id") == elems[j]) {
                if (figures[i].parentElement.getAttribute("class").indexOf("white") != -1) {
                    figures[i].parentElement.style.boxShadow = 'inset 0 0 20px blue';
                }
                else
                    figures[i].parentElement.style.boxShadow = 'inset 0 0 20px red';
                break;
            }
            else
                figures[i].parentElement.style.boxShadow = '';

        }
    }
}
/*function onlyKing(side) {
    if (side == 'white') {
        var king = document.getElementById("figure4");
        king = king.parentElement;
    }
    else {
        var king = document.getElementById("figure28");
        king = king.parentElement;
    }
    var allCells = document.getElementsByTagName("img");
    allCells.style.boxShadow = '';
    king.style.boxShadow = 'inset 0 0 15px black';
}*/

var figures = ["tura", "horse", "oficer", "king", "ferz", "oficer", "horse", "tura", "infantry"];
var n = 8;
var countCell = 1;
var countFigure = 1;
var availible = 'white';
var shachwhite = false;
var shachblack = false;
var shachElem;
var scoreWhite = 0;
var scoreBlack = 0;
    
function createTable() {
    shachElem = 0;
    document.querySelector(".gameField").innerHTML = '';
    countFigure = 1;
    shachwhite = false;
    shachblack = false;
    availible = 'white';
    for (var i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            if (i == 1) {
                for (var j = 1; j <= n; j++) {
                    switch (j % 2) {
                        case 0:
                            var square = $(`<div id="${i} ${j}" class="black draggableParent">${drawFigure(countFigure, "white", figures[j - 1])}</div >`);
                            var figure = new Figure("white", `${figures[j - 1]}`, countFigure);
                            countCell++;
                            countFigure++;
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $(`<div id="${i} ${j}" class="white draggableParent">${drawFigure(countFigure, "white", figures[j - 1])}</div>`);
                            var figure = new Figure("white", `${figures[j - 1]}`, countFigure);
                            countCell++;
                            countFigure++;
                            $(square).prependTo('.gameField');
                            break;
                    }
                }
            }
            else if (i == n - 1) {
                for (var j = 1; j <= n; j++) {
                    switch (j % 2) {
                        case 0:
                            var square = $(`<div id="${i} ${j}" class="black draggableParent">${drawFigure(countFigure, "black", figures[n])}</div >`);
                            var figure = new Figure("black", `${figures[n]}`, countFigure);
                            countCell++;
                            countFigure++;
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $(`<div id="${i} ${j}" class="white draggableParent">${drawFigure(countFigure, "black", figures[n])}</div>`);
                            var figure = new Figure("black", `${figures[n]}`, countFigure);
                            countCell++;
                            countFigure++;
                            $(square).prependTo('.gameField');
                            break;
                    }
                }

            }
            else {
                for (var j = 1; j <= n; j++) {
                    switch (j % 2) {
                        case 0:
                            var square = $(`<div id="${i} ${j}" class="black droppable"></div >`);
                            countCell++;
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $(`<div id="${i} ${j}" class="white droppable"></div>`);
                            countCell++;
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
                            var square = $(`<div id="${i} ${j}" class="white draggableParent">${drawFigure(countFigure, "black", figures[j - 1])}</div >`);
                            var figure = new Figure("black", `${figures[j - 1]}`, countFigure);
                            countCell++;
                            countFigure++;
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $(`<div id="${i} ${j}" class="black draggableParent">${drawFigure(countFigure, "black", figures[j - 1])}</div>`);
                            var figure = new Figure("black", `${figures[j - 1]}`, countFigure);
                            countCell++;
                            countFigure++;
                            $(square).prependTo('.gameField');
                            break;
                    }
                }
            }
            else if (i == 2) {
                for (var j = 1; j <= n; j++) {
                    switch (j % 2) {
                        case 0:
                            var square = $(`<div id="${i} ${j}" class="white draggableParent">${drawFigure(countFigure, "white", figures[n])}</div >`);
                            var figure = new Figure("white", `${figures[n]}`, countFigure);
                            countCell++;
                            countFigure++;
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $(`<div id="${i} ${j}" class="black draggableParent">${drawFigure(countFigure, "white", figures[n])}</div>`);
                            var figure = new Figure("white", `${figures[n]}`, countFigure);
                            countCell++;
                            countFigure++;
                            $(square).prependTo('.gameField');
                            break;
                    }
                }
            }
            else {
                for (var j = 1; j <= n; j++) {
                    switch (j % 2) {
                        case 0:
                            var square = $(`<div id="${i} ${j}" class="white droppable"></div>`);
                            countCell++;
                            $(square).prependTo('.gameField');
                            break;
                        default:
                            var square = $(`<div id="${i} ${j}" class="black droppable"></div>`);
                            countCell++;
                            $(square).prependTo('.gameField');
                            break;
                    }

                }
            }

        }

    }
    changeAvailible(availible);
}

$(document).ready(function () {
    createTable();
})


var dragFromElement;
var figureDrag = {};
document.querySelector("div.gameField").onmousedown = function (e) {
    var elem = e.target.closest(".draggable");
    if (!elem) {
        return;
    }
    var side = getSide(elem);
    if (side != availible) {
        return;
    }
    switch (side) {
        case 'black':
            var shachSide = shachblack;
            break;
        case 'white':
            var shachSide = shachwhite;
            break;
    }
    if (shachSide == true) {
        var elemsKillShach = isPossibleKillShach(shachElem);
        if (elemsKillShach != null) {
            var elemsKillShachIds = [elemsKillShach.length + 1];

            for (var i = 0; i < elemsKillShach.length; i++) {
                elemsKillShachIds[i] = elemsKillShach[i].getAttribute("id");
            }
        }
        else var elemsKillShachIds = [];
        var cellsCloseShach = isPossibleCloseShach(shachElem);
        if (cellsCloseShach != null) {
            var elemsCloseShach = getElemsCloseShach(cellsCloseShach);
        }
        if (elemsCloseShach != null) {
            var elemsCloseShachIds = [elemsCloseShach.length];
            for (var i = 0; i < elemsCloseShach.length; i++) {
                elemsCloseShachIds[i] = elemsCloseShach[i].getAttribute("id");
            }
        }
        else var elemsCloseShachIds = [];
        
        if (elemsKillShachIds != null || elemsCloseShachIds != null) {
            switch (side) {
                case 'black':
                    if (elemsKillShachIds.indexOf(elem.getAttribute("id")) == -1 && elemsCloseShachIds.indexOf(elem.getAttribute("id")) == -1 && elem.getAttribute("id") != "figure28") {
                        return;
                    }
                    break;
                case 'white':
                    if (elemsKillShachIds.indexOf(elem.getAttribute("id")) == -1 && elemsCloseShachIds.indexOf(elem.getAttribute("id")) == -1 && elem.getAttribute("id") != "figure4") {
                        return;
                    }
                    break;
            }
        }
            else {
                switch (side) {
                    case 'black':
                        if (elem.getAttribute("id") != 'figure28') {
                            return;
                        }
                        break;
                    case 'white':
                        if (elem.getAttribute("id") != 'figure4') {
                            return;
                        }
                        break;
                }
            }

    }
    dragFromElement = e.target.closest(".draggableParent");
    figureDrag.elem = elem;
    figureDrag.downX = e.pageX;
    figureDrag.downY = e.pageY;
}
document.querySelector("div.gameField").onmousemove = function (e) {
    if (!figureDrag.elem) return;
    if (!figureDrag.avatar) {
        var moveX = e.pageX - figureDrag.downX;
        var moveY = e.pageY - figureDrag.downY;
        if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
            return;
        }

        figureDrag.avatar = createAvatar(e);
        if (!figureDrag.avatar) {
            figureDrag = {};
            return;
        }
        var coords = getCoords(figureDrag.avatar);
        figureDrag.shiftX = figureDrag.downX - coords.left;
        figureDrag.shiftY = figureDrag.downY - coords.top;
        startDrag(e);
    }
    if ((e.clientX <= 730 && e.clientX >= 100) && (e.clientY <= 650 && e.clientY >= 70)) {
            figureDrag.avatar.style.left = e.pageX - figureDrag.shiftX + 'px';
        figureDrag.avatar.style.top = e.pageY - figureDrag.shiftY + 'px';
        
    }
    
    return false;
}

document.querySelector("div.gameField").ondragstart = function () {
    return false;
};

document.querySelector("div.gameField").onmouseup = function (e) {
    if (figureDrag.avatar) {
        finishDrag(e);
    }
    figureDrag = {};
}

function finishDrag(e) {
    var dropElement = findDroppable(e);
    if (dropElement == null) {
        figureDrag.avatar.rollback();
        return;
    }
    else {
        if (isPossibleDrop(figureDrag.elem, dragFromElement, dropElement) == true) {
            var clas = dragFromElement.getAttribute("class");
            var idCell = dragFromElement.getAttribute("id");

            if (clas.indexOf('white') > -1) {
                $(dragFromElement).replaceWith(`<div id="${idCell}" class="white droppable"></div>`);
            }
            else {
                $(dragFromElement).replaceWith(`<div id="${idCell}" class="black droppable"></div>`);
            }
            var changeElem = dropElement;
            clas = changeElem.getAttribute("class");
            idCell = changeElem.getAttribute("id");
            if (clas.indexOf('white') > -1) clas = 'white';
            else clas = 'black';
            var id = figureDrag.elem.getAttribute("id");
            var side = getSide(figureDrag.elem);
            var name = getName(figureDrag.elem);
            $(`#${id}`).replaceWith(null);
            id = id.substring(6, 8);
            if (name == 'infantry') {
                if (side == 'black' && changeElem.getAttribute("id").substring(0, 1) == '1') {
                    $(changeElem).replaceWith(`<div id="${idCell}"class="${clas} draggableParent">${drawFigure(id, side, 'ferz')}</div>`);
                }
                else
                    if (side == 'white' && changeElem.getAttribute("id").substring(0, 1) == '8') {
                        $(changeElem).replaceWith(`<div id="${idCell}"class="${clas} draggableParent">${drawFigure(id, side, 'ferz')}</div>`);
                    }
                    else
                        $(changeElem).replaceWith(`<div id="${idCell}"class="${clas} draggableParent">${drawFigure(id, side, figures[figures.indexOf(name)])}</div>`);
            }
            else
                $(changeElem).replaceWith(`<div id="${idCell}"class="${clas} draggableParent">${drawFigure(id, side, figures[figures.indexOf(name)])}</div>`);
            figureDrag = {};
            if (availible == 'white') {
                availible = 'black';
            }
            else
                availible = 'white';

            
            switch (availible) {
                case 'black':
                    var shachAvailible = shachblack;
                    break;
                case 'white':
                    var shachAvailible = shachwhite;
                    break;
            }

            if (isShach(availible) == true) {
                var elemsKillShach = isPossibleKillShach(shachElem);
                if (elemsKillShach != null) {
                    var elemsKillShachIds = [elemsKillShach.length + 1];

                    for (var i = 0; i < elemsKillShach.length; i++) {
                        elemsKillShachIds[i] = elemsKillShach[i].getAttribute("id");
                    }
                }
                else var elemsKillShachIds = [];
                var cellsCloseShach = isPossibleCloseShach(shachElem);
                if (cellsCloseShach != null) {
                    var elemsCloseShach = getElemsCloseShach(cellsCloseShach);
                }
                if (elemsCloseShach != null) {
                    var elemsCloseShachIds = [elemsCloseShach.length];
                    for (var i = 0; i < elemsCloseShach.length; i++) {
                        elemsCloseShachIds[i] = elemsCloseShach[i].getAttribute("id");
                    }
                }
                else var elemsCloseShachIds = [];
                var availibleElems = [elemsKillShachIds.length + elemsCloseShachIds.length + 1];
                for (var i = 0; i < elemsKillShachIds.length; i++) {
                    availibleElems[i] = elemsKillShachIds[i];
                }
                for (var i = elemsKillShachIds.length; i < elemsCloseShachIds.length; i++) {
                    availibleElems[i] = elemsCloseShachIds[i];
                }
                switch (side) {
                    case 'black':
                        availibleElems[availibleElems.length] = 'figure4';
                        break;
                    case 'white':
                        availibleElems[availibleElems.length] = 'figure28';
                        break;
                }
                someAvailibiles(availibleElems);

                switch (availible) {
                    case 'black':
                        shachblack = true;
                        break;
                    case 'white':
                        shachwhite = true;
                        break;
                }
            }
            else {
                changeAvailible(availible);
                shachwhite = false;
                shachblack = false;

            }
        }
        else {
                figureDrag.avatar.rollback();
                return;
        }
        
    }
    
    return;
}

function isShach(side) {
    if (side == 'white') {
        var king = document.getElementById("figure4");
        king = king.parentElement;
    }
    else {
        var king = document.getElementById("figure28");
        king = king.parentElement;
    }
    var allFigures = document.getElementsByTagName("img");
    for (var i = 0; i < allFigures.length; i++) {
        if (getSide(allFigures[i]) != side) {
            dragFromElement = allFigures[i].parentElement;
            if (isPossibleDrop(allFigures[i], dragFromElement, king) == true) {
                shachElem = dragFromElement;
                if (side == 'white') {
                    if (isMat(side) == true) {
                        alert('Игра завершена, шах и мат белым');
                        scoreBlack += 1;
                        document.querySelector(".scores-black").innerHTML = scoreBlack;
                        createTable();
                        return;
                    }
                    else
                        alert('Шах белым');
                }
                else {
                    if (isMat(side) == true) {
                        alert('Игра завершена, шах и мат черным');
                        scoreWhite += 1;
                        document.querySelector(".scores-white").innerHTML = scoreWhite;
                        createTable();
                        return;
                    }
                    else
                        alert('Шах черным');
                }
                return true;
            }
        }
    }
    return false;
}

function isMat(side) {
    var elemsKillShach = isPossibleKillShach(shachElem);
    if (elemsKillShach != null) {
        var elemsKillShachIds = [elemsKillShach.length + 1];

        for (var i = 0; i < elemsKillShach.length; i++) {
            elemsKillShachIds[i] = elemsKillShach[i].getAttribute("id");
        }
    }
    else var elemsKillShachIds = [];
    var cellsCloseShach = isPossibleCloseShach(shachElem);
    if (cellsCloseShach != null) {
        var elemsCloseShach = getElemsCloseShach(cellsCloseShach);
    }
    if (elemsCloseShach != null) {
        var elemsCloseShachIds = [elemsCloseShach.length];
        for (var i = 0; i < elemsCloseShach.length; i++) {
            elemsCloseShachIds[i] = elemsCloseShach[i].getAttribute("id");
        }
    }
    else var elemsCloseShachIds = [];
    if (elemsKillShachIds.length == 0 && elemsCloseShachIds.length == 0) {
        switch (side) {
            case 'black':
                var king = document.getElementById("figure28");
                var kingCoords = king.getAttribute("id");
                break;
            case 'white':
                var king = document.getElementById("figure4");
                var kingCoords = king.getAttribute("id");
                break;
        }
        var kingPossibleCells = [];
        var kingRow = kingCoords.substring(0, 1);
        var kingCol = kingCoords.substring(2, 3);
        for (var i = parseInt(kingRow) + parseInt(1); i >= parseInt(kingRow) - parseInt(1); i--) {
            for (var i = parseInt(kingCol) + parseInt(1); i >= parseInt(kingCol) - parseInt(1); i--) {
                if (i != kingRow && j != kingCol) {
                    kingPossibleCells[kingPossibleCells.length] = `${i} ${j}`;
                }
            }
        }
        var mat = true;
        for (var i = 0; i < kingPossibleCells.length; i++) {
            if (isPossibleDrop(king, king.parentElement, document.getElementById(kingPossibleCells[i]) == true)) {
                mat = false;
            }
        }
        return mat;
    }
}

function isPossibleKillShach(shachElem) {
    var elems = [];
    var side = getSide(shachElem.firstElementChild);
    var allFigures = document.getElementsByTagName("img");
    for (var i = 0; i < allFigures.length; i++) {
        if (getSide(allFigures[i]) != side) {
            dragFromElement = allFigures[i].parentElement;
            if (isPossibleDrop(allFigures[i], dragFromElement, shachElem) == true) {
                elems[elems.length] = allFigures[i];
            }
        }
    }
    if (elems.length == 0) {
        return null;
    }
    else
        return elems;
}

function isPossibleCloseShach(shachElem) {
    var cells = [];
    var side = getSide(shachElem.firstElementChild);
    if (side == 'white')
        var king = document.getElementById('figure28');
    else
        var king = document.getElementById('figure4');
    var kingRow = king.parentElement.getAttribute("id").substring(0, 1);
    var kingCol = king.parentElement.getAttribute("id").substring(2, 3);
    var shachRow = shachElem.getAttribute("id").substring(0, 1);
    var shachCol = shachElem.getAttribute("id").substring(2, 3);
    switch (getName(shachElem.firstElementChild)) {
        case 'tura':
            if (kingRow == shachRow) {
                if (shachCol > kingCol) {
                    for (var i = parseInt(shachCol - 1); i > kingCol; i--) {
                        cells[cells.length] = document.getElementById(`${shachRow} ${i}`);
                    }
                }
                else
                    if (shachCol < kingCol) {
                        for (var i = parseInt(shachCol) + parseInt(1); i < kingCol; i++) {
                            cells[cells.length] = document.getElementById(`${shachRow} ${i}`);
                        }
                    }
            }
            else if (kingCol == shachCol) {
                if (shachRow > kingRow) {
                    for (var i = parseInt(shachRow) - parseInt(1); i > kingRow; i--) {
                        cells[cells.length] = document.getElementById(`${i} ${shachCol}`);
                    }
                }
                else
                    if (shachRow < kingRow) {
                        for (var i = parseInt(shachRow) + parseInt(1); i < kingRow; i++) {
                            cells[cells.length] = document.getElementById(`${i} ${shachCol}`);
                        }
                    }
            }
            break;
        case 'oficer':
            if (kingCol > shachCol && kingRow > shachRow) {
                for (var i = parseInt(shachRow) + parseInt(1); i < kingRow; i++) {
                    for (var j = parseInt(shachCol) + parseInt(1); j < kingCol; j++) {
                        if (kingCol - j == kingRow - i) {
                            cells[cells.length] = document.getElementById(`${i} ${j}`);

                        }
                    }
                }
            }
            else if (kingCol < shachCol && kingRow < shachRow) {
                for (var i = parseInt(shachRow) - parseInt(1); i > kingRow; i--) {
                    for (var j = parseInt(shachCol) - parseInt(1); j > kingCol; j--) {
                        if (shachCol - j == shachRow - i) {
                            cells[cells.length] = document.getElementById(`${i} ${j}`);
                        }
                    }
                }
            }
            else if (kingCol - shachCol == -(kingRow - shachRow)) {
                if (kingCol < shachCol && shachRow < kingRow) {
                    for (var i = parseInt(shachRow) + parseInt(1); i < kingRow; i++) {
                        for (var j = parseInt(shachCol) - parseInt(1); j > kingCol; j--) {
                            if (j - kingCol == kingRow - i) {
                                cells[cells.length] = document.getElementById(`${i} ${j}`);
                            }
                        }
                    }
                }

                else if (kingCol > shachCol && kingRow < shachRow) {
                    for (var i = parseInt(shachRow) - parseInt(1); i > kingRow; i--) {
                        for (var j = parseInt(shachCol) + parseInt(1); j < kingCol; j++) {
                            if (shachCol - j == -(shachRow - i)) {
                                cells[cells.length] = document.getElementById(`${i} ${j}`);
                            }
                        }
                    }
                }
            }
            break;
        case 'ferz':
            if ((shachRow == kingRow && shachCol != kingCol) || (shachRow != kingRow && shachCol == kingCol)) {
                if (kingRow == shachRow) {
                    if (shachCol > kingCol) {
                        for (var i = parseInt(shachCol - 1); i > kingCol; i--) {
                            cells[cells.length] = document.getElementById(`${shachRow} ${i}`);
                        }
                    }
                    else
                        if (shachCol < kingCol) {
                            for (var i = parseInt(shachCol) + parseInt(1); i < kingCol; i++) {
                                cells[cells.length] = document.getElementById(`${shachRow} ${i}`);
                            }
                        }
                }
                else if (kingCol == shachCol) {
                    if (shachRow > kingRow) {
                        for (var i = parseInt(shachRow) - parseInt(1); i > kingRow; i--) {
                            cells[cells.length] = document.getElementById(`${i} ${shachCol}`);
                        }
                    }
                    else
                        if (shachRow < kingRow) {
                            for (var i = parseInt(shachRow) + parseInt(1); i < kingRow; i++) {
                                cells[cells.length] = document.getElementById(`${i} ${shachCol}`);
                            }
                        }
                }
            }
            else if ((kingRow != shachRow && kingCol != shachCol) && ((kingCol - shachCol == kingRow - shachRow || kingCol - shachCol == -(kingRow - shachRow)))) {
                if (kingCol > shachCol && kingRow > shachRow) {
                    for (var i = parseInt(shachRow) + parseInt(1); i < kingRow; i++) {
                        for (var j = parseInt(shachCol) + parseInt(1); j < kingCol; j++) {
                            if (kingCol - j == kingRow - i) {
                                cells[cells.length] = document.getElementById(`${i} ${j}`);

                            }
                        }
                    }
                }
                else if (kingCol < shachCol && kingRow < shachRow) {
                    for (var i = parseInt(shachRow) - parseInt(1); i > kingRow; i--) {
                        for (var j = parseInt(shachCol) - parseInt(1); j > kingCol; j--) {
                            if (shachCol - j == shachRow - i) {
                                cells[cells.length] = document.getElementById(`${i} ${j}`);
                            }
                        }
                    }
                }
                else if (kingCol - shachCol == -(kingRow - shachRow)) {
                    if (kingCol < shachCol && shachRow < kingRow) {
                        for (var i = parseInt(shachRow) + parseInt(1); i < kingRow; i++) {
                            for (var j = parseInt(shachCol) - parseInt(1); j > kingCol; j--) {
                                if (j - kingCol == kingRow - i) {
                                    cells[cells.length] = document.getElementById(`${i} ${j}`);
                                }
                            }
                        }
                    }

                    else if (kingCol > shachCol && kingRow < shachRow) {
                        for (var i = parseInt(shachRow) - parseInt(1); i > kingRow; i--) {
                            for (var j = parseInt(shachCol) + parseInt(1); j < kingCol; j++) {
                                if (shachCol - j == -(shachRow - i)) {
                                    cells[cells.length] = document.getElementById(`${i} ${j}`);
                                }
                            }
                        }
                    }
                }
            }
            break;
    }     
    return cells;
}
    


function getElemsCloseShach(cells) {
    var elems = [];
    var side = getSide(shachElem.firstElementChild);
    var allFigures = document.getElementsByTagName("img");
    for (var i = 0; i < allFigures.length; i++) {
        if (getSide(allFigures[i]) != side) {
            dragFromElement = allFigures[i].parentElement;
            for (var j = 0; j < cells.length; j++) {
                if (isPossibleDrop(allFigures[i], dragFromElement, cells[j]) == true) {
                    elems[elems.length] = allFigures[i];
                }
            }
        }
    }
    if (elems.length == 0) {
        return null;
    }
    else
        return elems;
}

function isPossibleDrop(elem, dragFromElem, dropElem) {
    var side = getSide(elem);
    var name = getName(elem);
    var idStart = dragFromElem.getAttribute("id");
    var idStartRow = idStart.substring(0, 1);
    var idStartCol = idStart.substring(2, 3);
    var idStop = dropElem.getAttribute("id");
    var idStopRow = idStop.substring(0, 1);
    var idStopCol = idStop.substring(2, 3);
    switch (name) {
        case 'infantry':
            if ((side == 'black' && idStartCol == idStopCol && (idStopRow - idStartRow == -1 || idStopRow - idStartRow == -2))
                || (side == 'black' && (idStartCol == idStopCol - 1 || idStopCol == idStartCol - 1) && idStopRow == idStartRow - 1)) {
                if ((idStartCol == idStopCol - 1 || idStopCol == idStartCol - 1) && idStopRow == idStartRow - 1) {
                    if (document.getElementById(`${idStopRow} ${idStopCol}`).hasChildNodes() == true) {
                        var infCell = document.getElementById(`${idStopRow} ${idStopCol}`);
                        var infElem = infCell.firstElementChild;
                        var sideElem = getSide(infElem);
                        if (side == sideElem) {
                            return false;
                        }
                        else return true;
                    }
                }
                else if (idStartCol == idStopCol && (idStopRow - idStartRow == -1 || idStopRow - idStartRow == -2)) {
                    
                    if (idStartRow != 7 && idStopRow - idStartRow == -2) {
                        return false;
                    }
                    if (idStartRow == 7 && idStopRow - idStartRow == -2 && document.getElementById(`${idStartRow - 1} ${idStopCol}`).hasChildNodes() == true) {
                        return false;
                    }
                    if (document.getElementById(`${idStopRow} ${idStopCol}`).hasChildNodes() == true) {
                        return false;
                    }
                    return true;
                }
            }
            else
                if ((side == 'white' && idStartCol == idStopCol && (idStopRow - idStartRow == 1 || idStopRow - idStartRow == 2))
                    || (side == 'white' && (idStartCol == idStopCol - 1 || idStopCol == idStartCol - 1) && idStartRow == idStopRow - 1)) {
                    if ((idStartCol == idStopCol - 1 || idStopCol == idStartCol - 1) && idStartRow == idStopRow - 1) {
                        if (document.getElementById(`${idStopRow} ${idStopCol}`).hasChildNodes() == true) {
                            var infCell = document.getElementById(`${idStopRow} ${idStopCol}`);
                            var infElem = infCell.firstElementChild;
                            var sideElem = getSide(infElem);
                            if (side == sideElem) {
                                return false;
                            }
                            else return true;
                        }
                    }
                    else if (idStartCol == idStopCol && (idStopRow - idStartRow == 1 || idStopRow - idStartRow == 2)) {
                        if (idStartRow != 2 && idStopRow - idStartRow == 2) {
                            return false;
                        }
                        if (idStartRow == 2 && idStopRow - idStartRow == 2 && document.getElementById(`${idStopRow - 1} ${idStopCol}`).hasChildNodes() == true) {
                            return false;
                        }
                        if (document.getElementById(`${idStopRow} ${idStopCol}`).hasChildNodes() == true) {
                            return false;
                        }
                        return true;
                    }
                }
                
            break;
        case 'tura':
            if ((idStartRow == idStopRow && idStartCol != idStopCol) || (idStartRow != idStopRow && idStartCol == idStopCol)) {
                if (idStartRow == idStopRow && idStopCol > idStartCol) {
                    for (var i = parseInt(idStartCol) + parseInt(1); i < idStopCol; i++) {
                        var cell = document.getElementById(`${idStartRow} ${i}`);
                        if (cell.hasChildNodes() == true) {
                            return false;
                        }
                    }
                }
                else if (idStartRow == idStopRow && idStopCol < idStartCol) {
                    for (var i = idStartCol - 1; i > idStopCol; i--) {
                        var cell = document.getElementById(`${idStartRow} ${i}`);
                        if (cell.hasChildNodes() == true) {
                            return false;
                        }
                    }
                }
                else if (idStartCol == idStopCol && idStopRow > idStartRow) {
                    for (var i = parseInt(idStartRow) + parseInt(1); i < idStopRow; i++) {
                        var cell = document.getElementById(`${i} ${idStartCol}`);
                        if (cell.hasChildNodes() == true) {
                            return false;
                        }
                    }
                }
                else if (idStartCol == idStopCol && idStopRow < idStartRow) {
                    for (var i = idStartRow - 1; i > idStopRow; i--) {
                        var cell = document.getElementById(`${i} ${idStartCol}`);
                        if (cell.hasChildNodes() == true) {
                            return false;
                        }
                    }
                }
                return true;
                break;
                
            }
            else
                return false;
            break;
        case 'horse':
            if (((idStopRow - idStartRow == 2 || idStopRow - idStartRow == -2) && (idStopCol - idStartCol == 1 || idStopCol - idStartCol == -1))
                || ((idStopRow - idStartRow == 1 || idStopRow - idStartRow == -1) && (idStopCol - idStartCol == 2 || idStopCol - idStartCol == -2))) {
                return true;
                break;
            }
            else
                return false;
            break;
        case 'oficer':
            if ((idStopRow != idStartRow && idStopCol != idStartCol) && ((idStopCol - idStartCol == idStopRow - idStartRow || idStopCol - idStartCol == -(idStopRow - idStartRow)))) {
                if (idStopCol - idStartCol == idStopRow - idStartRow) {
                    if (idStopCol > idStartCol && idStopRow > idStartRow) {
                        for (var i = parseInt(idStartRow) + parseInt(1); i < idStopRow; i++) {
                            for (var j = parseInt(idStartCol) + parseInt(1); j < idStopCol; j++) {
                                if (idStopCol - j == idStopRow - i) {
                                    var cell = document.getElementById(`${i} ${j}`);
                                    if (cell.hasChildNodes() == true) {
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                    else if (idStopCol < idStartCol && idStopRow < idStartRow) {
                        for (var i = parseInt(idStartRow) - parseInt(1); i > idStopRow; i--) {
                            for (var j = parseInt(idStartCol) - parseInt(1); j > idStopCol; j--) {
                                if (idStartCol - j == idStartRow - i) {
                                    var cell = document.getElementById(`${i} ${j}`);
                                    if (cell.hasChildNodes() == true) {
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                    
                }
                else if (idStopCol - idStartCol == -(idStopRow - idStartRow)) {
                    if (idStopCol < idStartCol && idStartRow < idStopRow) {
                        for (var i = parseInt(idStartRow) + parseInt(1); i < idStopRow; i++) {
                            for (var j = parseInt(idStartCol) - parseInt(1); j > idStopCol; j--) {
                                if (j - idStopCol == idStopRow - i) {
                                    var cell = document.getElementById(`${i} ${j}`);
                                    if (cell.hasChildNodes() == true) {
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                    else if (idStopCol > idStartCol && idStopRow < idStartRow) {
                        for (var i = parseInt(idStartRow) - parseInt(1); i > idStopRow; i--) {
                            for (var j = parseInt(idStartCol) + parseInt(1); j < idStopCol; j++) {
                                if (idStartCol - j == -(idStartRow - i)) {
                                    var cell = document.getElementById(`${i} ${j}`);
                                    if (cell.hasChildNodes() == true) {
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                }
                return true;
                break;
            }
            else
                return false;
            break;
        case 'ferz':
            if ((idStartRow == idStopRow && idStartCol != idStopCol) || (idStartRow != idStopRow && idStartCol == idStopCol)
                || (idStopRow != idStartRow && idStopCol != idStartCol) && ((idStopCol - idStartCol == idStopRow - idStartRow || idStopCol - idStartCol == -(idStopRow - idStartRow)))) {
                if ((idStartRow == idStopRow && idStartCol != idStopCol) || (idStartRow != idStopRow && idStartCol == idStopCol)) {
                    if (idStartRow == idStopRow && idStopCol > idStartCol) {
                        for (var i = parseInt(idStartCol) + parseInt(1); i < idStopCol; i++) {
                            var cell = document.getElementById(`${idStartRow} ${i}`);
                            if (cell.hasChildNodes() == true) {
                                return false;
                            }
                        }
                    }
                    else if (idStartRow == idStopRow && idStopCol < idStartCol) {
                        for (var i = idStartCol - 1; i > idStopCol; i--) {
                            var cell = document.getElementById(`${idStartRow} ${i}`);
                            if (cell.hasChildNodes() == true) {
                                return false;
                            }
                        }
                    }
                    else if (idStartCol == idStopCol && idStopRow > idStartRow) {
                        for (var i = parseInt(idStartRow) + parseInt(1); i < idStopRow; i++) {
                            var cell = document.getElementById(`${i} ${idStartCol}`);
                            if (cell.hasChildNodes() == true) {
                                return false;
                            }
                        }
                    }
                    else if (idStartCol == idStopCol && idStopRow < idStartRow) {
                        for (var i = idStartRow - 1; i > idStopRow; i--) {
                            var cell = document.getElementById(`${i} ${idStartCol}`);
                            if (cell.hasChildNodes() == true) {
                                return false;
                            }
                        }
                    }
                    return true;
                    break;

                }
                else if ((idStopRow != idStartRow && idStopCol != idStartCol) && ((idStopCol - idStartCol == idStopRow - idStartRow || idStopCol - idStartCol == -(idStopRow - idStartRow)))) {
                    if (idStopCol - idStartCol == idStopRow - idStartRow) {
                        if (idStopCol > idStartCol && idStopRow > idStartRow) {
                            for (var i = parseInt(idStartRow) + parseInt(1); i < idStopRow; i++) {
                                for (var j = parseInt(idStartCol) + parseInt(1); j < idStopCol; j++) {
                                    if (idStopCol - j == idStopRow - i) {
                                        var cell = document.getElementById(`${i} ${j}`);
                                        if (cell.hasChildNodes() == true) {
                                            return false;
                                        }
                                    }
                                }
                            }
                        }
                        else if (idStopCol < idStartCol && idStopRow < idStartRow) {
                            for (var i = parseInt(idStartRow) - parseInt(1); i > idStopRow; i--) {
                                for (var j = parseInt(idStartCol) - parseInt(1); j > idStopCol; j--) {
                                    if (idStartCol - j == idStartRow - i) {
                                        var cell = document.getElementById(`${i} ${j}`);
                                        if (cell.hasChildNodes() == true) {
                                            return false;
                                        }
                                    }
                                }
                            }
                        }

                    }
                    else if (idStopCol - idStartCol == -(idStopRow - idStartRow)) {
                        if (idStopCol < idStartCol && idStartRow < idStopRow) {
                            for (var i = parseInt(idStartRow) + parseInt(1); i < idStopRow; i++) {
                                for (var j = parseInt(idStartCol) - parseInt(1); j > idStopCol; j--) {
                                    if (j - idStopCol == idStopRow - i) {
                                        var cell = document.getElementById(`${i} ${j}`);
                                        if (cell.hasChildNodes() == true) {
                                            return false;
                                        }
                                    }
                                }
                            }
                        }
                        else if (idStopCol > idStartCol && idStopRow < idStartRow) {
                            for (var i = parseInt(idStartRow) - parseInt(1); i > idStopRow; i--) {
                                for (var j = parseInt(idStartCol) + parseInt(1); j < idStopCol; j++) {
                                    if (idStopCol - j == i - idStopRow ) {
                                        var cell = document.getElementById(`${i} ${j}`);
                                        if (cell.hasChildNodes() == true) {
                                            return false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return true;
                    break;
                }
                return true;
                break;
            }
            else
                return false;
            break;
        case 'king':
            if ((idStopCol == idStartCol && (idStopRow - idStartRow == 1 || idStopRow - idStartRow == -1))
                || (idStopRow == idStartRow && (idStopCol - idStartCol == 1 || idStopCol - idStartCol == -1))
                || ((idStopRow != idStartRow && idStopCol != idStartCol) && ((idStopCol - idStartCol == 1 && (idStopRow - idStartRow == 1 || idStopRow - idStartRow == -1)) || (idStopCol - idStartCol == -1 && (idStopRow - idStartRow == -1 || idStopRow - idStartRow == 1))))) {
                var allFigures = document.getElementsByTagName("img");
                var oldDragFromElem = dragFromElem;
                for (var i = 0; i < allFigures.length; i++) {
                    var dragFromElem;
                    if (getSide(allFigures[i]) != side) {
                        dragFromElem = allFigures[i].parentElement;
                            if (isPossibleDrop(allFigures[i], dragFromElem, dropElem) == true) {
                                return false;
                            }
                    }
                }
                return true;
                break;
            }
            else
                return false;
            break;

    }
}

function findDroppable(event) {
    figureDrag.avatar.hidden = true;
    var elem = document.elementFromPoint(event.clientX, event.clientY);
    figureDrag.avatar.hidden = false;
    if (elem == null) {
        return null;
    }
    if (elem.closest(".droppable") != null) {
        return elem.closest(".droppable");
    }
    else if (elem.closest(".draggable")) {
        var side1 = getSide(figureDrag.elem);
        var side2 = getSide(elem);
        if (side1 != side2) {
            return elem.parentElement;
        }
    }
    else return null;
}
  

function createAvatar(e) {
    var avatar = figureDrag.elem;
    var old = {
        parent: avatar.parentNode,
        nextSibling: avatar.nextSibling,
        position: avatar.position || '',
        left: avatar.left || '',
        top: avatar.top || '',
        zIndex: avatar.zIndex || ''
    };
    avatar.rollback = function () {
        old.parent.insertBefore(avatar, old.nextSibling);
        avatar.style.position = old.position;
        avatar.style.left = old.left;
        avatar.style.top = old.top;
        avatar.style.zIndex = old.zIndex;
    };
    return avatar;
}


function startDrag(e) {
    var avatar = figureDrag.elem;
    document.querySelector("div.gameField").appendChild(avatar);
    avatar.style.zIndex = 9999;
    avatar.style.position = 'absolute';
}
function getCoords(avatar) {
    var box = avatar.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}





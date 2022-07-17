const colorPicker = document.getElementById('colorPicker')
const eraserBtn = document.getElementById('eraserBtn')
const clearBtn = document.getElementById('clearBtn')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const grid = document.getElementById('grid')

createGrid();

function createGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {

    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
}

function makeColumns(cellNum) {
    
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
}
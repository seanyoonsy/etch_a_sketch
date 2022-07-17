const colorPicker = document.getElementById('colorPicker');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
}

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
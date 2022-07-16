const container = document.getElementById("container");

function makeRows(rowNum) {

    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};


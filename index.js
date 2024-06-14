const container = document.querySelector(".container");

function grid(num) {
    for(let i = 0; i < num; i++) {
        let row = document.createElement("div");
        // row.style.border = "1px solid black";
        row.style.width = "100%";
        row.className = "row";
        container.appendChild(row); 
        for(let j = 0; j < num; j++) {
            let column = document.createElement("div");
            column.style.border = "1px solid grey";
            column.style.width = "100%";
            column.style.height = "100%";
            column.className = "column";
            function mouseOver() {
                column.style.backgroundColor = "#C3B1E1";
            }
            column.addEventListener("mouseover", mouseOver);
            row.appendChild(column);
    }
    }  
};

promptUser() 

function promptUser() {
    let gridNum = prompt("heyo choose a number between 1-100...");
    parseInt(gridNum);
    if(gridNum == "" || isNaN(gridNum)) {
        alert("U should have typed in a number!");
        grid(16);
    } else if(gridNum < 1 || gridNum > 100) {
        alert("You can't choose that! :(");
        grid(16);
    } else {
        grid(gridNum);
    }
};



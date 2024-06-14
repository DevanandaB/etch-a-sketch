const heading = document.createElement("h1");
heading.classList.add("heading");
heading.textContent = "--Etch-a-sketch--"

const container = document.querySelector(".container");
const clearBtn = document.querySelector("#clearBtn");
const colorBtn = document.querySelector("#colorBtn");

document.body.insertBefore(heading, container);

clearBtn.addEventListener("click", clear);

function grid(num) {
    for(let i = 0; i < num; i++) {
        let row = document.createElement("div");
        // row.style.border = "1px solid black";
        row.style.width = "100%";
        row.className = "row";
        container.appendChild(row); 
        for(let j = 0; j < num; j++) {
            let column = document.createElement("div");
            column.style.border = "1px solid white";
            column.style.width = "100%";
            column.style.height = "100%";
            column.className = "column";
            function mouseOver() {
                let currOpacity = column.style.opacity;
                column.style.backgroundColor = "black";
                if(currOpacity) {
                    column.style.opacity = Number(currOpacity) + 0.1;
                } else {
                    column.style.opacity = 0.1;
                }
            };
            function colorChange() {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                let bgColor = `rgb(${red}, ${green}, ${blue})`;
                column.style.backgroundColor = bgColor;
            }
            column.addEventListener("mouseover", mouseOver);
            colorBtn.addEventListener("click", function() {column.addEventListener("mouseover", colorChange)});
            row.appendChild(column);
    }
    }  
};

promptUser();

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

function clear() {
    container.innerHTML = '';
    promptUser();
}

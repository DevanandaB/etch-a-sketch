const container = document.querySelector(".container");

function grid(num) {
    for(let i = 0; i < num; i++) {
        let row = document.createElement("div");
        row.style.border = "1px solid black";
        row.style.width = "100%";
        row.className = "row";
        container.appendChild(row); 
        for(let j = 0; j < num; j++) {
            let column = document.createElement("div");
            column.style.border = "1px solid black";
            column.style.width = "100%";
            column.style.height = "100%";
            column.className = "column";
            row.appendChild(column);
    }
    }   
    
};

grid(16);

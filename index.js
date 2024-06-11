const container = document.querySelector(".container");

function grid(num) {
    for(let i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.border = "1px solid";
    container.appendChild(div);
};
};

grid(16);
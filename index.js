// const container = document.querySelector(".container");

// function grid(num) {
//     for(let i = 0; i < num; i++) {
//         let div = document.createElement("div");
//         div.style.border = "1px solid";
//         div.style.width = "100%";
//         div.style.height = "100%";
//         container.appendChild(div);
//     }
// };

// grid(16);

const container = document.querySelector(".container");
const hori = document.querySelector(".hori");
const vert = document.querySelector(".vert");

function grid(num) {
    for(let i = 0; i < num; i++) {
        let div = document.createElement("div");
        div.style.border = "1px solid";
        div.style.width = "100%";
        div.style.height = "100%";
        hori.appendChild(div);
    }
    for(let i = 0; i < num; i++) {
        let div2 = document.createElement("div");
        div2.style.border = "1px solid";
        div2.style.width = "100%";
        div2.style.height = "100%";
        vert.appendChild(div2);
    }
};

grid(16);

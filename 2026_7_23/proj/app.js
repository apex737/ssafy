// 먼저 input_screen 에서 입력을 받음
// row, col을 받으면 이걸로 map을 작성

const inputScreen = document.querySelector(".input_screen");
const mainScreen = document.querySelector(".main_screen");
const map = document.querySelector(".map");
const row = inputScreen.querySelector(".row");
const col = inputScreen.querySelector(".col");
const btn = inputScreen.querySelector(".btn");
const statusScreen = document.querySelector(".status_screen");
const status = statusScreen.querySelector(".status");
const lifeSpan = statusScreen.querySelector(".life_span");
const battery = statusScreen.querySelector(".battery");
const coverage = statusScreen.querySelector(".coverage");

let mapRow = 0;
let mapCol = 0;

function createGrid(rows, cols) {
    map.innerHTML = "";
    map.style.display = "grid";
    map.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    map.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        map.appendChild(cell);
    }
}

btn.addEventListener("click", ()=>{
    mapRow = Number(row.value);
    mapCol = Number(col.value);

    if (!mapRow || !mapCol || mapRow < 1 || mapRow > 5 || mapCol < 1 || mapCol > 5) {
        alert("1부터 5까지 숫자를 입력해주세요.");
        return;
    }

    createGrid(mapRow, mapCol);

    inputScreen.style.display = "none";
    mainScreen.style.display = "flex";
});


function moveRobot () {

}


// setTimeOut: 정상 -> 빨강 -> 정상으로 색깔 바꿈
// setInverval: 특정 주기로 계속 실행


// 화면 전체에서 입력을 받는다.
document.addEventListener("keydown", (evt)=>{
    switch(evt.key.toUpperCase())
    {
        case "W":
            console.log("W");
            break;
        case "A":
            console.log("A");
            break;
        case "S":
            console.log("S");
            break;
        case "D":
            console.log("D");
            break;
    }
});
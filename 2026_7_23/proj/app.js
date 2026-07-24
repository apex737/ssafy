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

function createByFlex(
  rows,
  cols /*
flex 삼중으로 써서 먼저 구현
=> 2중 for 루프를 돌면서 document.createElement + appendChild
1) 먼저 column으로 배치한다
2) 다음으로 row로 배치한다
3) 마지막으로 각 셀을 중앙정렬한다.
*/,
) {
  map.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    // 1. div.row 생성
    const row = document.createElement("div");
    row.className = "row";

    // 2. 생성된 row를 다시 div.cell로 분할
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
    }

    // 3. div.col로 이루어진 row들을 map에 넣기
    map.appendChild(row);

    // 4. 클래스로 CSS 스타일링
  }
}

// Grid 써서 구현
// function createByGrid(rows, cols) {}

btn.addEventListener("click", () => {
  mapRow = Number(row.value);
  mapCol = Number(col.value);

  if (
    !mapRow ||
    !mapCol ||
    mapRow < 1 ||
    mapRow > 5 ||
    mapCol < 1 ||
    mapCol > 5
  ) {
    alert("1부터 5까지 숫자를 입력해주세요.");
    return;
  }

  createByFlex(mapRow, mapCol);

  inputScreen.style.display = "none";
  mainScreen.style.display = "flex";
});

function toggleColor() {}

function warnSign() {
  setTimeout(toggleColor, 2000);
}

function moveRobot(key) {
  switch (key) {
    case "W":
      if (mapRow > 0) {
        mapRow--;
        // 방문처리 관련
      } else {
        //  경보처리..
      }
      break;
    case "A":
      if (mapCol > 0) mapCol--;
      else {
        //  경보처리..
      }
      break;
    case "S":
      if (mapRow < N - 1) mapRow++;
      else {
        //  경보처리..
      }
      break;
    case "D":
      if (mapCol < N - 1) mapCol++;
      else {
        //  경보처리..
      }
      break;
  }
}

// setTimeOut: 정상 -> 빨강 -> 정상으로 색깔 바꿈
// setInverval: 특정 주기로 계속 실행

// 화면 전체에서 입력을 받는다.
document.addEventListener("keydown", (evt) => {
  moveRobot(evt.key.toUpperCase());
});

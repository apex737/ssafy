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
let r = 0;
let c = 0;
let stateFlag = false; // 아직 입력 안받음

// visited[mapRow][mapCol]; 동적으로 생성하는 방법??
// 현재 위치에 있는 녀석만 로봇이미지 넣기

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

  // curr 이라는 클래스만 붙여서, 그놈만 로봇 이미지 삽입하면될듯?
//   const firstRow = map.querySelector(".row").firstChild;
//   const firstChild = firstRow.querySelector(".cell").firstChild;
//   const imgTag = document.createElement("img");
//   imgTag.className = "curr";
//   imgTag.src = "robot-icon.jpg";
//   firstChild.appendChild(firstChild);
}

// 몇번째 row인가? 몇번째 col인가?
function displayRobot(row, col){
    // 기존 로봇 이미지 제거
    const prevImg = map.querySelector(".robot-img");
    if (prevImg) prevImg.remove();

    // CSS/DOM의 nth-child는 1부터 시작합니다.
    const currRow = map.querySelector(`.row:nth-child(${row + 1})`);
    const currCell = currRow.querySelector(`.cell:nth-child(${col + 1})`);
    let imgTag = document.createElement("img");
    imgTag.src = "./robot-icon.jpg";
    currCell.appendChild(imgTag);
}




// Grid 써서 구현
// function createByGrid(rows, cols) {}
// visited나 seen 배열을 만들어서 방문체크
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
  displayRobot(0,0);
});

function toggleColor() {}

function warnSign() {
  setTimeout(toggleColor, 2000);
}

function moveRobot(key) {
  switch (key) {
    case "W":
      if (r > 0) {
          r--;
        // 방문처리 관련
      } else {
        //  경보처리..
      }
      break;
    case "A":
      if (c > 0) {
        c--;

      }
      else {
        //  경보처리..
      }
      break;
    case "S":
      if (r < mapRow - 1) {
          r++;
      }
      else {
        //  경보처리..
      }
      break;
    case "D":
      if (c < mapCol - 1) {
        c++;
      }
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
  const key = evt.key;
  if(key === "w" || key === "a" || key === "s" || key === "d")
  {
    // 1. 기존 로봇을 없앤다


    // 2. 인덱스를 이동시킨다
    moveRobot(key.toUpperCase());

    // 3. 새로운 자리에 로봇을 놓는다
    displayRobot(r, c);
  }
});


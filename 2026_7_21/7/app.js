const dy = [1,-1,0,0];
const dx = [0,0,-1,1];

const cur = {
    x: 0,
    y: 0
}

// dir
// 상: 0
// 하: 1
// 좌: 2
// 우: 3
function move(dir) {
    cur.x += dx[dir];
    cur.y += dy[dir];
}

function printCurLocation() {
    console.log(`(${cur.x}, ${cur.y})`);
}

move(1);
move(1);
printCurLocation();
move(3);
printCurLocation();
move(2);
printCurLocation();
move(0);
move(0);
printCurLocation();

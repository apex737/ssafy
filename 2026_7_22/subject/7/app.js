const txt = document.querySelector(".txt");
const btn = document.querySelector(".btn");
const box = document.querySelector(".box")
const names = document.querySelectorAll("ul span");
names.forEach((el)=>console.log(el.textContent))

btn.addEventListener("click", () => {
    let str = "주문내역: ";

    const items = document.querySelectorAll("ul li");
    const checkedList = [];

    items.forEach((li) => {
        // 특성 선택자
        const checkbox = li.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            checkedList.push(li.querySelector("span").textContent);
        }
    });

    checkedList.forEach((name) => {
        str += name + " ";
    });

    if(checkedList.length > 0) {
        txt.textContent = str;
    } else {
        txt.textContent = "";
    }
});

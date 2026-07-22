const txt = document.querySelector(".txt");
const btn = document.querySelector(".btn");
const box = document.querySelector(".box")
const names = document.querySelectorAll("ul span");
names.forEach((el)=>console.log(el.textContent))

// ul 체크박스 -- span 공간 균일하게 안배하기?
btn.addEventListener("click", () => {
    let str = "주문내역: ";

    const items = document.querySelectorAll("ul li");
    const checkedList = [];

    items.forEach((li) => {
        const checkbox = li.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            checkedList.push(li.querySelector("span").textContent);
        }
    });

    checkedList.forEach((name) => {
        str += name + " ";
    });

    txt.textContent = str;
});

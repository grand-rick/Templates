const li = document.querySelectorAll(".nav-item");
const section = document.querySelectorAll("section");

function activeMenu() {
    let length = section.length;
    while(--length && window.scrollY + 97 < section[length].offsetTop) {}
        li.forEach(ltx => ltx.classList.remove("active"));
        li[length].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);









// Scroll top button
window.addEventListener("scroll", () => {
    const scrollHeight = window.scrollY;
    const moveTopButton = document.querySelector(".move-top");
    if(scrollHeight > 420) {
        moveTopButton.style.opacity = 1;
        moveTopButton.style.top = "85vh";
        moveTopButton.style.right = "30px";
    } else {
        moveTopButton.style.opacity = 0;
        moveTopButton.style.top = "50vh";
        moveTopButton.style.right = "20vw";
    }
});
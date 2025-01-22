const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () =>  {
    menu.visibility.style = "hidden";
});
open.addEventListener("click", () => {
    menu.visibility.style = "visible";
});


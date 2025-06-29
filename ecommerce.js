const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () =>  {
    menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
    menu.style.visibility = "visible";
});

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        productCards.forEach(card => {

            const cardCategory = card.getAttribute("data-category");

            if (category === "all" || card.getAttribute("data-category") === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
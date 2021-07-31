window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    document.getElementById("navbar").style.background = "#fff";
}
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});

//scroll js
const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');

rightArrow.onclick = function () {
  document.getElementById('road').scrollLeft += 50;
};
leftArrow.onclick = function () {
  document.getElementById('road').scrollLeft -= 50;
};
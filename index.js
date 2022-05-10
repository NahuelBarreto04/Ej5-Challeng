const menu = document.getElementById('burguer');
const list = document.getElementById('menu');
menu.addEventListener("click", function () {
    list.classList.toggle("show");
});

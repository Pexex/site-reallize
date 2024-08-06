const header = document.querySelector('header');
const menu = document.querySelectorAll('.menu-btn');
const burguer = document.querySelector('.hamburger-menu');
console.log(burguer)

window.addEventListener("scroll", () =>{
    if(window.scrollY > 300) {
        header.classList.add("change-color");
        menu.forEach(link => link.classList.add("menu-colors"))
        burguer.classList.add("burguer-colors")
    } else {
        header.classList.remove("change-color");
        menu.forEach(link => link.classList.remove("menu-colors"))
        burguer.classList.remove("burguer-colors")
    }
})
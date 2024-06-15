//Declaraciones
const menuBtn = document.getElementById("menu-icon");
const menuList = document.querySelector("nav .menu");
//Funciones

//Eventos
menuBtn.onclick = function(){
    menuList.classList.toggle("active")
}



window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
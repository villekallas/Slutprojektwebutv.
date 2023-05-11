const header= document.querySelector("header");

window.addEventListener("scroll", function(){
header.classList.toggle ("sticky", this.window.scrollY > 0);
})
/* koden ovan gör så att headern inte försvinner när man scrollar ner utan är konstant*/

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open')
}
/* koden ovan gör att när man trycker på menyknappen så får den öppnas menyn, genom att den får en ny class och då en ny style i style.css,
vilket gör den synlig. */





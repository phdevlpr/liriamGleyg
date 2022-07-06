const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {

    const windowTop = window.pageYOffset + ((window.innerHeight * 0.85));
    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });

}

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
});



//TOGGLE MENU//

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.curretTarget.setAttribute('aria-expanded', 'active');
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Close menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Open menu');
    }
    
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

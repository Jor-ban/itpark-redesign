// scroll button
document.getElementById('scroll-down').onclick = function() {
    window.scrollTo({
        top: 600,
        behavior: 'smooth'
    });
};


// typeWriter
const typewriter = new Typewriter(
    document.getElementById('typerText'),
    { loop: true }
);
const params = document.querySelectorAll('p[hero-param]');
for(let param of params) {
    typewriter.typeString(param.innerHTML).pauseFor(2000).deleteAll()
}
typewriter.start();

// Splide slider

const projectsRoll1 = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    pagination: false,
    arrows: false,
    perPage: 4,
    autoScroll: {
        speed: 0.5,
    },
}).mount( window.splide.Extensions );
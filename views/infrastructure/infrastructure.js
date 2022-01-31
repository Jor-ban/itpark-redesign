document.getElementById("stage-switch").addEventListener('change', changeStage)

const curtains = document.getElementById('curtains')

function changeStage(event) {
    if(event.target.checked) {
        curtains.classList.add('second-stage')
    } else {
        curtains.classList.remove('second-stage')
    }
}

const splide = new Splide( '.uzb-map-info', {
    type   : 'loop',
    drag   : 'free',
    pagination: false,
    perMove: 1,
    scroll: false,
    drag: true,
} ).mount();

const dots = document.querySelectorAll('.map-dots__dot[data-id]')
dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        splide.go(index)
    })
})
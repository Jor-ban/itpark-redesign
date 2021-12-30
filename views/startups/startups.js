new Splide( '.splide', {
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
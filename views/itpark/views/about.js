new Splide('.splide-acts', {
    perPage: 4,
    perMove: 1,
    padding: '30px',
    pagination: false,
    breakpoints: {
        1400: {
            perPage: 3,
            perMove: 1,
        },
        992: {
            perPage: 2,
            perMove: 1,
        },
        768: {
            perPage: 1,
            perMove: 1,
        },
    }
}).mount()

new Splide('.splide-members', {
    type: 'loop',
    perPage: 4,
    perMove: 3,
    lazyLoad: 'nearby',
    padding: '50px',
    pagination: false,
    breakpoints: {
        992: {
            perPage: 3,
            perMove: 3,
        },
        767: {
            perPage: 2,
            perMove: 1,
        },
        540: {
            perPage: 2,
            perMove: 1,
        }
    }
}).mount()
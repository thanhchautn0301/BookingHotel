var splide = new Splide( '.splide', { 
    fixedWidth: '172px',
    gap: '10px',
    perPage: 7,
    perMove: 1,
    pagination: false,
    rewind : false,
    breakpoints:{
      600:{
        fixedWidth: '168px',
        perPage: 3
      },
      768:{
        fixedWidth: '170px',
        gap: '5px',
        perPage: 4
      },
      1024:{
        perPage: 5
      },
      1200:{
        perPage: 6
      }
    }
  } );
  splide.mount();

var splide2 = new Splide( '.splide2', {
    fixedWidth: '172px',
    gap: '10px',
    perPage: 7,
    perMove: 1,
    pagination: false,
    rewind : false,
    breakpoints:{
      600:{
        fixedWidth: '168px',
        perPage: 3
      },
      768:{
        fixedWidth: '170px',
        gap: '5px',
        perPage: 4
      },
      1024:{
        perPage: 5
      },
      1200:{
        perPage: 6
      }
    }
} );
splide2.mount();


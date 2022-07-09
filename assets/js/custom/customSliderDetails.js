var splide = new Splide(".splide", {
    type  : 'fade',
    heightRatio: 1,
    focusableNodes: string = 'hehe',
    pagination: false,
    arrows: true
  });

  var thumbnails = new Splide( '.splide2', {
    rewind          : false,
    isNavigation    : true,
    fixedWidth: '100px',
    fixedHeight: '100px',
    arrows: false,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    }
} );

  splide.sync( thumbnails );
  splide.mount();
  thumbnails.mount();






  var zoomInImg = document.getElementById("zoom-in-img");
  var btnCloseZoom = document.querySelector('.btn-close-zoom');
  var thumbImg = document.querySelectorAll(".img-thumbnail");
  var colShowImg = document.querySelector(".modal-img-scroll");


  for (let i = 0; i < thumbImg.length; i++) {
    thumbImg[i].addEventListener("click", function (eImg) {
      colShowImg.classList.add('d-none');
      zoomInImg.classList.remove('d-none');
      btnCloseZoom.classList.remove('invisible');
    });
  }
  btnCloseZoom.addEventListener('click', function(){
    btnCloseZoom.classList.add('invisible');
    colShowImg.classList.remove('d-none');
  })
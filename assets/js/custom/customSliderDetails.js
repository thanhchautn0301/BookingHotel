var splide = new Splide(".splide", {
    type  : 'fade',
    heightRatio: 1,
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

  for (var i = 0; i < thumbImg.length; i++) {
    thumbImg[i].addEventListener("click", function () {
      zoomInImg.classList.remove('d-none');
      colShowImg.classList.add('d-none');
      btnCloseZoom.classList.remove('d-none');
    });
  }
  btnCloseZoom.addEventListener('click', function(){
    btnCloseZoom.classList.add('d-none');
    colShowImg.classList.remove('d-none');
    document.getElementById('hotel-img-modal').style.overflow = 'hidden';
  })
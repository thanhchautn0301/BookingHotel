$(window).scroll(function() {
    var headerHeight = document.getElementById('header').clientHeight;
    var heightScroll = $(window).scrollTop();
    var accommodationField = $('#accommodation-fieldset');
    var navHeaderHeight =  document.getElementById('nav-header').clientHeight;
    var accommodationFilter = $('#accommodation-filter');
    if(heightScroll >= headerHeight){

      if(document.body.clientWidth > 990){
        accommodationField.css('position','fixed');
        accommodationField.css('top','0');
        accommodationField.css('z-index','999');
        accommodationFilter.css('transform','translateY(calc('+ navHeaderHeight + 'px - 16px))');
      }
      }
      
    else if(heightScroll < (headerHeight - 16)){
      accommodationField.css('position','static');
      accommodationFilter.css('transform','translateY(0)');
    }

    });

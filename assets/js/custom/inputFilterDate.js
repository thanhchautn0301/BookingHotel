$("#input-filter-date").flatpickr({   
    mode: "range",
    showMonths: 2,
    minDate: "today",
    dateFormat: "d-m-Y"
  });

  let countClick = 0;
  $("#input-filter-date").click(function(){
      countClick+=1;
      if(countClick%2==0){
        $('.flatpickr-calendar').removeClass('open');
      }
      else{
        $('.flatpickr-calendar').addClass('open');
      }
  })
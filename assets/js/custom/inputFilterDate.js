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



var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var startPicker = $('#checkin-date-filter').flatpickr({
  minDate: "today",
  onChange: function(selectedDates, dateStr, instance) {
        $('#checkin-date-filter').val(new Date(dateStr).toLocaleDateString("vi-VN",options));
          if($('#checkout-date-filter').data("date-value") === "" || new Date(dateStr) > new Date($('#checkout-date-filter').data("date-value"))){     
            $('#checkout-date-filter').data("date-value",dateStr)
            endPicker.setDate(new Date(dateStr));
            $('#checkout-date-filter').val(new Date(dateStr).toLocaleDateString("vi-VN",options));
            console.log($('#checkin-date-filter').data("date-value"));
            console.log($('#checkout-date-filter').data("date-value"));
        }  
         $('#checkin-date-filter').data("date-value",dateStr)

  }
});

var endPicker = $('#checkout-date-filter').flatpickr({
  minDate: "today",
  onChange: function(selectedDates, dateStr, instance) {
        $('#checkout-date-filter').val(new Date(dateStr).toLocaleDateString("vi-VN",options));
        
        if($('#checkin-date-filter').data("date-value") === "" || new Date(dateStr) < new Date($('#checkin-date-filter').data("date-value"))){
          $('#checkin-date-filter').data("date-value",dateStr)
          startPicker.setDate(new Date(dateStr));
          $('#checkin-date-filter').val(new Date(dateStr).toLocaleDateString("vi-VN",options));
          console.log($('#checkin-date-filter').data("date-value"));
          console.log($('#checkout-date-filter').data("date-value"));
        }   
        $('#checkout-date-filter').data("date-value",dateStr)
        

  }
});





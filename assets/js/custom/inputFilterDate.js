$("#input-filter-date").flatpickr({   
    mode: "range",
    showMonths: 2,
    minDate: "today",
    dateFormat: "d-m-Y"
  });

$("#input-filter-date").click(function(){

    // if(!$('.flatpickr-calendar').hasClass('open')){
    //   $('.flatpickr-calendar').addClass('open'); 
    // }
    
    // else{
    //   $('.flatpickr-calendar').removeClass('open');
    // }

    
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



$("#check-room-date").flatpickr({   
  mode: "range",
  showMonths: 2,
  minDate: "today",
  dateFormat: "d-m-Y",
  defaultDate: 'today'
});

$('.flatpickr-input:visible').on('focus', function () {
  $(this).blur()
})
$('.flatpickr-input:visible').prop('readonly', false)



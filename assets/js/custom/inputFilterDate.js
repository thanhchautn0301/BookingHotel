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
  dateFormat: "d-m-Y",
  onChange: function(selectedDates, dateStr, instance) {
        $('#checkin-date-filter').val(dateStr);
        var dateStrs = dateStr.split("-");
        var dateStrsFormat = new Date(dateStrs[2],--dateStrs[1],dateStrs[0]);
        var checkoutDate = $('#checkout-date-filter').val().split("-");
        var checkoutDateFormat = new Date(checkoutDate[2],--checkoutDate[1],checkoutDate[0]);
          if($('#checkout-date-filter').val() === "" || dateStrsFormat > checkoutDateFormat){     
            
            endPicker.setDate(dateStrsFormat);
            $('#checkout-date-filter').val(dateStr);
           }  

  }
});

var endPicker = $('#checkout-date-filter').flatpickr({
  minDate: "today",
  dateFormat: "d-m-Y",
  onChange: function(selectedDates, dateStr, instance) {
        $('#checkout-date-filter').val(dateStr);
        var dateStrs = dateStr.split("-");
        var dateStrsFormat = new Date(dateStrs[2],--dateStrs[1],dateStrs[0]);
        var checkinDate = $('#checkin-date-filter').val().split("-");
        var checkinDateFormat = new Date(checkinDate[2],--checkinDate[1],checkinDate[0]);
        console.log(dateStrsFormat < checkinDateFormat);
          if($('#checkin-date-filter').val() === "" || dateStrsFormat < checkinDateFormat){        
            startPicker.setDate(dateStrsFormat);
            $('#checkin-date-filter').val(dateStr);
           }  
        

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



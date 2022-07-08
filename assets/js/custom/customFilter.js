  var inputFilterRoom = $('#input-filter-room');
  
  /* Begin of Action */
  $('.btn-action').click(function () {

        var thisType = $(this).data("type");
        var fieldName = $(this).data("field");
        var thisSpan = $("span[data-field='" + fieldName + "']");
        var currentVal = thisSpan.text();
        var thisInput = $("input[aria-label='filterRoom']");
        var currentResult = thisInput.val().split('-');
  
        if (thisType == 'minus') {
  
          var btnPlus = $('.btn-action[data-type="plus"][data-field="' + fieldName + '"]');
          btnPlus.removeClass('disable');
  
  
          if (fieldName == 'adults' || fieldName == 'rooms') {
    
  
            --currentVal;
  
  
            if (currentVal <= 1) {
              thisSpan.html(1);
              $(this).addClass('disable');
            }
            else {
              $(this).removeClass('disable');   
              thisSpan.html(currentVal);
            }
  
            if (fieldName == 'adults') {
                currentResult[0] =  thisSpan.text() + ' người lớn ';
  
            }
            
  
            else if(fieldName == 'rooms'){
                currentResult[2] = ' ' +  thisSpan.text() + ' phòng';
            }   
  
          }

          else if(fieldName == 'childs'){

            --currentVal;
  
            if (currentVal <= 0) {
              thisSpan.html(0);
              $(this).addClass('disable');
            }
            else {
              $(this).removeClass('disable');   
              thisSpan.html(currentVal);
            }

            currentResult[1] = ' ' +  thisSpan.text() + ' trẻ em ';
            
          }
  
          thisInput.val(currentResult[0] + '-' + currentResult[1] + '-' + currentResult[2]);
  
        }
  
        else if (thisType == 'plus') {
  
          var btnMinus = $('.btn-action[data-type="minus"][data-field="' + fieldName + '"]');
          btnMinus.removeClass('disable');
  
          if (fieldName == 'adults' || fieldName == 'rooms') {
  
            ++currentVal;
  
            if (currentVal >= 30) {
              thisSpan.html(30);
              $(this).addClass('disable');
            }
            else {
              thisSpan.html(currentVal);
              $(this).removeClass('disable');
            }
  
            if (fieldName == 'adults') {
                currentResult[0] = thisSpan.text() + ' người lớn ';
  
            }
  
            else if(fieldName == 'rooms'){
              currentResult[2] = ' ' +  thisSpan.text() + ' phòng';
            }    
  
          }
  
          else if (fieldName == 'childs') {
  
            ++currentVal;
  
  
            if (currentVal >= 10) {
              thisSpan.html(10);
              $(this).addClass('disable');
            }
            else {
              thisSpan.html(currentVal);
              $(this).removeClass('disable');
            }
  
            currentResult[1] = ' ' +  thisSpan.text() + ' trẻ em ';
  
          }
          thisInput.val(currentResult[0] + '-' + currentResult[1] + '-' + currentResult[2]);
        }
  
   })

  /*End of Action*/


  /*Open Filter Form*/

  inputFilterRoom.click(function(event){
    event.stopPropagation();
    $('#filter-room-form').toggleClass('active');
    if($('#filter-room-form').hasClass('active')){
      $('#filter-room-form').add('active');
    }
  })

  $('#filter-room-form').click(function(event2){
    event2.stopPropagation();
    $('#filter-room-form').addClass('active');
  })

  $(document).click(function(){
    $('#filter-room-form').removeClass('active');
  })
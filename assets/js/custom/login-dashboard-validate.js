$('#loginForm').validate({
    // validation rules for registration form
errorClass: "error-class",
validClass: "valid-class",
errorElement: 'div',
errorPlacement: function(error, element) {
   if(element.parent('.input-group').length) {
       error.insertAfter(element.parent());
   } else {
       error.insertAfter(element);
   }
},
onError : function(){
   $('.input-group.error-class').find('.help-block.form-error').each(function() {
   $(this).closest('.form-group').addClass('error-class').append($(this));
   });
},
rules:{
   email:{
       required: true,
       email: true
   },
   password:{
       required: true,
       minlength: 8
   }
},
messages:{
   email:{
       required: '*Please enter your email.',
       email: 'Your email is not valid'
   },
   password:{
       required: '*Please enter your password.'
   }
}
});
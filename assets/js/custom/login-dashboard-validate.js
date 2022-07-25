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
       required: true
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

$('[data-mask]').inputmask()
flatpickr("#dob", {
  dateFormat: 'd-m-Y'
});

 var createAccount = $('#registerModal #create-account-form').validate({
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
       name:{
            required: true
       }
       ,
       password:{
           required: true,
           pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
       },
       phone:{
           required: true
       }
       ,
        dob:{
            required: true
        }
    },
    messages:{
       email:{
           required: '*Please enter your email.',
           email: 'Your email is not valid'
       },
       password:{
           required: '*Please enter your password.',
           pattern: "*Your password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
       },
       name:{
            required: '*Please enter your name'
       },
       phone:{
            required: '*Please enter your phone number'
        }
       ,
        dob:{
                required: '*Please enter you birthday'
        }
    }

 });


$('#registerModal #create-account-form').rules('add',{
    pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
})

$('#create-account-link').on('click',function(){
    createAccount.resetForm();
    $('#registerModal #create-account-form input').removeClass('error-class');
    $('#registerModal #create-account-form input').removeClass('valid-class');
    $('#registerModal #create-account-form input').val('');
})


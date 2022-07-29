$(document).click(function(e){
    $('#user-features').removeClass('show');
});

$('[data-mask]').inputmask();
  document.getElementById('show-hide-password').addEventListener('click',function(e){
  e.preventDefault();
  if(document.getElementById('user-password-input').getAttribute('type') == 'password'){
      document.querySelector('#show-hide-password i').classList.add('fa-eye');
      document.querySelector('#show-hide-password i').classList.remove('fa-eye-slash');
      document.getElementById('user-password-input').setAttribute('type','text');
  }
  else{
      document.querySelector('#show-hide-password i').classList.add('fa-eye-slash');
      document.querySelector('#show-hide-password i').classList.remove('fa-eye');
      document.getElementById('user-password-input').setAttribute('type','password');
}
})

$('#user-name-change').validate({
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
    name:{
      required: true,
      minlength: 5
    }
  },
  messages:{
    name:{
      required: '*Please enter your name',
      minlength: '*Your name length should be greater than 4'
    }
  }
})

$('#user-password-change').validate({
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
    password:{
      required: true,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    }
  },
  messages:{
    password:{
      required: '*Please enter your password',
      pattern: '*Your password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
    }
  }
})
$('#user-phone-change').validate({
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
    phone:{
      required: true
    }
  },
  messages:{
    phone:{
      required: '*Please enter your phone number'
    }
  }
})
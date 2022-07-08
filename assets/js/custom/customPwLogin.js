var loginForm = document.getElementById('login-hotel-form');
        

loginForm.addEventListener('submit',function(event){

    var passwordInput = document.getElementById('user-password-input');
    if(passwordInput.value === ""){
            event.preventDefault();
            event.stopPropagation();
            passwordInput.classList.add('invalid');
            document.querySelector('.invalid-feedback.invalid-password-feedback').style.display = "block";
            document.querySelector('.invalid-feedback.invalid-password-feedback').innerHTML = 'Vui lòng nhập mật khẩu';   
    }
    else{
        passwordInput.classList.remove('invalid');
        document.querySelector('.invalid-feedback.invalid-password-feedback').style.display = "none";
    }
    
})




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





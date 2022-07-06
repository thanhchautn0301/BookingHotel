var loginForm = document.getElementById('login-hotel-form');
        

loginForm.addEventListener('submit',function(event){
    event.preventDefault();
    event.stopPropagation();
    var passwordInput = document.getElementById('user-password-input');
    var passwordConfirmInput = document.getElementById('user-password-input-cf');

    if(passwordInput.value === "" || passwordConfirmInput.value === ""){
        if(passwordInput.value === ""){
                passwordInput.classList.add('invalid');
                document.querySelector('.invalid-feedback.invalid-password-feedback').style.display = "block";
                document.querySelector('.invalid-feedback.invalid-password-feedback').innerHTML = 'Vui lòng nhập mật khẩu mới';
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').style.display = "none";
                passwordConfirmInput.classList.remove('invalid');
        }
        else if(passwordConfirmInput.value === ""){
                passwordConfirmInput.classList.add('invalid');
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').style.display = "block";
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').innerHTML = "Vui lòng xác nhận mật khẩu";
                document.querySelector('.invalid-feedback.invalid-password-feedback').style.display = "none";
                passwordInput.classList.remove('invalid');
            }
        if(passwordInput.value === "" && passwordConfirmInput.value === ""){
                passwordInput.classList.add('invalid');
                document.querySelector('.invalid-feedback.invalid-password-feedback').style.display = "block";
                document.querySelector('.invalid-feedback.invalid-password-feedback').innerHTML = 'Vui lòng nhập mật khẩu mới';
                passwordConfirmInput.classList.add('invalid');
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').style.display = "block";
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').innerHTML = "Vui lòng xác nhận mật khẩu";
         }
    }


    else{
        var resultCheck = passwordCheck(passwordInput.value);
        if(resultCheck){
            
            if(passwordInput.value !== passwordConfirmInput.value){
                passwordConfirmInput.classList.add('invalid');
                passwordConfirmInput.classList.add('invalid');
                document.querySelector('.invalid-feedback.invalid-password-feedback').style.display = "none";
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').style.display = 'block';
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').innerHTML = "Mật khẩu xác nhận không khớp";
            }
            else{ /*Login thanh cong*/
                passwordInput.classList.remove('invalid');
                passwordConfirmInput.classList.remove('invalid');
                document.querySelector('.invalid-feedback.invalid-password-feedback').style.display = "none";
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').style.display = "none";
                document.getElementById('success-popup-msg').classList.remove('d-none');
            }
            
        }



        else{

            passwordInput.classList.add('invalid');
            passwordConfirmInput.classList.add('invalid');
            if(passwordInput.value !== passwordConfirmInput.value){
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').style.display = 'block';
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').innerHTML = "Mật khẩu xác nhận không khớp";
            }
            else{
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').innerHTML = "Mật khẩu phải có ít nhất 8 ký tự, 1 chữ cái thường, 1 chữ cái hoa và 1 số";
                document.querySelector('.invalid-feedback.invalid-password-cf-feedback').style.display = "block";
            }
            document.querySelector('.invalid-feedback.invalid-password-feedback').innerHTML = "Mật khẩu phải có ít nhất 8 ký tự, 1 chữ cái thường, 1 chữ cái hoa và 1 số";
            document.querySelector('.invalid-feedback.invalid-password-feedback').style.display = "block";
        }
        


   }
   
        
})


function passwordCheck(password){
    var passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(password.toString().match(passwordRegx)){
        return true;
    }
    else{
        return false;
    }
}


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

document.getElementById('show-hide-cf-password').addEventListener('click',function(e){
    e.preventDefault();
    if(document.getElementById('user-password-input-cf').getAttribute('type') == 'password'){
        document.querySelector('#show-hide-cf-password i').classList.add('fa-eye');
        document.querySelector('#show-hide-cf-password i').classList.remove('fa-eye-slash');
        document.getElementById('user-password-input-cf').setAttribute('type','text');
    }
    else{
        document.querySelector('#show-hide-cf-password i').classList.add('fa-eye-slash');
        document.querySelector('#show-hide-cf-password i').classList.remove('fa-eye');
        document.getElementById('user-password-input-cf').setAttribute('type','password');
    }
})



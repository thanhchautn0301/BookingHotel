var loginForm = document.getElementById('login-hotel-form');

loginForm.addEventListener('submit',function(event){
    let emailText = document.getElementById('email-input').value;
    if(emailText === null || emailText === ""){
        document.querySelector('.invalid-feedback.invalid-email-feedback').style.display = 'block';
        document.querySelector('.invalid-feedback.invalid-email-feedback').innerHTML = ' Vui lòng nhập email của bạn';
        event.preventDefault();
        event.stopPropagation();
        document.getElementById('email-input').classList.add('invalid');

    }
    else{
        let result = validateForm(emailText.toLowerCase());
        if(!result){
            event.preventDefault();
            event.stopPropagation();
            document.querySelector('.invalid-feedback.invalid-email-feedback').style.display = 'block';
            document.querySelector('.invalid-feedback.invalid-email-feedback').innerHTML = 'Vui lòng nhập dúng định dạng email';
            document.getElementById('email-input').classList.add('invalid');    
        }
    }
    
        
})

document.getElementById('email-input').addEventListener('keyup',function(){

    let emailText= document.getElementById('email-input').value;

    if(!validateForm(emailText.toLowerCase())){
        document.querySelector('.invalid-feedback.invalid-email-feedback').style.display = 'block';
        document.querySelector('.invalid-feedback.invalid-email-feedback').innerHTML = 'Vui lòng nhập dúng định dạng email';
        document.getElementById('email-input').classList.add('invalid');
    }
    else{
        document.getElementById('email-input').classList.remove('invalid');
        document.querySelector('.invalid-feedback.invalid-email-feedback').style.display = 'none';
    }
})

function validateForm(email){
    if(email.toString().toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        return true;
    }
    else{
        return false;
    }
}

var email=document.forms['form']['email'];
var password=document.forms['form']['password'];
var email_error=document.getElementById('email_error');
var password_error=document.getElementById('password_error');
email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',password_verify);
function validate(){
    if(email.value.length<10){
        email.style.border="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
    if(password.value.length<10){
        password.style.border="1px solid red";
        password_error.style.display="block";
        password.focus();
        return false;
    }
}
function email_verify(){
    if(email.value.length>=10){
        email.style.border="1px solid red";
        email_error.style.display="none";
        return true;
    }
    if(password.value.length>=10){
        password.style.border="1px solid red";
        password_error.style.display="none";
        return true;
    }
}
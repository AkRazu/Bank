document.getElementById('login-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password 
    const passwordField = document.getElementById('user-password');
    const userPassworld = passwordField.value;
    if(userEmail == 'ninja@gmail.com' && userPassworld == 'ninja1234'){
        
        window.location.href ='banking.html';
    }else{
        alert('Not Valid');
    }
})

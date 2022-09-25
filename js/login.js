document.getElementById('btn-sumit').addEventListener('click', function(){
    // step-2: get the email address inside the input find
    // always remeber to used .value to get text form  an input field
    const emailField = document.getElementById('user-email',);
    const email = emailField.value;
    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value form the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    
    //  do not verify email password on the clinet side
    // step-4: verify email and password and check wheter valid user or not

    if(email === 'admin@gmail.com' && password ==='hello'){
        window.location.href = "bank.html";

    }
    else{
        console.log('invalid user')
    }
    
})


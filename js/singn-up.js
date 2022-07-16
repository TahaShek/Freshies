let submitform=()=>{
    let username=document.querySelector('#name1').value;
    let email=document.querySelector('#email').value;
    let mypassword=document.querySelector('#password').value;
    let confirmypassword=document.querySelector('#psw').value;
    // let confirmypasswordfeild=document.querySelector('#psw');
    let showmessage=document.querySelector('.show');
    // let usernamefe=document.querySelector('#name1');
    
    try {
        if(username.trim()===""||email.trim()===''){
            alert('fill the blanks ')
            // usernamefe.style.border='1px solid pink'
            return false;
        }
        if(mypassword.trim()===''||confirmypassword!==mypassword)
        {
            showmessage.innerHTML='write correct password';
            // confirmypasswordfeild.style.border='1px solid red';
            
            return false;
        }
        else{
            alert('login granted')
            true;
        }

    } catch (error) {
        alert(error.message);
    }
}
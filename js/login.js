let login=()=>{
    let email=document.querySelector('#email').value;
    let password=document.querySelector('#psw').value;
    try {
        if(email.trim()===''|| password.trim()===""){
            alert('fill the blanks')
        return false
        }
        else{
            alert('login Sucessfull')
            return true;
        }
    } catch (error) {
        alert(error.message);
    }
}
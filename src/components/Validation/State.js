export const validateState = (name, value)=> {
    const emailRegex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/;
    const regPass = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/;
   
    if(name === 'email'){
        document.getElementById('password-error').style.display='none'
        if(!emailRegex.test(value)) {
           return document.getElementById('email-error').style.display='block'
        } else {
           return document.getElementById('email-error').style.display='none'
        }
    }
    if(name === 'password') {
        document.getElementById('email-error').style.display='none'
        if(!regPass.test(value)) {
          return document.getElementById('password-error').style.display='block'
        } else {
           return document.getElementById('password-error').style.display='none'
        }
    }
}
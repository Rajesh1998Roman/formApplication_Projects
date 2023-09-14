const from = document.querySelector('form');
const username=document.querySelector('username');
const email=document.querySelector('email');
const password=document.querySelector('password');
const conpassword=document.querySelector('conpassword');



from.addEventListener('submit',(e)=>{
    if(! validateInput()){
  e.preventDefault();}
 
})

function validateInput(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const conpasswordVal=conpassword.value.trim();

    if(usernameVal===''){
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }

    if(email===''){
        setError(email,'email is required')
    }
    else if(!ValidateEmail(emailVal)){
        setError(email,'please enter a vaild email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal===''){
        setError(password,'password is required')
    }
    else if(passwordVal.length<8){
         setError(password,'password must be atleast 8 char long')
    }
    else{
        setSuccess(password)
    }

    if(conpasswordVal===''){
       setError(conpassword,'confirm password is requred')
    }
    else if(conpasswordVal!==passwordVal){
        setError(conpassword,'password does not match')
    }
    else{
        setSuccess(conpassword)
    }

}

function setError(elements,message){
    const inputGroup=elements.parentElement;
    const errroElement=inputGroup.querySelector('.error');

    errroElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(elements){
    const inputGroup=elements.parentElement;
    const errroElement=inputGroup.querySelector('.error');

    errroElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}



function ValidateEmail(email) {
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    };
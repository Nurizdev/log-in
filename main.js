

const form=document.querySelector("form")
const emailInput = document.querySelector(".emailInput");
const passwordInput = document.querySelector(".passwordInput");
const submitButton = document.querySelector(".submitButton");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
})
submitButton.addEventListener("click",()=>{
    if(emailInput.value ==="nurizasanova07@gmail.com" ){
        emailInput.style.border= "3px solid green"
        }
        else{
 emailInput.style.border="3px solid red"
        }

        if(passwordInput.value ==="Nuriza" ){
            passwordInput.style.border= "3px solid green"
            }
            else{
                passwordInput.style.border="3px solid red"
            }

})


let click = 0;

function handleClick() {
   
    click++;

    if (click > 5) {
        submitButton.disabled=true;
        submitButton.style.background="grey";
    }
}


submitButton.addEventListener('click', handleClick);

    
    

    

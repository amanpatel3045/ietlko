var password = document.getElementById("mypassword");
var email = document.getElementById("myemail");
password.placeholder = "Password"

 document.getElementById("signin__btn").addEventListener("click",showalert);

 function showalert(){
     if(email.value.length===0&&password.value.length===0){
         document.getElementById("emailerror").innerHTML="Please enter the Email"
         document.getElementById("passworderror").innerHTML="Please enter the Password"
     }else if(email.value.length===0){
        document.getElementById("emailerror").innerHTML="Please enter the Email"
     }else if(password.value.length===0){
        document.getElementById("passworderror").innerHTML="Please enter the Password"
     }

     if(email.value.length!==0&&password.value.length!==0){
        document.getElementById("emailerror").innerHTML=""
        document.getElementById("passworderror").innerHTML=""
    }else if(email.value.length!==0){
       document.getElementById("emailerror").innerHTML=""
    }else if(password.value.length!==0){
       document.getElementById("passworderror").innerHTML=""
    }

 }
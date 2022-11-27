let passwordkey= document.querySelector("#passwordkey").value;
let confirmpass= document.querySelector("#confirm").value;
let error= document.querySelector("#error");
if(passwordkey=="" && confirm==""){
    error.innerHTML="*Please enter password";
} else if(passwordkey == confirmpass){
    error.innerHTML="*Password doesnt match";
}  

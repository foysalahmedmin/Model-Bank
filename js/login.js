function loginValidation(){
    console.log("hello");
    let emailValue = document.getElementById("email").value;
    let passlValue = document.getElementById("pass").value;
    if(emailValue !== "model@bank.com"){
        alert("Your Email Is Not Valid;");
        return false ;
    }else if(passlValue !== "12345"){
        alert("Your Password Is Not Valid;");
        return false ;
    }
    // window.location.href = "bank.html";
    document.getElementById("form").setAttribute("action", "bank.html") ;
    
}
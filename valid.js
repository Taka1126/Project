function validate(){
    var password = document.getElementById("pass");
    var text = document.getElementById("Uname");
    if(password.value == 123){
        alert("Login successful");
        location.replace("homepage.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}
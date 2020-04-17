let btn_login = document.getElementById("btn-login");

btn_login.addEventListener("click", function () {
    
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let message = document.getElementById("smallError");

    if (email.value == "dienrique24@hotmail.com" && password.value =="teamlearn") {
        console.log(window.location.href)
        window.location.href = "file:///C:/Users/dienr/OneDrive/Escritorio/Dev.F/Team-Learning/profile.html"
    }
    else{
        smallError.classList.remove("d-none");
    }
})
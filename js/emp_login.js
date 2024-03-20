
let debounceTimer;
function validateEmail() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
    var email = document.getElementById("email_input").value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === "" || !emailRegex.test(email)) {
        document.getElementById("email_err").innerHTML = "Invalid Username";
        email_input.style.borderColor = "black";
        return false;
    } 
    document.getElementById("email_err").innerHTML = "";
    return true; 
    }, 300);
}

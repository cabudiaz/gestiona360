validateLogin();

function login() {
    localStorage.setItem("login", "user");
    location.href = "index.html";
  }
  
function validateLogin(){
    if(localStorage.getItem("login") == "user"){
        
        location.href = "index.html";
    }
}
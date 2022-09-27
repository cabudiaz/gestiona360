route();
authGuard();

function route() {
  $("#nav").load("nav.html");
  $("#modulos-kpi").load("modulos-kpi.html");
  $("#productos-mas-vendidos").load("productos-mas-vendidos.html");
  $("#footer").load("footer.html");
  $("#charts").load("charts.html");

}

function logOut() {
  localStorage.removeItem("login");
  location.href = "login.html";
}

function authGuard() {
  if (localStorage.getItem("login") != "user") {
    location.href = "login.html";
  }
}







 

 






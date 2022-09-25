route();
authGuard();

function route() {
  $("#nav").load("nav.html");
  $("#modulos-kpi").load("modulos-kpi.html");
  $("#footer").load("footer.html");
}
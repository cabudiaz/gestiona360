route();
authGuard();

function route() {
  $("#nav").load("nav.html");
  $("#modulos-kpi").load("modulos-kpi.html");
  $("#productos-mas-vendidos").load("productos-mas-vendidos.html");
  $("#footer").load("footer.html");

}
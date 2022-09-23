route();
authGuard();

function route() {
  $("#nav").load("nav.html");
  $("#footer").load("footer.html");
}
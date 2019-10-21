var buylink = document.querySelector(".buy-button");
var buypopup = document.querySelector(".modal-add-cart");
var buyclose = buypopup.querySelector(".modal-close");

buylink.addEventListener("click", function (evt) {
  evt.preventDefault();
  buypopup.classList.add("modal-show");
});
buyclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buypopup.classList.remove("modal-show");
  buypopup.classList.remove("modal-error");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (buypopup.classList.contains("modal-show")) {
      buypopup.classList.remove("modal-show");
      buypopup.classList.remove("modal-error");
    }
  }
});

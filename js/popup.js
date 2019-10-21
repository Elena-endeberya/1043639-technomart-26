var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var fio = popup.querySelector("[name=fio]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");
var isStorageSupport = true;
var storage_fio = "";
var storage_email = "";
try {
  storage_fio = localStorage.getItem("fio");
  storage_email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage_fio && storage_email) {
    fio.value = storage_fio;
    email.value = storage_email;
    letter.focus();
    }  else {
    fio.focus();
  }
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  if (!fio.value || !email.value || !letter.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("fio", fio.value);
      localStorage.setItem("email", email.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

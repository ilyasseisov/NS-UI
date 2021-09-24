const btn = document.querySelector(".btn-submit");

btn.addEventListener("click", function () {
  this.classList.add("btn--loading");

  setTimeout(function () {
    btn.classList.remove("btn--loading");
  }, 5000);
});

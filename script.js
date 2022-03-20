const toTopBtn = document.getElementById("toTop");
const navbar = document.getElementById("navbar");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
    document.getElementById("navbar").style.top = "0";
  } else {
    toTopBtn.style.display = "none";
    document.getElementById("navbar").style.top = "-100px";
  }
}

toTopBtn.addEventListener("click", () => {
  // For Safari
  document.body.scrollTop = 0;

  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
});

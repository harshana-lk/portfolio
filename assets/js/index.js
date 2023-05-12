document.querySelector(".about-btn").addEventListener("click", () => {
  document.querySelector("#header").style.display = "none";
  document.querySelector("#about").style.overflow = "visible";
});

document.querySelector(".contact-btn").addEventListener("click", () => {
  document.querySelector("#header").style.display = "none";
  document.querySelector("#contact").style.overflow = "visible";
});

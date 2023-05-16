const close = document.getElementById("close");
const sidebar = document.querySelector(".sidebar");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const subFeature = document.getElementById("sub-feature");
const featureDown = document.getElementById("feature-down");
const featureUp = document.getElementById("feature-up");
const companyDown = document.getElementById("company-down");
const companyUp = document.getElementById("company-up");
const companySub = document.getElementById("company-sub");

menu.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

close.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  overlay.classList.add("hidden");
});

featureDown.addEventListener("click", () => {
  subFeature.classList.remove("hidden");
  featureUp.classList.remove("hidden");
  featureDown.classList.add("hidden");
});

featureUp.addEventListener("click", () => {
  subFeature.classList.add("hidden");
  featureDown.classList.remove("hidden");
  featureUp.classList.add("hidden");
});

companyDown.addEventListener("click", () => {
  companySub.classList.remove("hidden");
  companyUp.classList.remove("hidden");
  companyDown.classList.add("hidden");
});

companyUp.addEventListener("click", () => {
  companySub.classList.add("hidden");
  companyDown.classList.remove("hidden");
  companyUp.classList.add("hidden");
});

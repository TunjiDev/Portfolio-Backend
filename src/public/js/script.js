const btnScrollTo = document.querySelector(".toTopDiv");
const topSection = document.querySelector("#welcome-section");

btnScrollTo.addEventListener("click", function(e) {
  topSection.scrollIntoView({behavior: "smooth"});
});
const form = document.querySelector(".form");
const submit = document.querySelector(".submit");
const btnContainer = document.querySelector(".btn-container");
const rateUs = document.querySelector(".rate-us");
const thankYouPage = document.querySelector(".thank-you");
const noOfRate = document.querySelector(".no-of-rate");

let noOfStart = 0;

btnContainer.addEventListener("click", function (e) {
  const target = e.target.textContent;
  noOfStart = target;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

submit.addEventListener("click", function () {
  if (noOfStart === 0) alert("pls rate us");
  else {
    rateUs.classList.add("hidden");
    thankYouPage.classList.remove("hidden");
    noOfRate.textContent = noOfStart;
  }
});

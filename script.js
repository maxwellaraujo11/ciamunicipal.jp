const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const slideleft = document.querySelectorAll(".slider-left");
const slideright = document.querySelectorAll(".slider-right");

slideleft.forEach((element) => myObserver.observe(element));
slideright.forEach((element) => myObserver.observe(element));

// Obtém todos os elementos <details>
var detailsElements = document.querySelectorAll("details");

// Adiciona um evento de clique a cada elemento <summary>
detailsElements.forEach(function (details) {
  var summary = details.querySelector("summary");
  summary.addEventListener("click", function () {
    // Fecha todos os detalhes, exceto o que foi clicado
    detailsElements.forEach(function (otherDetails) {
      if (otherDetails !== details) {
        otherDetails.removeAttribute("open");
      }
    });
  });
});
